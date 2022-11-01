export const CommonFixture = {
  error: {
    response: {
      msg: "Cannot access resource",
      code: "401,",
      name: "Unauthorized",
      path: "/sites/invalid_site",
      err: "Unauthorized: Cannot access resource",
    },
  },
  headers: {
    "X-RateLimit-Limit": 100,
    "X-RateLimit-Remaining": 99,
  },
};

export default CommonFixture;
