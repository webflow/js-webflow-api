# Webflow Data API SDK

## Installation

Using npm:

```shell
$ npm install webflow-api
```

Using yarn

```shell
$ yarn add webflow-api
```

## Usage

The constructor takes in a few optional parameters to initialize the API client

- `token` - the access token to use
- `headers` - additional headers to add to the request
- `version` - the version of the API you wish to use

```javascript
const Webflow = require("webflow-api");

// initialize the client with the access token
const webflow = new Webflow({ token: "[ACCESS TOKEN]" });

// fully loaded
const webflow = new Webflow({
  token: "[ACCESS TOKEN]",
  version: "1.0.0",
  headers: {
    "User-Agent": "My Webflow App / 1.0",
  },
});
```

## Transitioning to API v2

We're actively working on a new version of the SDK that will fully support API v2. In the meantime, to make use of API v2 with our SDK, there are some important changes you need to be aware of:

### Setting Up For API v2

When initializing your client, it's crucial to set the `beta` flag to true in the client options. This ensures you're targeting the API v2 endpoints.

```javascript
const webflow = new Webflow({ beta: true, ...otherOptions });
```

Please note, when the beta flag is set, several built-in methods will not be available. These methods include, but are not limited to, info, authenticatedUser, sites, site, etc. Attempting to use these will throw an error.

### Calling API v2 Endpoints

To interact with API v2, you'll need to move away from using built-in methods, and instead use the provided HTTP methods directly.

For instance, where you previously used `sites()`:

```javascript
// get the first site
const [site] = await webflow.sites();
```

For API v2, you will need to use direct HTTP methods:

```javascript
// get the first site
const sites: string[] = await webflow.get("/sites");
const site = sites[0];
```

We understand that this is a shift in how you interact with the SDK, but rest assured, our upcoming SDK version will streamline this process and offer a more integrated experience with API v2.

## Basic Usage

### Chaining Calls

You can retrieve child resources by chaining calls on the parent object.

```javascript
// get the first site
const [site] = await webflow.sites();

// get the first collection in the site
const [collection] = await site.collections();

// get the first item in the collection
const [item] = await collection.items();

// get one item from the collection
const item = await collection.items({ itemId: "[ITEM ID]" });
```

### Pagination

To paginate results, pass in the `limit` and `offset` options.

```javascript
// Get the first page of results
const page1 = await collection.items({ limit: 20 });

// Get the second page of results
const page2 = await collection.items({ limit: 20, offset: 20 });
```

### Rate Limit

Check rate limit status on each call by checking the `_meta` property.

```javascript
// make an api call
const site = await webflow.site({ siteId: "[SITE ID]" });

// check rate limit
const { rateLimit } = site._meta; // { limit: 60, remaining: 56 }
```

### Update Token

If you need to update the access token, you can set the `token` property at any time.

```javascript
// token is unset
const webflow = new Webflow();

// set token
webflow.token = "[ACCESS TOKEN]";

// remove the token
webflow.clearToken();
```

### Calling APIs Directly

All Webflow API endpoints can be called directly using the `get`, `post`, `put`, and `delete` methods.

```javascript
// call the sites endpoint directly
const sites = await webflow.get("/sites");

// post to an endpoint directly
const result = await webflow.post("/sites/[SITE ID]/publish", {
  domains: ["hello-webflow.com"],
});
```

## OAuth

To implement OAuth, you'll need a Webflow App registered and a webserver running, that is publicly facing.

### Authorize

The first step in OAuth is to generate an authorization url to redirect the user to.

```javascript
// Get the authorization url to redirect users to
const url = webflow.authorizeUrl({
  client_id: "[CLIENT ID]",
  state: "1234567890", // optional
  redirect_uri: "https://my.server.com/oauth/callback", // optional
});

// redirect user from your server route
res.redirect(url);
```

### Using the scopes Parameter with v2 API

The v2 API introduces the concept of 'scopes', providing more control over app permissions. Instead of using the scope parameter as a single string, you can define multiple permissions using the scopes array:

```javascript
const url = webflow.authorizeUrl({
  client_id: "[CLIENT ID]",
  redirect_uri: "https://my.server.com/oauth/callback",
  scopes: ["read:sites", "write:items", "read:users"],
});
```

For more information and a detailed list of available scopes, refer to our Scopes Guide.

### Access Token

Once a user has authorized their Webflow resource(s), Webflow will redirect back to your server with a `code`. Use this to get an access token.

```javascript
const auth = await webflow.accessToken({
  client_id,
  client_secret,
  code,
  redirect_uri, // optional - required if used in the authorize step
});

// you now have the user's access token to make API requests with
const userWF = new Webflow({ token: auth.access_token });

// pull information for the user
const authenticatedUser = await userWF.authenticatedUser();
```

### Revoke Token

If the user decides to disconnect from your server, you should call revoke token to remove the authorization.

```javascript
const result = await webflow.revokeToken({
  client_id,
  client_secret,
  access_token,
});

// ensure it went through
result.didRevoke === true;
```

## Examples

### Sites

Get all sites available or lookup by site id.

```javascript
// List all sites
const sites = await webflow.sites();

// Get a single site
const site = await webflow.site({ siteId: "[SITE ID]" });
```

### Collections

Get all collections available for a site or lookup by collection id.

```javascript
// Get a site's collection from the site
const collections = await site.collections();

// Get a site's collection by passing in a site id
const collections = await webflow.collections({ siteId: "[SITE ID]" });

// Get a single collection
const collection = await webflow.collection({ collectionId: "[COLLECTION ID]" });
```

### Collection Items

Get all collection items available for a collection or lookup by item id.

```javascript
// Get the items from a collection
const items = await collection.items();

// Get a subset of items
const items = await collection.items({ limit: 10, offset: 2 });

// Get a single item
const item = await webflow.item({ collectionId: "[COLLECTION ID]", itemId: "[ITEM ID]" });
```

### Update an Item

```javascript
// Set the fields to update
const fields = {
  name: "New Name",
  _archived: false,
  _draft: false,
  slug: "new-name",
};

// call update
const updatedItem = await webflow.updateItem({
  collectionId: "[COLLECTION ID]",
  itemId: "[ITEM ID]",
  fields,
});
```

### Memberships

```javascript
// Get a site's users from the site
const users = await site.users();

// Get a site's users with a site id
const users = await webflow.users({
  siteId: "[SITE ID]",
});

// Get a single user
const user = await site.user({
  siteId: "[SITE ID]",
  userId: "[USER ID]",
});

// Get a site's access groups
const accessGroups = await site.accessGroups();

// Get a site's access groups with a site id
const accessGroups = await webflow.accessGroups({
  siteId: "[SITE ID]",
});
```

### Webhooks

```javascript
// get webhooks for a site
const webhooks = await site.webhooks();

// create a webhook
const webhook = await site.createWebhook({
  triggerType: "form_submission",
  url: "https://webhook.site",
});
```

### Authenticated User

```javascript
// pull information for the authenticated user
const authenticatedUser = await webflow.authenticatedUser();
```

## Contributing

Contributions are welcome - feel free to open an issue or pull request.

## License

The MIT license - see `LICENSE`.
