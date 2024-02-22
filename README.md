# Webflow JS SDK

[![npm shield](https://img.shields.io/npm/v/webflow-api)](https://www.npmjs.com/package/webflow-api)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Webflow JavaScript SDK provides convenient access to the [Webflow Data API](https://developers.webflow.com/reference/rest-introduction) from
applications written in JS.

The SDK contains typings and request builders for the Webflow Data API.

## Documentation

Explore the [API reference documentation](https://developers.webflow.com/reference/rest-introduction).

## V2 Migration Guide

> The SDK was rewritten in V2 and is now programatically generated from our OpenAPI spec. As part of this release there are some breaking changes.

#### Client Instantiation
The SDK exports `WebflowClient` instead of `Webflow`. The client now takes `accessToken` instead of `token`. 

```ts
const webflow = new WebflowClient({ accessToken: "..." }); 
```

#### Oauth 
The `WebflowClient` exports static methods that you can use for OAuth. These were previously on `Webflow`. 

`webflow.authorizeUrl` -> `WebflowClient.authorizeURL`

`webflow.accessToken` -> `WebflowClient.getAccessToken`

`webflow.revokeToken` -> `WebflowClient.revokeToken`

#### HTTP Client
The SDK no longer uses Axios and defaults to fetch. The SDK supports multiple runtimes and will handle
using a fetch implementation if available or will default to `node-fetch`. 

### Resources
Previously the SDK only supported the most important resources, such as site and user. Now the SDK supports
methods on a variety of different endpoints such as `collections`, `assets`, `forms`, `inventory`, `orders`, etc. 

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

const authorizeUrl = WebflowClient.authorizeURL({
    state: "your_state",
    scope: "sites:read",
    clientId: "your_client_id",
    redirctUri: "your_redirect_uri",
});

console.log(authorizeUrl);
```

### Step 2: Retrieve your access token

Use the `getAccessToken` function and pass in your `client_id`,
`client_secret`, and `authorization_code`.

```javascript
import { WebflowClient } from "webflow-api";

const accessToken = WebflowClient.getAccessToken({
  clientId: "your_client_id", 
  clientSecret: "your_client_secret",
  code: "your_authorization_code"
});
```

### Step 3: Instantiate the client

Instantiate the client using your `access_token`.

```javascript
import { WebflowClient } from "webflow-api";

const webflow = WebflowClient({ accessToken });
```

## Webflow Types

All of the types are nested within the `Webflow` namespace. Let IntelliSense
guide you!

## Exception Handling

All errors thrown by the SDK will be subclasses of [`WebflowError`](./src/errors/WebflowError.ts).

```javascript
import { WebflowClient, Webflow } from 'webflow';
const webflow = new WebflowClient({ accessToken: 'your_access_token' });

try {
  const sites = await webflow.sites.get(...);
} catch (e) {
  if (e instanceof Webflow.ForbiddenError) {
    console.log(e.body.message);
  } else if (e instanceof Webflow.BadRequestError) {
    console.log(e.body.message);
  } else {
    throw e;
  }
}
```

## Advanced

### Timeouts

By default, requests time out after 60 seconds. You can configure the timeout and # of max retries

```javascript
import { WebflowClient } from 'webflow';

const sites = await webflow.sites.get(..., {
  timeoutInSeconds: 30 // override the timeout
});
```

### Retries
The SDK will automatically retry failures with exponential backoff. 
You can configure the retries by setting maxRetries.

```javascript
import { WebflowClient } from 'webflow';

const sites = await webflow.sites.get(..., {
  maxRetries: 10 // override the retries
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
