export const OAuthFixture = {
  authorize: {
    parameters: {
      client_id: "6287ec36a841b25637c663de",
      redirect_uri: "https://www.webflowers.com",
      response_type: "code",
      state: 1234567890,
    },
    response: {
      code: "6287ec36a841b25637c663de",
    },
  },
  access_token: {
    parameters: {
      client_id: "6287ec36a841b25637c663de",
      client_secret: "6287ec36a841b25637c663de",
      code: "6287ec36a841b25637c663de",
      grant_type: "authorization_code",
      redirect_uri: "https://www.webflowers.com",
    },
    response: {
      access_token: "6287ec36a841b25637c663de",
      token_type: "bearer",
    },
  },
  revoke_token: {
    parameters: {
      client_id: "6287ec36a841b25637c663de",
      client_secret: "6287ec36a841b25637c663de",
      access_token: "6287ec36a841b25637c663de",
    },
    response: {
      didRevoke: true,
    },
  },
};

export default OAuthFixture;
