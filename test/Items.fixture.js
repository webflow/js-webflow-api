export const ItemsFixture = {
  items: {
    parameters: {
      collectionId: "580e63fc8c9a982ac9b8b745",
    },
    response: {
      items: [
        {
          _archived: false,
          _draft: false,
          color: "#a98080",
          name: "Exciting blog post title",
          "post-body": "<p>Blog post contents...</p>",
          "post-summary": "Summary of exciting blog post",
          "main-image": {
            fileId: "580e63fe8c9a982ac9b8b749",
            url: "https://d1otoma47x30pg.cloudfront.net/580e63fc8c9a982ac9b8b744/580e63fe8c9a982ac9b8b749_1477338110257-image20.jpg",
          },
          slug: "exciting-post",
          author: "580e640c8c9a982ac9b8b778",
          "updated-on": "2016-11-15T22:45:32.647Z",
          "updated-by": "Person_5660c5338e9d3b0bee3b86aa",
          "created-on": "2016-11-15T22:45:32.647Z",
          "created-by": "Person_5660c5338e9d3b0bee3b86aa",
          "published-on": null,
          "published-by": null,
          _cid: "580e63fc8c9a982ac9b8b745",
          _id: "582b900cba19143b2bb8a759",
        },
      ],
      count: 1,
      limit: 1,
      offset: 0,
      total: 5,
    },
  },
  item: {
    parameters: {
      collectionId: "580e63fc8c9a982ac9b8b745",
      itemId: "582b900cba19143b2bb8a759",
    },
    response: {
      items: [
        {
          _archived: false,
          _draft: false,
          color: "#a98080",
          name: "Exciting blog post title",
          "post-body": "<p>Blog post contents...</p>",
          "post-summary": "Summary of exciting blog post",
          "main-image": {
            fileId: "580e63fe8c9a982ac9b8b749",
            url: "https://d1otoma47x30pg.cloudfront.net/580e63fc8c9a982ac9b8b744/580e63fe8c9a982ac9b8b749_1477338110257-image20.jpg",
          },
          slug: "exciting-post",
          author: "580e640c8c9a982ac9b8b778",
          "updated-on": "2016-11-15T22:45:32.647Z",
          "updated-by": "Person_5660c5338e9d3b0bee3b86aa",
          "created-on": "2016-11-15T22:45:32.647Z",
          "created-by": "Person_5660c5338e9d3b0bee3b86aa",
          "published-on": null,
          "published-by": null,
          _cid: "580e63fc8c9a982ac9b8b745",
          _id: "582b900cba19143b2bb8a759",
        },
      ],
      count: 1,
      limit: 1,
      offset: 0,
      total: 5,
    },
  },
  publish_items: {
    parameters: {
      collectionId: "580e63fc8c9a982ac9b8b745",
      itemIds: [
        "62aa37923cf7a9de1ca4469c",
        "62aa37923cf7a9de1ca44697",
        "62aa37923cf7a9de1ca44696",
      ],
    },
    response: {
      publishedItemIds: [
        "62aa37923cf7a9de1ca4469c",
        "62aa37923cf7a9de1ca44697",
        "62aa37923cf7a9de1ca44696",
      ],
      errors: [],
    },
  },
  remove_items: {
    parameters: {
      collectionId: "580e63fc8c9a982ac9b8b745",
      itemIds: [
        "62aa37923cf7a9de1ca4469c",
        "62aa37923cf7a9de1ca44697",
        "62aa37923cf7a9de1ca44696",
      ],
    },
    response: {
      deletedItemIds: [
        "62aa37923cf7a9de1ca4469c",
        "62aa37923cf7a9de1ca44697",
        "62aa37923cf7a9de1ca44696",
      ],
      errors: [],
    },
  },
  remove_item: {
    parameters: {
      collectionId: "580e63fc8c9a982ac9b8b745",
      itemId: "582b900cba19143b2bb8a759",
    },
    response: {
      deleted: 1,
    },
  },
};

export default ItemsFixture;
