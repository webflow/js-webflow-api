export const UsersFixture = {
  user: {
    parameters: {
      userId: "6287ec36a841b25637c663df",
      siteId: "580e63e98c9a982ac9b8b741",
    },
    response: {
      _id: "6287ec36a841b25637c663df",
      createdOn: "2022-05-20T13:46:12.093Z",
      updatedOn: "2022-05-20T13:46:12.093Z",
      emailVerified: true,
      status: "verified",
      data: {
        "accept-privacy": false,
        "accept-communications": false,
        email: "Some.One@home.com",
        name: "Some One",
      },
    },
  },
  users: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
    },
    response: {
      users: [
        {
          _id: "6287ec36a841b25637c663df",
          createdOn: "2022-05-20T13:46:12.093Z",
          updatedOn: "2022-05-20T13:46:12.093Z",
          emailVerified: false,
          status: "unverified",
          data: {
            "accept-privacy": false,
            "accept-communications": false,
            email: "Person.One@home.com",
            name: "Person One",
          },
        },
        {
          _id: "6287ec36a841b25637c663f0",
          createdOn: "2022-05-19T05:32:04.581Z",
          updatedOn: "2022-05-19T05:32:04.581Z",
          emailVerified: false,
          status: "unverified",
          data: {
            "accept-privacy": false,
            "accept-communications": false,
            email: "Person.Two@home.com",
            name: "Person Two",
          },
        },
        {
          _id: "6287ec36a841b25637c663d9",
          createdOn: "2022-05-17T03:34:06.720Z",
          updatedOn: "2022-05-17T03:34:06.720Z",
          emailVerified: true,
          status: "verified",
          data: {
            "accept-privacy": false,
            "accept-communications": false,
            email: "Person.Three@home.com",
            name: "Person Three",
          },
        },
        {
          _id: "6287ec37a841b25637c6641b",
          createdOn: "2022-05-15T03:46:09.748Z",
          updatedOn: "2022-05-15T03:46:09.748Z",
          emailVerified: false,
          status: "unverified",
          data: {
            "accept-privacy": false,
            "accept-communications": false,
            email: "Person.Four@home.com",
            name: "Person Four",
          },
        },
        {
          _id: "6287ec37a841b25637c66449",
          createdOn: "2022-05-15T02:55:38.786Z",
          updatedOn: "2022-05-15T02:55:38.786Z",
          emailVerified: true,
          status: "verified",
          data: {
            "accept-privacy": false,
            "accept-communications": false,
            email: "Person.Five@home.com",
            name: "Person Five",
          },
        },
      ],
      count: 5,
      limit: 5,
      offset: 0,
      total: 201,
    },
  },
  invite_user: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
      email: "some.one@home.com",
    },
    response: {
      _id: "6287ec36a841b25637c663df",
      createdOn: "2022-05-20T13:46:12.093Z",
      updatedOn: "2022-05-20T13:46:12.093Z",
      emailVerified: true,
      status: "verified",
      data: {
        "accept-privacy": false,
        "accept-communications": false,
        email: "some.one@home.com",
        name: "Some One",
      },
    },
  },
  access_group: {
    parameters: {
      siteId: "580e63e98c9a982ac9b8b741",
    },
    response: {
      accessGroups: [
        {
          _id: "62be58d404be8a6cc900c081",
          name: "Webflowers",
          shortId: "jo",
          slug: "webflowers",
          createdOn: "2022-08-01T19:41:48.349Z",
        },
      ],
      count: 1,
      limit: 10,
      offset: 0,
      total: 1,
    },
  },
};

export default UsersFixture;
