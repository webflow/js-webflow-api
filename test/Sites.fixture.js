export const SitesFixture = {
  sites: {
    response: [
      {
        _id: "580e63e98c9a982ac9b8b741",
        createdOn: "2016-10-24T19:41:29.156Z",
        name: "api_docs_sample_json",
        shortName: "api-docs-sample-json",
        lastPublished: "2016-10-24T23:06:51.251Z",
        previewUrl:
          "https://d1otoma47x30pg.cloudfront.net/580e63e98c9a982ac9b8b741/201610241603.png",
        timezone: "America/Los_Angeles",
        database: "580e63fc8c9a982ac9b8b744",
      },
      {
        _id: "580ff8c3ba3e45ba9fe588bb",
        createdOn: "2016-10-26T00:28:54.191Z",
        name: "Copy of api_docs_sample_json",
        shortName: "api-docs-sample-json-086c6538f9b0583762",
        lastPublished: null,
        previewUrl:
          "https://d1otoma47x30pg.cloudfront.net/580e63e98c9a982ac9b8b741/201610241603.png",
        timezone: "America/Los_Angeles",
        database: "580ff8c3ba3e45ba9fe588bf",
      },
      {
        _id: "580ff8d7ba3e45ba9fe588e9",
        createdOn: "2016-10-26T00:29:13.634Z",
        name: "Copy of api_docs_sample_json",
        shortName: "api-docs-sample-json-ce077aa6c5cd3e0177",
        lastPublished: null,
        previewUrl:
          "https://d1otoma47x30pg.cloudfront.net/580e63e98c9a982ac9b8b741/201610241603.png",
        timezone: "America/Los_Angeles",
        database: "580ff8d7ba3e45ba9fe588ed",
      },
    ],
  },
  site: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
    },
    response: {
      _id: "580e63e98c9a982ac9b8b741",
      createdOn: "2016-10-24T19:41:29.156Z",
      name: "api_docs_sample_json",
      shortName: "api-docs-sample-json",
      lastPublished: "2016-10-24T19:43:17.271Z",
      previewUrl:
        "https://d1otoma47x30pg.cloudfront.net/580e63e98c9a982ac9b8b741/201610241243.png",
      timezone: "America/Los_Angeles",
      database: "580e63fc8c9a982ac9b8b744",
    },
  },
  domains: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
    },
    response: [
      {
        _id: "589a331aa51e760df7ccb89d",
        name: "test-api-domain.com",
      },
      {
        _id: "589a331aa51e760df7ccb89e",
        name: "www.test-api-domain.com",
      },
    ],
  },
  publish: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
      domains: ["test-api-domain.com"],
    },
    response: {
      queued: true,
    },
  },
};

export default SitesFixture;
