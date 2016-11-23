# Webflow CMS API Client

## Requirements

* Node.js 4+ / Webpack / Browserify
* NPM 3+ / YARN

## Usage

```javascript
const Webflow = require('webflow-api');
const api = new Webflow('api-token');

// Fetch a site
api.site('580e63e98c9a982ac9b8b741').then(site => console.log(site));

// TODO: finish this example
```
