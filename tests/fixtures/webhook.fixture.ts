export const WebhookFixture = {
  getOne: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
      webhookId: "582266e0cd48de0f0e3c6d8b",
    },
    response: {
      _id: "582266e0cd48de0f0e3c6d8b",
      triggerType: "form_submission",
      triggerId: "580e63e98c9a982ac9b8b741",
      site: "580e63e98c9a982ac9b8b741",
      createdOn: "2016-11-08T23:59:28.572Z",
    },
  },
  list: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
    },
    response: [
      {
        _id: "57ca0a9e418c504a6e1acbb6",
        triggerType: "form_submission",
        triggerId: "580e63e98c9a982ac9b8b741",
        site: "580e63e98c9a982ac9b8b741",
        lastUsed: "2016-09-06T21:12:22.148Z",
        createdOn: "2016-09-02T23:26:22.241Z",
      },
      {
        _id: "578d85cce0c47cd2865f4cf2",
        triggerType: "form_submission",
        triggerId: "580e63e98c9a982ac9b8b741",
        site: "580e63e98c9a982ac9b8b741",
        lastUsed: "2016-09-06T21:12:22.142Z",
        createdOn: "2016-07-19T01:43:40.585Z",
      },
      {
        _id: "578d85cce0c47cd2865f4cf3",
        triggerType: "form_submission",
        triggerId: "580e63e98c9a982ac9b8b741",
        site: "580e63e98c9a982ac9b8b741",
        lastUsed: "2016-09-06T21:12:22.192Z",
        createdOn: "2016-07-19T01:43:40.605Z",
      },
    ],
  },
  create: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
      triggerType: "form_submission",
      url: "https://example.com",
    },
    response: {
      _id: "582266e0cd48de0f0e3c6d8b",
      triggerType: "form_submission",
      triggerId: "580e63e98c9a982ac9b8b741",
      site: "580e63e98c9a982ac9b8b741",
      createdOn: "2016-11-08T23:59:28.572Z",
    },
  },
  delete: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
      webhookId: "582266e0cd48de0f0e3c6d8b",
    },
    response: {
      deleted: 1,
    },
  },
};
