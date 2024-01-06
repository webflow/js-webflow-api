# Webflow Javascript SDK

The Webflow Javascript SDK provides convenient access to the [Webflow Data API](https://developers.webflow.com/reference/rest-introduction) from
applications written in JS.

The SDK contains Typings and Request Builders for the Webflow SDK.

## Documentation

Explore the API reference documentation [here](https://developers.webflow.com/reference/rest-introduction).

## Installation

Add this dependency to your project's package.json file:

Using npm:

```shell
$ npm install webflow-api
```

Using yarn

```shell
$ yarn add webflow-api
```

## Usage

Simply import `Webflow` and start making calls to our API.

```javascript
import { WebflowClient } from "webflow-api";

const webflow = new WebflowClient({ accessToken });

const site = await webflow.sites.get("site-id");
```

## OAuth

To implement OAuth, you'll need to [register a Webflow App in your Workspace](https://developers.webflow.com/reference/authorization)

### Step 1: Authorize URL

The first step in OAuth is to generate an Authorization URL. Use this URL
to fetch your Authorization Code. See the [docs](https://docs.developers.webflow.com/v1.0.0/docs/oauth#user-authorization)
for more details.

```javascript
import { WebflowClient } from "webflow-api";

const authorizeUrlParams = {
    state: "your_state",
    scope: "sites:read",
    client_id: "your_client_id",
    redirect_uri: "your_redirect_uri",
    response_type: "code",
};

const authorizeUrl = webflowClient.authorizeUrl(authorizeUrlParams); // not yet implemented

console.log(authorizeUrl);
```

### Step 2: Retrieve your acccess token

Use the `getAccessToken` function and pass in your `client_id`,
`client_secret`, and `authorization_code`.

```javascript
import { WebflowClient } from "webflow-api";

const accessToken = WebflowClient.getAccessToken(
    (client_id = "YOUR_CLIENT_ID"),
    (client_secret = "YOUR_CLIENT_SECRET"),
    (code = "YOUR_AUTHORIZATION_CODE")
); // not yet implemented
```

### Step 3: Instantiate the client

Instantiate the client using your `access_token`.

```javascript
import { WebflowClient } from "webflow-api";

const webflow = WebflowClient({ accessToken });
```

## Webflow Types

All of the types are nested within the `Webflow` module. Let IntelliSense
guide you!

## Exception Handling

All errors thrown by the SDK will be subclasses of [`WEbflowError`](./src/errors/WebflowError.ts).

```javascript
import { WebflowClient, Webflow } from 'webflow'
const webflow = new WebflowClient({ accessToken: 'your_access_token' });

try {
  webflow.sites.get(...);
} catch (e) {
  if (e instanceof Webflow.ForbiddenError) {
    console.log(e.body.mesasge);
  } else if (e instanceof Webflow.BadRequestError) {
    ...
  } else {
    throw e;
  }
}
```

## Advanced

### Timeouts

By default, requests time out after 60 seconds. You can configure the timeout and # of max retries

```javascript
import { WebflowClient } from 'webflow'

const webflow = new WebflowClient({
    accessToken: 'your_access_token',
    requestOptions: {
        timeoutInSeconds: 10,
        maxRetries: 3, 
    },
});
```

## Beta Status

This SDK is in **Preview**, and there may be breaking changes between versions without a major
version update.

To ensure a reproducible environment (and minimize risk of breaking changes), we recommend pinning a specific package version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
