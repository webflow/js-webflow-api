import { Webhooks } from "../api/resources/webhooks/client/Client";
import crypto from "crypto";

// Extends the namespace declared in the Fern generated client
declare module "../api/resources/webhooks/client/Client" {
    export namespace Webhooks {
        interface RequestSignatureDetails {
            /** The headers of the incoming webhook request as a record-like object */
            headers: Record<string, string>;
            /** The body of the incoming webhook request as a string */
            body: string;
            /** The secret key generated when creating the webhook or the OAuth client secret */
            secret: string;
        }
    }
}

export class Client extends Webhooks {
    constructor(protected readonly _options: Webhooks.Options) {
        super(_options);
    }

    /**
     * Verify that the signature on the webhook message is from Webflow
     * @link https://developers.webflow.com/data/docs/working-with-webhooks#validating-request-signatures
     *
     * @param {Webhooks.RequestSignatureDetails.headers} requestSignatureDetails - details of the incoming webhook request
     * @example
     *     function incomingWebhookRouteHandler(req, res) {
     *       const headers = req.headers;
     *       const body = JSON.stringify(req.body);
     *       const secret = getWebhookSecret(WEBHOOK_ID);
     *       const isAuthenticated = await client.webhooks.verifySignature({ headers, body, secret });
     *
     *       if (isAuthenticated) {
     *           // Process the webhook
     *       } else {
     *           // Alert the user that the webhook is not authenticated
     *       }
     *       res.sendStatus(200);
     *     }
     *
     */
    public async verifySignature({ headers, body, secret }: Webhooks.RequestSignatureDetails): Promise<boolean> {
        // Creates a HMAC signature following directions from https://developers.webflow.com/data/docs/working-with-webhooks#steps-to-validate-the-request-signature
        const createHmac = async (signingSecret: string, message: string) => {
            const encoder = new TextEncoder();

            // Encode the signingSecret key
            // @ts-expect-error TS2339: Property 'subtle' does not exist on type 'typeof import("crypto")'.
            const key = await crypto.subtle.importKey(
                "raw",
                encoder.encode(signingSecret),
                { name: "HMAC", hash: "SHA-256" },
                false,
                ["sign"]
            );

            // Encode the message and compute HMAC signature
            // @ts-expect-error TS2339: Property 'subtle' does not exist on type 'typeof import("crypto")'.
            const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));

            // Convert signature to hex string
            return Array.from(new Uint8Array(signature))
                .map((b) => b.toString(16).padStart(2, "0"))
                .join("");
        };

        const message = `${headers["x-webflow-timestamp"]}:${body}`;

        const generatedSignature = await createHmac(secret, message);
        return headers["x-webflow-signature"] === generatedSignature;
    }
}