# Webflow CMS API Client

## Installation

Using npm:

```shell
$ npm install webflow-api
```

using yarn
```
$ yarn add webflow-api
```

## Usage
The constructor takes in a few optional parameters to initialize the API client

* `token` - the access token to use
* `headers` - additional headers to add to the request
* `version` - the version of the API you wish to use
* `mode` - the [sec-fetch-mode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode) to use

``` javascript
const Webflow = require("webflow-api");

// initialize the client with the access token
const webflow = new Webflow({ token: "[ACCESS TOKEN]" });

// fully loaded
const webflow = new Webflow({
  token: "[ACCESS TOKEN]",
  version: "1.0.0",
  mode: "cors",
  headers: {
    "User-Agent": "My Webflow App / 1.0"
  }
});
```
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
```
### Calling APIs Directly
All Webflow API endpoints can be called directly using the `get`, `post`, `put`, and `delete` methods.

```javascript
// call the sites endpoint directly
const sites = await webflow.get("/sites");

// post to an endpoint directly
const result = await webflow.post("/sites/[SITE ID]/publish", {
  domains: ["hello-webflow.com"]
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
  redirect_uri: "https://my.server.com/oauth/callback" // optional
});

// redirect user from your server route
res.redirect(url);
```

### Access Token
Once a user has authorized their Webflow resource(s), Webflow will redirect back to your server with a `code`. Use this to get an access token.

```javascript
const auth = await webflow.accessToken({
  client_id,
  client_secret,
  code,
  redirect_uri // optional - required if used in the authorize step
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
  access_token
});

// ensure it went through
if (result.didRevoke) {
  // should equal true
}
```

## Examples
### Sites
Get all sites available or lookup by site id.

```javascript
// List all sites
const sites = await webflow.sites();

// Get a single site
const site = await webflow.sites({ siteId: "[SITE ID]" });
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
// Get the all users for a site
const users = await webflow.users({
  siteId: "[SITE ID]"
});

// Get a single user
const user = await site.user({
  siteId: "[SITE ID]",
  userId: "[USER ID]"
});
```

### Webhooks
```javascript
// get webhooks for a site
const webhooks = await site.webhooks();

// create a webhook
const webhook = await site.createWebhook({
  triggerType: "form_submission",
  url: "https://webhook.site"
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
