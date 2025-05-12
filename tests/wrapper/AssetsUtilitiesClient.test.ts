require('jest-fetch-mock').enableMocks();
import { Client as AssetsUtilitiesClient } from "../../src/wrapper/AssetsUtilitiesClient";
import * as Webflow from "../../src/api";
import fetchMock from "jest-fetch-mock";
import crypto from "crypto";
import FormDataConstructor from 'form-data';

fetchMock.enableMocks();

describe("AssetsUtilitiesClient", () => {
    const mockOptions = {
        environment: () => ({
            base: "https://api.webflow.com/v2",
            dataApi: "https://api.webflow.com/v2",
            contentDeliveryApi: "https://api-cdn.webflow.com/v2",
            production: "https://api.webflow.com/v2",
            cdn: "https://api-cdn.webflow.com/v2",
        }),
        accessToken: () => "test-access-token",
    };

    const siteId = "test-site-id";
    const mockUploadUrl = "https://mock-s3-upload-url.com";
    const mockFileName = "test-file.txt";
    const mockFileContent = "Hello, world!";
    const mockFileBuffer = Buffer.from(mockFileContent);
    const mockFileHash = crypto.createHash("md5").update(mockFileBuffer).digest("hex");

    let client: AssetsUtilitiesClient;

    beforeEach(() => {
        fetchMock.resetMocks();
        client = new AssetsUtilitiesClient(mockOptions);
    });

    it("should throw an error if it cannot fetch the asset successfully", async () => {
        const invalidUrl = "https://invalid-url.com";

        // Mock the fetch response to simulate a failure
        fetchMock.mockResponseOnce("", { status: 404, statusText: "Not Found" });

        await expect(client["_getBufferFromUrl"](invalidUrl)).rejects.toThrow(
            "Failed to fetch asset from URL: https://invalid-url.com. Status: 404 Not Found"
        );

        // Ensure fetch was called with the correct URL
        expect(fetchMock).toHaveBeenCalledWith(invalidUrl);
    });

    it("should throw an error for invalid file input", async () => {
        await expect(client.createAndUpload(siteId, {
            fileName: mockFileName,
            file: null as unknown as ArrayBuffer, // Invalid file
        })).rejects.toThrow();
    });

    it("should throw an error if it fails to create Webflow Asset metadata", async () => {
        // Mock the Webflow API to throw an error
        jest.spyOn(client, "create").mockRejectedValue(new Error("Webflow API error"));

        await expect(client.createAndUpload(siteId, {
            fileName: mockFileName,
            file: mockFileBuffer.buffer, // Pass ArrayBuffer
        })).rejects.toThrow();

        // Ensure the create method was called
        expect(client.create).toHaveBeenCalledWith(siteId, expect.objectContaining({
            fileName: mockFileName,
            fileHash: expect.any(String),
        }), undefined);
    });

    it("should throw an error if it fails to upload to S3", async () => {
        // Mock the Webflow API response for creating asset metadata
        const mockCreateResponse = {
            uploadUrl: mockUploadUrl,
            uploadDetails: {
                "xAmzAlgorithm": "AWS4-HMAC-SHA256",
                "xAmzDate": "20231010T000000Z",
                "xAmzCredential": "mock-credential",
                "xAmzSignature": "mock-signature",
                "successActionStatus": "201",
                "contentType": "text/plain",
            },
        };
        jest.spyOn(client, "create").mockResolvedValue(mockCreateResponse as Webflow.AssetUpload);

        // Mock the S3 upload response to fail
        fetchMock.mockResponseOnce("S3 upload error", { status: 500 });

        await expect(client.createAndUpload(siteId, {
            fileName: mockFileName,
            file: mockFileBuffer.buffer, // Pass ArrayBuffer
        })).rejects.toThrow();

        // Ensure the S3 upload was attempted
        expect(fetchMock).toHaveBeenCalledWith(mockUploadUrl, expect.objectContaining({
            method: "POST",
            body: expect.any(FormDataConstructor),
        }));
    });

    it("should create and upload a file from an ArrayBuffer", async () => {
        // Mock the Webflow API response for creating asset metadata
        const mockCreateResponse = {
            uploadUrl: mockUploadUrl,
            uploadDetails: {
                "xAmzAlgorithm": "AWS4-HMAC-SHA256",
                "xAmzDate": "20231010T000000Z",
                "xAmzCredential": "mock-credential",
                "xAmzSignature": "mock-signature",
                "successActionStatus": "201",
                "contentType": "text/plain",
            },
        };
        jest.spyOn(client, "create").mockResolvedValue(mockCreateResponse as Webflow.AssetUpload);

        // Mock the S3 upload response
        fetchMock.mockResponseOnce(JSON.stringify({ success: true }), { status: 201 });

        const result = await client.createAndUpload(siteId, {
            fileName: mockFileName,
            file: mockFileBuffer.buffer, // Pass ArrayBuffer
        });

        // Assertions
        expect(client.create).toHaveBeenCalledWith(siteId, expect.objectContaining({
            fileName: mockFileName,
            fileHash: expect.any(String),
        }), undefined);

        expect(fetchMock).toHaveBeenCalledWith(mockUploadUrl, expect.objectContaining({
            method: "POST",
            body: expect.any(FormDataConstructor),
        }));

        expect(result).toEqual(mockCreateResponse);
    });

    it("should create and upload a file from a URL", async () => {
        // Mock the file fetch response (first fetch call)
        fetchMock.mockResponseOnce(mockFileContent);

        // Mock the Webflow API response for creating asset metadata
        const mockCreateResponse = {
            uploadUrl: mockUploadUrl,
            uploadDetails: {
                "xAmzAlgorithm": "AWS4-HMAC-SHA256",
                "xAmzDate": "20231010T000000Z",
                "xAmzCredential": "mock-credential",
                "xAmzSignature": "mock-signature",
                "successActionStatus": "201",
                "contentType": "text/plain",
            },
        };
        jest.spyOn(client, "create").mockResolvedValue(mockCreateResponse as Webflow.AssetUpload);

        // Mock the S3 upload response (second fetch call)
        fetchMock.mockResponseOnce(JSON.stringify({ success: true }), { status: 201 });

        const result = await client.createAndUpload(siteId, {
            fileName: mockFileName,
            file: "https://mock-file-url.com", // Pass asset URL
        });

        // Assertions for the file fetch
        expect(fetchMock).toHaveBeenNthCalledWith(1, "https://mock-file-url.com");

        // Assertions for the Webflow API call
        expect(client.create).toHaveBeenCalledWith(siteId, {
            fileName: mockFileName,
            fileHash: mockFileHash,
        }, undefined);

        // Assertions for the S3 upload
        expect(fetchMock).toHaveBeenNthCalledWith(2, mockUploadUrl, expect.objectContaining({
            method: "POST",
            body: expect.any(FormDataConstructor),
        }));

        expect(result).toEqual(mockCreateResponse);
    });
});
