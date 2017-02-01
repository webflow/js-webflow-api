# Webflow CMS API Client

## Requirements

* Node.js 4+
* NPM / YARN
* Webpack / Browserify (optional)

## Installation

Install the package via NPM or YARN:

```shell
$ npm install --save webflow-api

$ yarn add webflow-api
```

**Note:** this API client is compatible with the browser in addition to Node.js, and thus can be utilized with Webpack or Browserify.  However, at this time the beta launch of the API does not support browser clients - that functionality will be released at a later date.

## Usage

```javascript
const Webflow = require('webflow-api');

// Initialize the API
const api = new Webflow({ token: 'api-token' });

// Fetch a site
api.site({ siteId: '580e63e98c9a982ac9b8b741' }).then(site => console.log(site));
```

The `Webflow` constructor takes several options to initialize the API client:

* `token` - the API token **(required)**
* `version` - the version of the API you wish to use (optional)

All of the API methods are documented in the [API documentation](https://developers.webflow.com).

## Contributing

Contributions are welcome - feel free to open an issue or pull request.

## License

The MIT license - see `LICENSE`.
