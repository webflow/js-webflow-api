# Migration

When migrating to a new major version of this SDK, please consult the notes here for breaking changes, new features, and related fixes.

## v2.x.x -> v3.0.0

There are a few breaking changes with v3.0.0 of the Webflow JS SDK

### Breaking

#### CMS APIs

- CHANGED: Deleting a Collection is now achieved through `client.collections.delete()`, which was previously an API used to delete a Collection field.
    - We've removed `client.collections.deleteCollection()`
    - To delete a Collection field, use `client.collections.fields.delete()`
- CHANGED: Creating bulk CMS Items in multiple locales is now achieved through `client.collections.createItems()`
    - We've removed `client.collections.createItemForMultipleLocales()`

#### Pages APIs

- CHANGED: The `locale` query parameter is now `localeId`

### New Features

#### CMS APIs

- We've added Bulk API support. See [docs](https://developers.webflow.com/data/reference/cms/collection-items/bulk-items/create-items) for more on usage.
    - `createItems()`
    - `updateItems()`
    - `updateItemsLive()`
    - `deleteItems()`
    - `deleteItemsLive()`

### Fixes

- Some APIs that created resources (i.e. `collections.items.createItem()`) had types that required an `id`, which is not possible to provide. This is no longer required.
- `fieldData` type in CMS Items now allows arbitrary extra key/value pairs
