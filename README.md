# Webflow JavaScript/TypeScript SDK

[![npm shield](https://img.shields.io/npm/v/webflow-api)](https://www.npmjs.com/package/webflow-api)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Webflow JavaScript SDK provides convenient access to the [Webflow Data API](https://developers.webflow.com/reference/rest-introduction) from
applications written in JS.

The SDK contains typings and request builders for the Webflow Data API.

## Documentation

Explore the [API reference documentation](https://developers.webflow.com/reference/rest-introduction).

## Installation

Add this dependency to your project's package.json file:

Using npm:

```shell
npm install webflow-api
```

Using yarn:

```shell
yarn add webflow-api
```

## Authentication

You can use a workspace token to access all of the sites in your Webflow Workspace or a site token to access a single site.

- To get a workspace token, open the [Webflow Dashboard](https://webflow.com/dashboard?utm_source=dashboard), click **Apps & Integrations > Manage**, and under **Workspace API access**, click **Generate API token**.

- To get a site token, find the site in the [Webflow Dashboard](https://webflow.com/dashboard?utm_source=dashboard), open its settings, and under **API access**, click **Generate API token**.

For more information about tokens, see [Authentication](https://developers.webflow.com/data/reference/authentication) in the Webflow documentation.

For more complex authentication with OAuth, see [OAuth](#oauth) below.

## Usage

To use the SDK, import the `webflow-api` package, provide your access token, and make calls to the Webflow API, as in this example:

```javascript
import { WebflowClient } from "webflow-api";

// Workspace or site token
const webflow = new WebflowClient({
  accessToken: process.env.WEBFLOW_API_TOKEN,
});

// Environment variables
// in string format, such as "639656400769508adc12fe42"
const site_id = process.env.SITE_ID;
const custom_domain_id_1 = process.env.CUSTOM_DOMAIN_ID_1;
const custom_domain_id_2 = process.env.CUSTOM_DOMAIN_ID_2;

// List sites
const sites = await webflow.sites.list();

// Get site
const site = await webflow.sites.get(site_id);

// Get custom domains
const customDomains = await webflow.sites.getCustomDomain(site_id);

// Publish site
const publishRequest = await webflow.sites.publish(site_id, {
  customDomains: [custom_domain_id_1, custom_domain_id_2],
  publishToWebflowSubdomain: true,
});
```

## OAuth

To implement OAuth, you must register a Webflow App in your Workspace with the "Data CLient" building block and get its client ID and secret.
See https://developers.webflow.com/apps/data/docs/register-an-app.

To get the client ID, edit the App in your workspace, go to the Building Blocks tab, and copy the ID from the **Client ID** field.

For full instructions, see https://developers.webflow.com/data/reference/oauth-app.

### Step 1: Generate an authorization URL

The first step in OAuth is to generate an authorization URL.
You direct your users to go to this URL, which prompts them to approve the App's access to specific sites or Workspaces.

This example code generates the authorization URL:

```javascript
import { WebflowClient } from "webflow-api";

const authorizeUrl = WebflowClient.authorizeURL({
    state: "your_state",
    scope: "sites:read",
    clientId: "your_client_id",
    redirectUri: "your_redirect_uri",
});

console.log(authorizeUrl);
```

### Step 2: Retrieve an access token

The callback from the authorization URL includes the state that you set in the request and an authorization code.
You can use this authorization code to generate an access token for the App.

This example passes the App's client ID and secret and the authorization code to the `getAccessToken` function:

```javascript
import { WebflowClient } from "webflow-api";

const accessToken = WebflowClient.getAccessToken({
  clientId: "your_client_id",
  clientSecret: "your_client_secret",
  code: "your_authorization_code"
});
```

### Step 3: Instantiate the client

Instantiate the client using the access token:

```javascript
import { WebflowClient } from "webflow-api";

const webflow = new WebflowClient({ accessToken });

const {sites} = await webflow.sites.list();

console.log(sites);
```

Now the App has access to the sites or Workspaces that the user allowed access to.

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
