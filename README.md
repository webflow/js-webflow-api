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
* `version` - the version of the API you wish to use
* `headers` - additional headers to add to the request

``` javascript
const Webflow = require('webflow-api');

// initialize the client with the access token
const webflow = new Webflow({ token: "[API TOKEN]" });

// fully loaded
const webflow = new Webflow({
  token: "[API TOKEN]"
  version: '1.0.0',
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

## Contributing

Contributions are welcome - feel free to open an issue or pull request.

## License

The MIT license - see `LICENSE`.
