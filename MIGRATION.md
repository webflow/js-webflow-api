# Migration

When migrating to a new major version of this SDK, please consult the notes here for breaking changes, new features, and related fixes.

## v2.x.x -> v3.0.0

There are a few breaking changes with v3.0.0 of the Webflow JS SDK. Please see the `Breaking` section below for more details and consult our [API Docs](https://developers.webflow.com/data/reference/rest-introduction) for examples of usage.

### Breaking

#### CMS APIs

- **CHANGED**: Deleting a Collection is now achieved through `client.collections.delete()`, which was previously an API used to delete a Collection field.
    - To delete a Collection, use `client.collections.delete()`
        - e.g., `client.collections.delete(collectionId)`
    - **NEW**: To delete a Collection field, use `client.collections.fields.delete()`
        - e.g., `client.collections.fields.delete(collectionId, fieldId)`
    - **REMOVED**: `client.collections.deleteCollection()` 
- **CHANGED**: Creating bulk CMS Items in multiple locales is now achieved through `client.collections.createItems()`
    - e.g.,
    ```ts
        const newItems = client.collections.items.createItems(collectionId, {
            cmsLocaleIds: [primaryCmsLocaleId, secondaryCmsLocaleId],
            isArchived: false,
            isDraft: false,
            fieldData: {
                name: "My Item For Multiple Locales",
                slug: "my-item",
                "plain-text": "foo",
            },
        });
    ```
    - **REMOVED**: `client.collections.createItemForMultipleLocales()`

#### Pages APIs

- **CHANGED**: The `locale` query parameter is now `localeId`
    - e.g., `client.pages.list(siteId, { localeId: "65427cf400e02b306eaa04a0" })`

### New Features

#### CMS APIs

- **NEW**: Bulk CMS Item API support, with the ability to specify one or many locales to manage the CMS Item in. See [docs](https://developers.webflow.com/data/reference/cms/collection-items/bulk-items/create-items) for more on usage.
    - `collections.items.createItems()` - Create a single CMS Item or multiple CMS Items in a Collection
    - `collections.items.updateItems()` - Update multiple CMS Item(s) in a Collection
    - `collections.items.updateItemsLive()` - Update multiple live CMS Item(s) in a Collection
    - `collections.items.deleteItems()` - Unpublish/delete multiple CMS Item(s) in a Collection
    - `collections.items.deleteItemsLive()` - Unpublish/delete multiple live CMS Item(s) in a Colllection

### Fixes

- Some APIs that created resources (i.e. `collections.items.createItem()`) had request payload types that required an `id`, which is not possible to provide. This is no longer required.
- `fieldData` type in CMS Items now allows arbitrary extra key/value pairs