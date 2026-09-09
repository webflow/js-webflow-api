# Reference
## Token
<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">authorizedBy</a>() -> Webflow.AuthorizedUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Information about the Authorized User

Required Scope | `authorized_user:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.authorizedBy();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">introspect</a>() -> Webflow.Authorization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Information about the authorization token

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/data-clients/getting-started).</Note>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.introspect();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites
<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">create</a>(workspace_id, { ...params }) -> Webflow.Site</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope | `workspace:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.create("580e63e98c9a982ac9b8b741", {
    name: "The Hitchhiker's Guide to the Galaxy"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workspace_id:** `string` — Unique identifier for a Workspace
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.SitesCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">list</a>() -> Webflow.Sites</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of all sites the provided access token is able to access.

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">get</a>(site_id) -> Webflow.Site</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a site.

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.get("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">delete</a>(site_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.delete("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">update</a>(site_id, { ...params }) -> Webflow.Site</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.update("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.SitesUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">getCustomDomain</a>(site_id) -> Webflow.Domains</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all custom domains related to site.

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.getCustomDomain("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">publish</a>(site_id, { ...params }) -> Webflow.SitesPublishResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publishes a site or an individual page to one or more domains.
If multiple individual pages are published to staging, publishing from staging to production publishes all staged changes.

To publish to a specific custom domain, use the domain IDs from the [Get Custom Domains](/data/reference/sites/get-custom-domain) endpoint.

You must include at least one of the `customDomains` or `publishToWebflowSubdomain` properties in the request body.

To publish an individual page instead of the entire site, provide the ID of the page in the `pageId` parameter.

<Note title="Rate limit: 1 publish per minute">This endpoint has a specific rate limit of one successful publish queue per minute.</Note>

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.publish("580e63e98c9a982ac9b8b741", {
    customDomains: ["660c6449dd97ebc7346ac629", "660c6449dd97ebc7346ac62f"],
    publishToWebflowSubdomain: false
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.SitesPublishRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Collections
<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">list</a>(site_id) -> Webflow.CollectionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of all Collections within a Site.

Required scope | `cms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.list("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">create</a>(site_id, { ...params }) -> Webflow.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Collection for a site with collection fields.

Each collection includes the required _name_ and _slug_ fields, which are generated automatically. You can update the `displayName` of these fields, but the slug for them cannot be changed. Fields slugs are automatically converted to lowercase. Spaces in slugs are replaced with hyphens.

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.create("580e63e98c9a982ac9b8b741", {
    displayName: "Blog Posts",
    singularName: "Blog Post",
    slug: "posts",
    fields: [{
            isRequired: true,
            type: "PlainText",
            displayName: "Title",
            helpText: "The title of the blog post"
        }, {
            isRequired: true,
            type: "RichText",
            displayName: "Content",
            helpText: "The content of the blog post"
        }, {
            isRequired: true,
            type: "Reference",
            displayName: "Author",
            helpText: "The author of the blog post",
            metadata: {
                collectionId: "23cc2d952d4e4631ffd4345d2743db4e"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CollectionsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">get</a>(collection_id) -> Webflow.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the full details of a collection from its ID.

Required scope | `cms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.get("580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">delete</a>(collection_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a collection using its ID.

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.delete("580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">patch</a>(collection_id, { ...params }) -> Webflow.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a collection's display name, singular name, slug, or field groups.

**Field group rules:**
- A collection can have a maximum of 50 field groups
- Each `displayName` must be unique across all field groups in the collection
- Each `fieldId` must be unique across all field groups in the collection
- Ecommerce collections do not support field groups

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.patch("580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PatchCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Pages
<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.PageList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of all pages for a site.

Required scope | `pages:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.list("580e63e98c9a982ac9b8b741", {
    localeId: "65427cf400e02b306eaa04a0",
    limit: 1,
    offset: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PagesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">getMetadata</a>(page_id, { ...params }) -> Webflow.Page</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get metadata information for a single page.

Required scope | `pages:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.getMetadata("63c720f9347c2139b248e552", {
    localeId: "65427cf400e02b306eaa04a0",
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PagesGetMetadataRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">updatePageSettings</a>(page_id, { ...params }) -> Webflow.Page</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Page-level metadata, including SEO and Open Graph fields.

Required scope | `pages:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.updatePageSettings("63c720f9347c2139b248e552", {
    localeId: "65427cf400e02b306eaa04a0",
    title: "Guide to the Galaxy",
    slug: "guide-to-the-galaxy",
    seo: {
        title: "The Ultimate Hitchhiker's Guide to the Galaxy",
        description: "Everything you need to know about the galaxy, from avoiding Vogon poetry to the importance of towels."
    },
    openGraph: {
        title: "Explore the Cosmos with The Ultimate Guide",
        titleCopied: false,
        description: "Dive deep into the mysteries of the universe with your guide to everything galactic.",
        descriptionCopied: false
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PageMetadataWrite` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">getContent</a>(page_id, { ...params }) -> Webflow.Dom</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get text and component instance content from a static page.

<Badge intent="info">Localization</Badge>

Required scope | `pages:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.getContent("63c720f9347c2139b248e552", {
    localeId: "65427cf400e02b306eaa04a0",
    limit: 1,
    offset: 1,
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PagesGetContentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">updateStaticContent</a>(page_id, { ...params }) -> Webflow.UpdateStaticContentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint updates content on a static page in **secondary locales**. It supports updating up to 1000 nodes in a single request.

Before making updates:
1. Use the [get page content](/data/reference/pages-and-components/pages/get-content) endpoint to identify available content nodes and their types.
2. If the page has component instances, retrieve the component's properties that you'll override using the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint.
3. DOM elements may include a `data-w-id` attribute. This attribute is used by Webflow to maintain custom attributes and links across locales. Always include the original `data-w-id` value in your update requests to ensure consistent behavior across all locales.

<Note>
  This endpoint is specifically for localized pages. Ensure that the specified `localeId` is a valid **secondary locale** for the site otherwise the request will fail.
</Note>

Required scope | `pages:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.updateStaticContent("63c720f9347c2139b248e552", {
    localeId: "localeId",
    nodes: [{
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
            text: "<h1>The Hitchhiker's Guide to the Galaxy</h1>"
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
            text: "<div><h3>Don't Panic!</h3><p>Always know where your towel is.</p></div>"
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad635",
            choices: [{
                    value: "choice-1",
                    text: "First choice"
                }, {
                    value: "choice-2",
                    text: "Second choice"
                }]
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad642",
            placeholder: "Enter something here..."
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad671",
            value: "Submit",
            waitingText: "Submitting..."
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad629",
            propertyOverrides: [{
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f0",
                    text: "<div><h1>Time is an <em>illusion</em></h1></div>"
                }, {
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f1",
                    text: "Life, the Universe and Everything"
                }]
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PageDomWrite` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Components
<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.ComponentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of all components for a site.

Required scope | `components:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.components.list("580e63e98c9a982ac9b8b741", {
    branchId: "68026fa68ef6dc744c75b833",
    limit: 1,
    offset: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ComponentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">getContent</a>(site_id, component_id, { ...params }) -> Webflow.ComponentDom</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get static content from a component definition. This includes text nodes, image nodes, select nodes, text input nodes, submit button nodes, and nested component instances.
To retrieve dynamic content set by component properties, use the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint.

<Note>If you do not provide a Locale ID in your request, the response will return any content that can be localized from the Primary locale.</Note>

Required scope | `components:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.components.getContent("580e63e98c9a982ac9b8b741", "8505ba55-ef72-629e-f85c-33e4b703d48b", {
    localeId: "65427cf400e02b306eaa04a0",
    branchId: "68026fa68ef6dc744c75b833",
    limit: 1,
    offset: 1,
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**component_id:** `string` — Unique identifier for a Component
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentsGetContentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ComponentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">updateContent</a>(site_id, component_id, { ...params }) -> Webflow.ComponentsUpdateContentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint updates content within a component defintion for **secondary locales**. It supports updating up to 1000 nodes in a single request.

Before making updates:
1. Use the [get component content](/data/reference/pages-and-components/components/get-content) endpoint to identify available content nodes and their types.
2. If your component definition has a component instance nested within it, retrieve the nested component instance's properties that you'll override using the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint.
3. DOM elements may include a `data-w-id` attribute. This attribute is used by Webflow to maintain custom attributes and links across locales. Always include the original `data-w-id` value in your update requests to ensure consistent behavior across all locales.

<Note>
  This endpoint is specifically for localizing component definitions. Ensure that the specified `localeId` is a valid **secondary locale** for the site otherwise the request will fail.
</Note>

Required scope | `components:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.components.updateContent("580e63e98c9a982ac9b8b741", "8505ba55-ef72-629e-f85c-33e4b703d48b", {
    localeId: "65427cf400e02b306eaa04a0",
    branchId: "68026fa68ef6dc744c75b833",
    nodes: [{
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
            text: "<h1>The Hitchhiker's Guide to the Galaxy</h1>"
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
            text: "<div><h3>Don't Panic!</h3><p>Always know where your towel is.</p></div>"
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad635",
            choices: [{
                    value: "choice-1",
                    text: "First choice"
                }, {
                    value: "choice-2",
                    text: "Second choice"
                }]
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad642",
            placeholder: "Enter something here..."
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad671",
            value: "Submit",
            waitingText: "Submitting..."
        }, {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad629",
            propertyOverrides: [{
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f0",
                    text: "<div><h1>Time is an <em>illusion</em></h1></div>"
                }, {
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f1",
                    text: "Life, the Universe and Everything"
                }]
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**component_id:** `string` — Unique identifier for a Component
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentDomWrite` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ComponentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">getProperties</a>(site_id, component_id, { ...params }) -> Webflow.ComponentProperties</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default property values of a component definition.

<Note>If you do not include a `localeId` in your request, the response will return any properties that can be localized from the Primary locale.</Note>

Required scope | `components:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.components.getProperties("580e63e98c9a982ac9b8b741", "8505ba55-ef72-629e-f85c-33e4b703d48b", {
    localeId: "65427cf400e02b306eaa04a0",
    branchId: "68026fa68ef6dc744c75b833",
    limit: 1,
    offset: 1,
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**component_id:** `string` — Unique identifier for a Component
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentsGetPropertiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ComponentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">updateProperties</a>(site_id, component_id, { ...params }) -> Webflow.ComponentsUpdatePropertiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the default property values of a component definition in a specificed locale.

Before making updates:
1. Use the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint to identify properties that can be updated in a secondary locale.
2. Rich Text properties may include a `data-w-id` attribute. This attribute is used by Webflow to maintain links across locales. Always include the original `data-w-id` value in your update requests to ensure consistent behavior across all locales.

<Note>The request requires a secondary locale ID. If a `localeId` is missing, the request will not be processed and will result in an error.</Note>

Required scope | `components:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.components.updateProperties("580e63e98c9a982ac9b8b741", "8505ba55-ef72-629e-f85c-33e4b703d48b", {
    localeId: "65427cf400e02b306eaa04a0",
    branchId: "68026fa68ef6dc744c75b833",
    properties: [{
            propertyId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
            text: "The Hitchhiker\u2019s Guide to the Galaxy"
        }, {
            propertyId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
            text: "<div><h3>Dont Panic!</h3><p>Always know where your towel is.</p></div>"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**component_id:** `string` — Unique identifier for a Component
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentPropertiesWrite` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ComponentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Scripts
<details><summary><code>client.scripts.<a href="/src/api/resources/scripts/client/Client.ts">list</a>(site_id) -> Webflow.RegisteredScriptList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of scripts that have been registered to a site. A site can have a maximum of 800 registered scripts.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scripts.list("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.scripts.<a href="/src/api/resources/scripts/client/Client.ts">registerHosted</a>(site_id, { ...params }) -> Webflow.CustomCodeHostedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a hosted script to a site.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scripts.registerHosted("580e63e98c9a982ac9b8b741", {
    hostedLocation: "hostedLocation",
    integrityHash: "integrityHash",
    version: "version",
    displayName: "displayName"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomCodeHostedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.scripts.<a href="/src/api/resources/scripts/client/Client.ts">registerInline</a>(site_id, { ...params }) -> Webflow.CustomCodeInlineResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register an inline script to a site. Inline scripts are limited to 2000 characters.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scripts.registerInline("580e63e98c9a982ac9b8b741", {
    sourceCode: "alert('hello world');",
    version: "0.0.1",
    displayName: "Alert"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomCodeInlineRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Assets
<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.Assets</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of assets uploaded to a site

Required scope | `assets:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.list("580e63e98c9a982ac9b8b741", {
    localeId: "65427cf400e02b306eaa04a0",
    offset: 1,
    limit: 1,
    folderId: "folderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">create</a>(site_id, { ...params }) -> Webflow.AssetUpload</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The first step in uploading an asset to a site.


This endpoint generates a response with the following information: `uploadUrl` and `uploadDetails`.


Use these properties in the header of a [POST request to Amazson s3](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html) to complete the upload.


To learn more about how to upload assets to Webflow, see our [assets guide](/data/docs/working-with-assets).

 Required scope | `assets:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.create("580e63e98c9a982ac9b8b741", {
    fileName: "file.png",
    fileHash: "3c7d87c9575702bc3b1e991f4d3c638e"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">get</a>(asset_id, { ...params }) -> Webflow.Asset</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about an asset

Required scope | `assets:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.get("580e63fc8c9a982ac9b8b745", {
    localeId: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**asset_id:** `string` — Unique identifier for an Asset on a site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">delete</a>(asset_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Asset

Required Scope: `assets: write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.delete("580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**asset_id:** `string` — Unique identifier for an Asset on a site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">update</a>(asset_id, { ...params }) -> Webflow.Asset</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update details of an Asset.

Required scope | `assets:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.update("580e63fc8c9a982ac9b8b745", {
    localeId: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**asset_id:** `string` — Unique identifier for an Asset on a site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">listFolders</a>(site_id) -> Webflow.AssetFolderList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Asset Folders within a given site

Required scope | `assets:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.listFolders("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">createFolder</a>(site_id, { ...params }) -> Webflow.AssetFolder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Asset Folder within a given site

Required scope | `assets:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.createFolder("580e63e98c9a982ac9b8b741", {
    displayName: "my asset folder"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsCreateFolderRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">getFolder</a>(asset_folder_id) -> Webflow.AssetFolder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about a specific Asset Folder

Required scope | `assets:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assets.getFolder("6390c49774a71f0e3c1a08ee");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**asset_folder_id:** `string` — Unique identifier for an Asset Folder
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Custom Fonts
<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.CustomFonts</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the custom fonts uploaded to a site.

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.list("580e63e98c9a982ac9b8b741", {
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomFontsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">create</a>(site_id, { ...params }) -> Webflow.CustomFontCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a custom font on a site and get a presigned S3 URL to upload the font binary.

The response includes a `customFont` object and an `upload` object. Use the `upload.url` and `upload.fields`
to POST the font binary directly to S3 as `multipart/form-data`. The binary must go in a field named `file`
and must be the last field in the form (an AWS S3 requirement). S3 returns `201 Created` on a successful upload.

To learn more, see [Custom fonts](/data/docs/custom-fonts).

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.create("580e63e98c9a982ac9b8b741", {
    fileName: "AcmeSans-Regular.woff2",
    fileHash: "3c7d87c9575702bc3b1e991f4d3c638e",
    fontFamily: "Acme Sans",
    weight: 400,
    italic: false,
    fontDisplay: "auto"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomFontsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">get</a>(site_id, font_id) -> Webflow.CustomFontsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about a custom font on a site.

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.get("580e63e98c9a982ac9b8b741", "66f3a1b2c4d5e6f7a8b9c0d1");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**font_id:** `string` — Unique identifier for a custom font on a site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">delete</a>(site_id, font_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a custom font from a site.

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.delete("580e63e98c9a982ac9b8b741", "66f3a1b2c4d5e6f7a8b9c0d1");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**font_id:** `string` — Unique identifier for a custom font on a site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">update</a>(site_id, font_id, { ...params }) -> Webflow.CustomFontsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the metadata of a custom font. The font binary is not changed by this endpoint.
To replace the binary, use [Replace custom font file](#operation/replace-custom-font-file).

The request body must include at least one of `fontFamily`, `weight`, `italic`, or `fontDisplay`.

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.update("580e63e98c9a982ac9b8b741", "66f3a1b2c4d5e6f7a8b9c0d1");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**font_id:** `string` — Unique identifier for a custom font on a site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomFontsUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">replaceFile</a>(site_id, font_id, { ...params }) -> Webflow.CustomFontCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the binary of an existing custom font while preserving its ID and any references to it.
The upload handshake is identical to [Create custom font](#operation/create-custom-font).

If the existing font has a non-empty `axes` array (a variable font), you must include an `axes` field
in the request. Send `axes: []` to declare that the new binary is a static font, or send the new variable
axes to declare it is still variable. Omitting `axes` when the existing font is variable returns `400`.

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.replaceFile("580e63e98c9a982ac9b8b741", "66f3a1b2c4d5e6f7a8b9c0d1", {
    fileName: "AcmeSans-Regular-v2.woff2",
    fileHash: "3c7d87c9575702bc3b1e991f4d3c638e"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**font_id:** `string` — Unique identifier for a custom font on a site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomFontsReplaceFileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">batchCreate</a>(site_id, { ...params }) -> Webflow.CustomFontBatchCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register 1–25 custom fonts in a single request and get a presigned S3 URL for each one.
This collapses the registration step for a whole font family (for example, Regular, Bold,
Italic, and Bold Italic) into one rate-limited request.

Registration is batched, but the binary uploads are not: the response contains one `upload`
object per registered font, and you must POST each font binary to its own presigned S3 URL
exactly as you would for [Create custom font](#operation/create-custom-font). The Webflow API
server never receives the raw font bytes.

The response is `200 OK` for a valid request body. Per-font results are reported in the
`created` and `failed` arrays. If the site's font limit is reached partway through the batch,
the fonts that still fit are registered and returned in `created`, while the rest appear in
`failed` with `name: "FontLimitReached"` — valid fonts are never discarded because a later
font in the same batch could not be registered. Each presigned URL expires approximately
15 minutes after issuance, so upload the binaries promptly.

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.batchCreate("580e63e98c9a982ac9b8b741", {
    items: [{
            fileName: "AcmeSans-Regular.woff2",
            fileHash: "3c7d87c9575702bc3b1e991f4d3c638e",
            fontFamily: "Acme Sans",
            weight: 400,
            italic: false,
            fontDisplay: "auto"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomFontBatchCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customFonts.<a href="/src/api/resources/customFonts/client/Client.ts">batchDelete</a>(site_id, { ...params }) -> Webflow.CustomFontBatchDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete 1-100 custom fonts in a single request. The response is always `200 OK` for a valid request body.
Per-font results are reported in the `deleted` and `failed` arrays.

The endpoint is idempotent: fonts that do not exist appear in `failed` with `name: "NotFound"` rather than
failing the entire request. You can safely retry a partial failure by re-sending only the IDs that did not
appear in `deleted`.

Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFonts.batchDelete("580e63e98c9a982ac9b8b741", {
    items: [{
            id: "66f3a1b2c4d5e6f7a8b9c0d1"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomFontBatchDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFontsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhooks
<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">list</a>(site_id) -> Webflow.WebhookList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all App-created Webhooks registered for a given site

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.list("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>(site_id, { ...params }) -> Webflow.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Webhook.

Limit of 75 registrations per `triggerType`, per site.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/data-clients/getting-started).</Note>
Required scope | `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create("580e63e98c9a982ac9b8b741", {
    id: "582266e0cd48de0f0e3c6d8b",
    triggerType: "form_submission",
    url: "https://webhook.site/7f7f7f7f-7f7f-7f7f-7f7f-7f7f7f7f7f7f",
    workspaceId: "4f4e46fd476ea8c507000001",
    siteId: "562ac0395358780a1f5e6fbd",
    lastTriggered: new Date("2023-02-08T23:59:28.000Z"),
    createdOn: new Date("2022-11-08T23:59:28.000Z")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Webhook` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">get</a>(webhook_id) -> Webflow.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific Webhook instance

Required scope: `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.get("580e64008c9a982ac9b8b754");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**webhook_id:** `string` — Unique identifier for a Webhook
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>(webhook_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a Webhook

Required scope: `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.delete("580e64008c9a982ac9b8b754");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**webhook_id:** `string` — Unique identifier for a Webhook
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Forms
<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.FormList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List forms for a given site.

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forms.list("580e63e98c9a982ac9b8b741", {
    limit: 1,
    offset: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">get</a>(form_id) -> Webflow.Form</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a given form.

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forms.get("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**form_id:** `string` — Unique identifier for a Form
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">listSubmissions</a>(form_id, { ...params }) -> Webflow.FormSubmissionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List form submissions for a given form

<Note title="Forms in components">
  When a form is used in a component definition, each instance of the form is considered a unique form.

  To get a combined list of submissions for a form that appears across multiple component instances, use the [List Form Submissions by Site](/data/reference/forms/form-submissions/list-submissions-by-site) endpoint.
</Note>

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forms.listSubmissions("580e63e98c9a982ac9b8b741", {
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**form_id:** `string` — Unique identifier for a Form
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsListSubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">getSubmission</a>(form_submission_id) -> Webflow.FormSubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a given form submissio.

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forms.getSubmission("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**form_submission_id:** `string` — Unique identifier for a Form Submission
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">deleteSubmission</a>(form_submission_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a form submission


Required scope | `forms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forms.deleteSubmission("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**form_submission_id:** `string` — Unique identifier for a Form Submission
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">updateSubmission</a>(form_submission_id, { ...params }) -> Webflow.FormSubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update hidden fields on a form submission

Required scope | `forms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forms.updateSubmission("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**form_submission_id:** `string` — Unique identifier for a Form Submission
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsUpdateSubmissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Products
<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.ProductAndSkUsList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all products for a site.

Use `limit` and `offset` to page through all products with subsequent requests. All SKUs for each product
will also be fetched and returned. The `limit`, `offset` and `total` values represent Products only and do not include any SKUs.

Required scope | `ecommerce:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.list("580e63e98c9a982ac9b8b741", {
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">create</a>(site_id, { ...params }) -> Webflow.ProductAndSkUs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new ecommerce product and defaultSKU. A product, at minimum, must have a single SKU.

To create a product with multiple SKUs:
  - First, create a list of `sku-properties`, also known as [product options](https://help.webflow.com/hc/en-us/articles/33961334531347-Create-product-options-and-variants). For example, a T-shirt product may have a "color" `sku-property`, with a list of enum values: red, yellow, and blue, another `sku-property` may be "size", with a list of enum values: small, medium, and large.
  - Once, a product is created with a list of `sku-properties`, Webflow will create a **default SKU**, which is always a combination of the first `enum` values of each `sku-property`. (e.g. Small - Red - T-Shirt)
  - After creation, you can create additional SKUs for the product, using the [Create SKUs endpoint.](/data/reference/ecommerce/products/create-sku)

Upon creation, the default product type will be `Advanced`, which ensures all Product and SKU fields will be shown to users in the Designer.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.create("580e63e98c9a982ac9b8b741", {
    publishStatus: "staging",
    product: {
        fieldData: {
            name: "Colorful T-shirt",
            slug: "colorful-t-shirt",
            description: "Our best-selling t-shirt available in multiple colors and sizes",
            skuProperties: [{
                    id: "color",
                    name: "Color",
                    "enum": [{
                            id: "red",
                            name: "Red",
                            slug: "red"
                        }, {
                            id: "yellow",
                            name: "Yellow",
                            slug: "yellow"
                        }, {
                            id: "blue",
                            name: "Blue",
                            slug: "blue"
                        }]
                }, {
                    id: "size",
                    name: "Size",
                    "enum": [{
                            id: "small",
                            name: "Small",
                            slug: "small"
                        }, {
                            id: "medium",
                            name: "Medium",
                            slug: "medium"
                        }, {
                            id: "large",
                            name: "Large",
                            slug: "large"
                        }]
                }]
        }
    },
    sku: {
        fieldData: {
            name: "Colorful T-shirt - Red Small",
            slug: "colorful-t-shirt-red-small",
            price: {
                value: 2499,
                unit: "USD",
                currency: "USD"
            },
            mainImage: "https://rocketamp-sample-store.myshopify.com/cdn/shop/products/Gildan_2000_Antique_Cherry_Red_Front_1024x1024.jpg?v=1527232987"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductSkuCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">get</a>(site_id, product_id) -> Webflow.ProductAndSkUs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single product by its ID. All of its SKUs will also be
retrieved.

Required scope | `ecommerce:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.get("580e63e98c9a982ac9b8b741", "580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**product_id:** `string` — Unique identifier for a Product
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">update</a>(site_id, product_id, { ...params }) -> Webflow.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing Product.

Updating an existing Product will set the product type to `Advanced`, which ensures all Product and SKU fields will be shown to users in the Designer.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.update("580e63e98c9a982ac9b8b741", "580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**product_id:** `string` — Unique identifier for a Product
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductSkuUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">createSku</a>(site_id, product_id, { ...params }) -> Webflow.ProductsCreateSkuResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create additional SKUs to manage every [option and variant of your Product.](https://help.webflow.com/hc/en-us/articles/33961334531347-Create-product-options-and-variants)

Creating SKUs through the API will set the product type to `Advanced`, which ensures all Product and SKU fields will be shown to users in the Designer.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.createSku("580e63e98c9a982ac9b8b741", "580e63fc8c9a982ac9b8b745", {
    skus: [{
            id: "66072fb71b89448912e2681c",
            cmsLocaleId: "653ad57de882f528b32e810e",
            lastPublished: new Date("2023-03-17T18:47:35.000Z"),
            lastUpdated: new Date("2023-03-17T18:47:35.000Z"),
            createdOn: new Date("2023-03-17T18:47:35.000Z"),
            fieldData: {
                name: "Colorful T-shirt - Default",
                slug: "colorful-t-shirt-default",
                price: {
                    value: 2499,
                    unit: "USD",
                    currency: "USD"
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**product_id:** `string` — Unique identifier for a Product
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductsCreateSkuRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">updateSku</a>(site_id, product_id, sku_id, { ...params }) -> Webflow.Sku</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specified SKU.

Updating an existing SKU will set the Product type to `Advanced`, which ensures all Product and SKU fields will be shown to users in the Designer.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.updateSku("580e63e98c9a982ac9b8b741", "580e63fc8c9a982ac9b8b745", "5e8518516e147040726cc415", {
    sku: {
        id: "66072fb71b89448912e2681c",
        cmsLocaleId: "653ad57de882f528b32e810e",
        lastPublished: new Date("2023-03-17T18:47:35.000Z"),
        lastUpdated: new Date("2023-03-17T18:47:35.000Z"),
        createdOn: new Date("2023-03-17T18:47:35.000Z"),
        fieldData: {
            name: "Colorful T-shirt - Default",
            slug: "colorful-t-shirt-default",
            price: {
                value: 2499,
                unit: "USD",
                currency: "USD"
            }
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**product_id:** `string` — Unique identifier for a Product
    
</dd>
</dl>

<dl>
<dd>

**sku_id:** `string` — Unique identifier for a SKU
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductsUpdateSkuRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Orders
<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.OrderList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all orders created for a given site.

Required scope | `ecommerce:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.list("580e63e98c9a982ac9b8b741", {
    status: "pending",
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">get</a>(site_id, order_id) -> Webflow.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single product by its ID. All of its SKUs will also be
retrieved.

Required scope | `ecommerce:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.get("580e63e98c9a982ac9b8b741", "5e8518516e147040726cc415");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**order_id:** `string` — Unique identifier for an Order
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">update</a>(site_id, order_id, { ...params }) -> Webflow.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API lets you update the fields, `comment`, `shippingProvider`,
and/or `shippingTracking` for a given order. All three fields can be
updated simultaneously or independently.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.update("580e63e98c9a982ac9b8b741", "5e8518516e147040726cc415");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**order_id:** `string` — Unique identifier for an Order
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">updateFulfill</a>(site_id, order_id, { ...params }) -> Webflow.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an order's status to fulfilled

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.updateFulfill("580e63e98c9a982ac9b8b741", "5e8518516e147040726cc415");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**order_id:** `string` — Unique identifier for an Order
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersUpdateFulfillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">updateUnfulfill</a>(site_id, order_id) -> Webflow.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an order's status to unfulfilled

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.updateUnfulfill("580e63e98c9a982ac9b8b741", "5e8518516e147040726cc415");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**order_id:** `string` — Unique identifier for an Order
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">refund</a>(site_id, order_id, { ...params }) -> Webflow.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API will reverse a Stripe charge and refund an order back to a
customer. It will also set the order's status to `refunded`.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.refund("580e63e98c9a982ac9b8b741", "5e8518516e147040726cc415");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**order_id:** `string` — Unique identifier for an Order
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersRefundRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Inventory
<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">list</a>(sku_collection_id, sku_id) -> Webflow.InventoryItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the current inventory levels for a particular SKU item.

Required scope | `ecommerce:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.list("6377a7c4b7a79608c34a46f7", "5e8518516e147040726cc415");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sku_collection_id:** `string` — Unique identifier for a SKU collection. Use the List Collections API to find this ID.
    
</dd>
</dl>

<dl>
<dd>

**sku_id:** `string` — Unique identifier for a SKU
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InventoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">update</a>(sku_collection_id, sku_id, { ...params }) -> Webflow.InventoryItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the current inventory levels for a particular SKU item.

Updates may be given in one or two methods, absolutely or incrementally.
- Absolute updates are done by setting `quantity` directly.
- Incremental updates are by specifying the inventory delta in `updateQuantity` which is then added to the `quantity` stored on the server.

Required scope | `ecommerce:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.update("6377a7c4b7a79608c34a46f7", "5e8518516e147040726cc415", {
    inventoryType: "infinite"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sku_collection_id:** `string` — Unique identifier for a SKU collection. Use the List Collections API to find this ID.
    
</dd>
</dl>

<dl>
<dd>

**sku_id:** `string` — Unique identifier for a SKU
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.InventoryUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InventoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ecommerce
<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getSettings</a>(site_id) -> Webflow.EcommerceSettings</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve ecommerce settings for a site.

Required scope | `ecommerce:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getSettings("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Analyze Reports
<details><summary><code>client.analyze.reports.<a href="/src/api/resources/analyze/resources/reports/client/Client.ts">traffic</a>(site_id, { ...params }) -> Webflow.TrafficResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a daily time series of a single metric — sessions, users, or pageviews — over a time window.

Filter the report with top-level query parameters (`country`, `deviceType`, `pagePath`, etc.) or via the `filter` parameter for multi-value and negation matching.

<Warning title="Analyze add-on required">This endpoint requires a workspace with the Analyze add-on.</Warning>

<Note title="Concurrency limit: 1 request at a time">Each access token can have one Analyze request in flight at a time, across all Analyze endpoints. Additional concurrent requests return `429 Too Many Requests`; wait for your in-flight request to finish, or for the `Retry-After` interval, then retry.</Note>

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analyze.reports.traffic("580e63e98c9a982ac9b8b741", {
    startTime: new Date("2026-04-01T00:00:00.000Z"),
    endTime: new Date("2026-04-08T00:00:00.000Z"),
    metricScope: "session",
    bucketTimeZone: "America/New_York",
    deviceType: "desktop",
    country: "US",
    pagePath: "/towels",
    trafficSource: "SO",
    referrer: "google.com",
    browser: "Chrome",
    utmCampaign: "dont-panic-2026",
    utmMedium: "email",
    utmSource: "hitchhikers-guide"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.analyze.ReportsTrafficRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.analyze.reports.<a href="/src/api/resources/analyze/resources/reports/client/Client.ts">topPages</a>(site_id, { ...params }) -> Webflow.TopPagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the most-visited pages over a time window, ranked by `sortBy` (sessions, users, or pageviews).

Each row carries all three scope counts; `sortBy` only governs ordering. Filter the report with top-level query parameters (`country`, `deviceType`, `pagePath`, etc.) or via the `filter` parameter for multi-value and negation matching.

Set `timeseries[bucketTimeZone]` to attach a daily pageview `timeseries` to each row. Bucket counts are always pageviews regardless of `sortBy` — row-level counts honor the requested sort; the timeseries does not.

<Warning title="Analyze add-on required">This endpoint requires a workspace with the Analyze add-on.</Warning>

<Note title="Concurrency limit: 1 request at a time">Each access token can have one Analyze request in flight at a time, across all Analyze endpoints. Additional concurrent requests return `429 Too Many Requests`; wait for your in-flight request to finish, or for the `Retry-After` interval, then retry.</Note>

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analyze.reports.topPages("580e63e98c9a982ac9b8b741", {
    startTime: new Date("2026-04-01T00:00:00.000Z"),
    endTime: new Date("2026-04-08T00:00:00.000Z"),
    sortBy: "session",
    limit: 1,
    deviceType: "desktop",
    country: "US",
    pagePath: "/towels",
    trafficSource: "SO",
    referrer: "google.com",
    browser: "Chrome",
    utmCampaign: "dont-panic-2026",
    utmMedium: "email",
    utmSource: "hitchhikers-guide"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.analyze.ReportsTopPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.analyze.reports.<a href="/src/api/resources/analyze/resources/reports/client/Client.ts">topDimensions</a>(site_id, { ...params }) -> Webflow.TopDimensionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the top values within a chosen `dimension` — top countries, top traffic sources, top campaigns, top audiences, and so on — over a time window, ranked by sessions or users.

Filter the report with top-level query parameters (`country`, `deviceType`, `pagePath`, etc.) or via the `filter` parameter for multi-value and negation matching.

<Warning title="Analyze add-on required">This endpoint requires a workspace with the Analyze add-on.</Warning>

<Note title="Concurrency limit: 1 request at a time">Each access token can have one Analyze request in flight at a time, across all Analyze endpoints. Additional concurrent requests return `429 Too Many Requests`; wait for your in-flight request to finish, or for the `Retry-After` interval, then retry.</Note>

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analyze.reports.topDimensions("580e63e98c9a982ac9b8b741", {
    startTime: new Date("2026-04-01T00:00:00.000Z"),
    endTime: new Date("2026-04-08T00:00:00.000Z"),
    dimension: "country",
    metricScope: "session",
    limit: 1,
    deviceType: "desktop",
    country: "US",
    pagePath: "/towels",
    trafficSource: "SO",
    referrer: "google.com",
    browser: "Chrome",
    utmCampaign: "dont-panic-2026",
    utmMedium: "email",
    utmSource: "hitchhikers-guide"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.analyze.ReportsTopDimensionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.analyze.reports.<a href="/src/api/resources/analyze/resources/reports/client/Client.ts">topEvents</a>(site_id, { ...params }) -> Webflow.TopEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the top events over a time window, ranked by how often they occurred.

Events are counted individually, not rolled up into sessions, users, or pageviews — so this report has no `metricScope`. Each row's `count` is how many times the event occurred. Filter the report with top-level query parameters (`country`, `deviceType`, `pagePath`, etc.) or via the `filter` parameter for multi-value and negation matching.

Set `timeseries[bucketTimeZone]` to attach a daily event count `timeseries` to each row.

<Warning title="Analyze add-on required">This endpoint requires a workspace with the Analyze add-on.</Warning>

<Note title="Concurrency limit: 1 request at a time">Each access token can have one Analyze request in flight at a time, across all Analyze endpoints. Additional concurrent requests return `429 Too Many Requests`; wait for your in-flight request to finish, or for the `Retry-After` interval, then retry.</Note>

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analyze.reports.topEvents("580e63e98c9a982ac9b8b741", {
    startTime: new Date("2026-04-01T00:00:00.000Z"),
    endTime: new Date("2026-04-08T00:00:00.000Z"),
    limit: 1,
    deviceType: "desktop",
    country: "US",
    pagePath: "/towels",
    trafficSource: "SO",
    browser: "Chrome",
    utmCampaign: "dont-panic-2026",
    utmMedium: "email",
    utmSource: "hitchhikers-guide"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.analyze.ReportsTopEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.analyze.reports.<a href="/src/api/resources/analyze/resources/reports/client/Client.ts">timeOnPage</a>(site_id, { ...params }) -> Webflow.TimeOnPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the average time on page over a time window — as a single aggregate value, or bucketed by day or week when `timeseries` is supplied.

Choose how the average is computed with `metricScope` (per session, user, or pageview). Filter the report with top-level query parameters (`country`, `deviceType`, `pagePath`, etc.) or via the `filter` parameter for multi-value and negation matching.

<Warning title="Analyze add-on required">This endpoint requires a workspace with the Analyze add-on.</Warning>

<Note title="Concurrency limit: 1 request at a time">Each access token can have one Analyze request in flight at a time, across all Analyze endpoints. Additional concurrent requests return `429 Too Many Requests`; wait for your in-flight request to finish, or for the `Retry-After` interval, then retry.</Note>

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analyze.reports.timeOnPage("580e63e98c9a982ac9b8b741", {
    startTime: new Date("2026-04-01T00:00:00.000Z"),
    endTime: new Date("2026-04-08T00:00:00.000Z"),
    metricScope: "session",
    deviceType: "desktop",
    country: "US",
    pagePath: "/towels",
    trafficSource: "SO",
    referrer: "google.com",
    browser: "Chrome",
    utmCampaign: "dont-panic-2026",
    utmMedium: "email",
    utmSource: "hitchhikers-guide"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.analyze.ReportsTimeOnPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Collections Fields
<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">create</a>(collection_id, { ...params }) -> Webflow.FieldCreate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a custom field in a collection.

Field validation is currently not available through the API.

Bulk creation of fields is not supported with this endpoint. To add multiple fields at once, include them when you [create the collection.](/data/v2.0.0/reference/cms/collections/create)

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.fields.create("580e63fc8c9a982ac9b8b745", {
    id: "562ac0395358780a1f5e6fbc",
    isEditable: true,
    isRequired: false,
    type: "RichText",
    displayName: "Post Body",
    helpText: "Add the body of your post here"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FieldCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">delete</a>(collection_id, field_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a custom field in a collection. This endpoint does not currently support bulk deletion.

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.fields.delete("580e63fc8c9a982ac9b8b745", "580e63fc8c9a982ac9b8b745");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**field_id:** `string` — Unique identifier for a Field in a collection
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">update</a>(collection_id, field_id, { ...params }) -> Webflow.Field</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a custom field in a collection.

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.fields.update("580e63fc8c9a982ac9b8b745", "580e63fc8c9a982ac9b8b745", {
    isRequired: false,
    displayName: "Post Body",
    helpText: "Add the body of your post here"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**field_id:** `string` — Unique identifier for a Field in a collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.FieldUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Collections Items
<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">listItems</a>(collection_id, { ...params }) -> Webflow.CollectionItemList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

List of all Items within a Collection.

<Note>
  This endpoint supports:

  - Custom `filter[...]` queries support up to 10 filter terms and 2 text-search terms per request.
  - Custom `sort[...]` queries support up to 3 sort fields per request.
</Note>

Required scope | `CMS:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.listItems("580e63fc8c9a982ac9b8b745", {
    cmsLocaleId: "cmsLocaleId",
    offset: 1,
    limit: 1,
    name: "name",
    slug: "slug",
    sortBy: "createdOn",
    sortOrder: "asc",
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsListItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">createItem</a>(collection_id, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Create Item(s) in a Collection.

This endpoint accepts two request shapes, and a request must use one or the other:

- **Single item** — send `fieldData` at the top level. Set `cmsLocaleId` to create the item in a specific locale.
- **Multiple items** — send an `items` array with at least one entry. Each entry needs its own `fieldData`, and can set its own `cmsLocaleId`, `isDraft`, and `isArchived`. The API ignores any other property on an entry.

```json
{
  "items": [
    {
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Senior Data Analyst",
        "slug": "senior-data-analyst"
      }
    },
    {
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Product Manager",
        "slug": "product-manager"
      }
    }
  ]
}
```

A request that carries both `fieldData` and `items` returns a `400`.

To create items across multiple locales, please use [this endpoint.](/data/reference/cms/collection-items/staged-items/create-items)

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.createItem("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "The Hitchhiker's Guide to the Galaxy",
            slug: "hitchhikers-guide-to-the-galaxy",
            "plain-text": "Don't Panic.",
            "rich-text": "<h3>A Guide to Interstellar Travel</h3><p>A towel is about the most massively useful thing an interstellar hitchhiker can have. <strong>Don't forget yours!</strong></p>",
            "main-image": {
                "fileId": "62b720ef280c7a7a3be8cabe",
                "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
            },
            "image-gallery": [
                {
                    "fileId": "62b720ef280c7a7a3be8cabd",
                    "url": "/files/62b720ef280c7a7a3be8cabd_image.png"
                },
                {
                    "fileId": "62b720ef280c7a7a3be8cabe",
                    "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
                }
            ],
            "intro-video": "https://www.youtube.com/watch?v=aJ83KAggd-4",
            "official-site": "https://hitchhikers.fandom.com/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy",
            "contact-email": "zaphod.beeblebrox@heartofgold.gov",
            "support-phone": "424-242-4242",
            "answer-to-everything": 42,
            "release-date": "1979-10-12T00:00:00.000Z",
            "is-featured": true,
            "brand-color": "#000000",
            category: "62b720ef280c7a7a3be8cabf",
            author: "62b720ef280c7a7a3be8cab0",
            tags: [
                "62b720ef280c7a7a3be8cab1",
                "62b720ef280c7a7a3be8cab2"
            ],
            "downloadable-asset": {
                "fileId": "62b720ef280c7a7a3be8cab3",
                "url": "/files/62b720ef280c7a7a3be8cab3_document.pdf"
            }
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsCreateItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItems</a>(collection_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete Items from a Collection.

<Tip title="Localization Tip">Items will only be deleted in the primary locale unless a `cmsLocaleId` is included in the request.</Tip>

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.deleteItems("580e63fc8c9a982ac9b8b745", {
    items: [{
            id: "580e64008c9a982ac9b8b754"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItems</a>(collection_id, { ...params }) -> Webflow.ItemsUpdateItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Update a single item or multiple items in a Collection.

The limit for this endpoint is 100 items.

<Tip title="Localization Tip">Items will only be updated in the primary locale, unless a `cmsLocaleId` is included in the request.</Tip>

<Note title="Draft status behavior">
  `isDraft: true` doesn't unpublish an item. The resulting status depends on whether the item has been published before:

  - **Item that has never been published:** the item gets a `Draft` status.
  - **Already-published item:** the item gets a `Changes in draft` status. The live item stays published, and your changes are held back until you publish them.

  Setting `isDraft: false` queues the item to publish on the next site publish. To remove an item from the live site, use [Unpublish Live Collection Items](/data/reference/cms/collection-items/live-items/delete-items-live). For the full status mapping, see [Publishing with the CMS API](/data/docs/working-with-the-cms/publishing).
</Note>

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.updateItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
                featured: false
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">listItemsLive</a>(collection_id, { ...params }) -> Webflow.CollectionItemList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

List all published items in a collection.

<Tip title="Serve data with the Content Delivery API">
  Serving data to applications in real-time? Use the Content Delivery API at `api-cdn.webflow.com` for better performance. The CDN-backed endpoint is optimized for high-volume reads, while the Data API is designed for writes and management operations.
</Tip>

<Note>
  This endpoint supports:

  - Custom `filter[...]` queries support up to 10 filter terms and 2 text-search terms per request.
  - Custom `sort[...]` queries support up to 3 sort fields per request.
</Note>

Required scope | `CMS:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.listItemsLive("580e63fc8c9a982ac9b8b745", {
    cmsLocaleId: "cmsLocaleId",
    offset: 1,
    limit: 1,
    name: "name",
    slug: "slug",
    sortBy: "createdOn",
    sortOrder: "asc",
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsListItemsLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">createItemLive</a>(collection_id, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Create item(s) in a collection that will be immediately published to the live site.

This endpoint accepts two request shapes, and a request must use one or the other:

- **Single item** — send `fieldData` at the top level. Set `cmsLocaleId` to create the item in a specific locale.
- **Multiple items** — send an `items` array with at least one entry. Each entry needs its own `fieldData`, and can set its own `cmsLocaleId`, `isDraft`, and `isArchived`. The API ignores any other property on an entry.

```json
{
  "items": [
    {
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Senior Data Analyst",
        "slug": "senior-data-analyst"
      }
    },
    {
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Product Manager",
        "slug": "product-manager"
      }
    }
  ]
}
```

A request that carries both `fieldData` and `items` returns a `400`.

To create items across multiple locales, [please use this endpoint.](/data/reference/cms/collection-items/staged-items/create-items)

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.createItemLive("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "The Hitchhiker's Guide to the Galaxy",
            slug: "hitchhikers-guide-to-the-galaxy",
            "plain-text": "Don't Panic.",
            "rich-text": "<h3>A Guide to Interstellar Travel</h3><p>A towel is about the most massively useful thing an interstellar hitchhiker can have. <strong>Don't forget yours!</strong></p>",
            "main-image": {
                "fileId": "62b720ef280c7a7a3be8cabe",
                "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
            },
            "image-gallery": [
                {
                    "fileId": "62b720ef280c7a7a3be8cabd",
                    "url": "/files/62b720ef280c7a7a3be8cabd_image.png"
                },
                {
                    "fileId": "62b720ef280c7a7a3be8cabe",
                    "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
                }
            ],
            "intro-video": "https://www.youtube.com/watch?v=aJ83KAggd-4",
            "official-site": "https://hitchhikers.fandom.com/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy",
            "contact-email": "zaphod.beeblebrox@heartofgold.gov",
            "support-phone": "424-242-4242",
            "answer-to-everything": 42,
            "release-date": "1979-10-12T00:00:00.000Z",
            "is-featured": true,
            "brand-color": "#000000",
            category: "62b720ef280c7a7a3be8cabf",
            author: "62b720ef280c7a7a3be8cab0",
            tags: [
                "62b720ef280c7a7a3be8cab1",
                "62b720ef280c7a7a3be8cab2"
            ],
            "downloadable-asset": {
                "fileId": "62b720ef280c7a7a3be8cab3",
                "url": "/files/62b720ef280c7a7a3be8cab3_document.pdf"
            }
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsCreateItemLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItemsLive</a>(collection_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unpublish up to 100 items from the live site and set the `isDraft` property to `true`.

<Tip title="Localization Tip">Items will only be unpublished in the primary locale unless a `cmsLocaleId` is included in the request.</Tip>

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.deleteItemsLive("580e63fc8c9a982ac9b8b745", {
    items: [{
            id: "580e64008c9a982ac9b8b754"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemsLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItemsLive</a>(collection_id, { ...params }) -> Webflow.CollectionItemListNoPagination</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Update a single published item or multiple published items (up to 100) in a Collection

<Tip title="Localization Tip">Items will only be updated in the primary locale, unless a `cmsLocaleId` is included in the request.</Tip>

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.updateItemsLive("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
                featured: false
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemsLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">createItems</a>(collection_id, { ...params }) -> Webflow.BulkCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Create an item or multiple items in a CMS Collection across multiple corresponding locales.

<Note>
  - This endpoint can create up to 100 items in a request.
  - If the `cmsLocaleIds` parameter is not included in the request, an item will only be created in the primary locale.
</Note>

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.createItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Don\u2019t Panic",
        slug: "dont-panic"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.CreateBulkCollectionItemRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">getItem</a>(collection_id, item_id, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Get details of a selected Collection Item.

Required scope | `CMS:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.getItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    cmsLocaleId: "cmsLocaleId",
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` — Unique identifier for an Item
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsGetItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItem</a>(collection_id, item_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an item from a collection.

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.deleteItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    cmsLocaleId: "cmsLocaleId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` — Unique identifier for an Item
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItem</a>(collection_id, item_id, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Update a selected Item in a Collection.

<Note title="Draft status behavior">
  `isDraft: true` doesn't unpublish an item. The resulting status depends on whether the item has been published before:

  - **Item that has never been published:** the item gets a `Draft` status.
  - **Already-published item:** the item gets a `Changes in draft` status. The live item stays published, and your changes are held back until you publish them.

  Setting `isDraft: false` queues the item to publish on the next site publish. To remove an item from the live site, use [Unpublish Live Collection Items](/data/reference/cms/collection-items/live-items/delete-items-live). For the full status mapping, see [Publishing with the CMS API](/data/docs/working-with-the-cms/publishing).
</Note>

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.updateItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    skipInvalidFiles: true,
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "The Hitchhiker's Guide to the Galaxy",
            slug: "hitchhikers-guide-to-the-galaxy",
            "plain-text": "Don't Panic.",
            "rich-text": "<h3>A Guide to Interstellar Travel</h3><p>A towel is about the most massively useful thing an interstellar hitchhiker can have. <strong>Don't forget yours!</strong></p>",
            "main-image": {
                "fileId": "62b720ef280c7a7a3be8cabe",
                "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
            },
            "image-gallery": [
                {
                    "fileId": "62b720ef280c7a7a3be8cabd",
                    "url": "/files/62b720ef280c7a7a3be8cabd_image.png"
                },
                {
                    "fileId": "62b720ef280c7a7a3be8cabe",
                    "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
                }
            ],
            "intro-video": "https://www.youtube.com/watch?v=aJ83KAggd-4",
            "official-site": "https://hitchhikers.fandom.com/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy",
            "contact-email": "zaphod.beeblebrox@heartofgold.gov",
            "support-phone": "424-242-4242",
            "answer-to-everything": 42,
            "release-date": "1979-10-12T00:00:00.000Z",
            "is-featured": true,
            "brand-color": "#000000",
            category: "62b720ef280c7a7a3be8cabf",
            author: "62b720ef280c7a7a3be8cab0",
            tags: [
                "62b720ef280c7a7a3be8cab1",
                "62b720ef280c7a7a3be8cab2"
            ],
            "downloadable-asset": {
                "fileId": "62b720ef280c7a7a3be8cab3",
                "url": "/files/62b720ef280c7a7a3be8cab3_document.pdf"
            }
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` — Unique identifier for an Item
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">getItemLive</a>(collection_id, item_id, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Get details of a selected Collection live Item.

<Tip title="Serve data with the Content Delivery API">
  Serving data to applications in real-time? Use the Content Delivery API at `api-cdn.webflow.com` for better performance. The CDN-backed endpoint is optimized for high-volume reads, while the Data API is designed for writes and management operations.
</Tip>

Required scope | `CMS:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.getItemLive("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    cmsLocaleId: "cmsLocaleId",
    translatable: "65427cf400e02b306eaa04a0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` — Unique identifier for an Item
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsGetItemLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItemLive</a>(collection_id, item_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unpublish a live item from the site and set the `isDraft` property to `true`.

For bulk unpublishing, please use [this endpoint.](/data/v2.0.0/reference/cms/collection-items/live-items/delete-items-live)

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.deleteItemLive("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    cmsLocaleId: "cmsLocaleId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` — Unique identifier for an Item
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItemLive</a>(collection_id, item_id, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip title="Components in Rich Text">
  Rich Text field values can contain Webflow component instances as `<wf-component>` markup — see [Components in Rich Text](/data/docs/working-with-the-cms/components-in-rich-text) for the markup grammar, how to find component and property IDs, and the write constraints.
</Tip>

Update a selected live Item in a Collection. The updates for this Item will be published to the live site.

Required scope | `CMS:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.updateItemLive("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    skipInvalidFiles: true,
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "The Hitchhiker's Guide to the Galaxy",
            slug: "hitchhikers-guide-to-the-galaxy",
            "plain-text": "Don't Panic.",
            "rich-text": "<h3>A Guide to Interstellar Travel</h3><p>A towel is about the most massively useful thing an interstellar hitchhiker can have. <strong>Don't forget yours!</strong></p>",
            "main-image": {
                "fileId": "62b720ef280c7a7a3be8cabe",
                "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
            },
            "image-gallery": [
                {
                    "fileId": "62b720ef280c7a7a3be8cabd",
                    "url": "/files/62b720ef280c7a7a3be8cabd_image.png"
                },
                {
                    "fileId": "62b720ef280c7a7a3be8cabe",
                    "url": "/files/62b720ef280c7a7a3be8cabe_image.png"
                }
            ],
            "intro-video": "https://www.youtube.com/watch?v=aJ83KAggd-4",
            "official-site": "https://hitchhikers.fandom.com/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy",
            "contact-email": "zaphod.beeblebrox@heartofgold.gov",
            "support-phone": "424-242-4242",
            "answer-to-everything": 42,
            "release-date": "1979-10-12T00:00:00.000Z",
            "is-featured": true,
            "brand-color": "#000000",
            category: "62b720ef280c7a7a3be8cabf",
            author: "62b720ef280c7a7a3be8cab0",
            tags: [
                "62b720ef280c7a7a3be8cab1",
                "62b720ef280c7a7a3be8cab2"
            ],
            "downloadable-asset": {
                "fileId": "62b720ef280c7a7a3be8cab3",
                "url": "/files/62b720ef280c7a7a3be8cab3_document.pdf"
            }
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` — Unique identifier for an Item
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemLiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">publishItem</a>(collection_id, { ...params }) -> Webflow.ItemsPublishItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish an item or multiple items.

Required scope | `cms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.items.publishItem("580e63fc8c9a982ac9b8b745", {
    itemIds: ["643fd856d66b6528195ee2ca", "643fd856d66b6528195ee2cb", "643fd856d66b6528195ee2cc"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` — Unique identifier for a Collection
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ItemsPublishItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Pages Scripts
<details><summary><code>client.pages.scripts.<a href="/src/api/resources/pages/resources/scripts/client/Client.ts">getCustomCode</a>(page_id) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all scripts applied to a page.

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.scripts.getCustomCode("63c720f9347c2139b248e552");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pages.scripts.<a href="/src/api/resources/pages/resources/scripts/client/Client.ts">upsertCustomCode</a>(page_id, { ...params }) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply registered scripts to a page. If you have multiple scripts your App needs to apply or maintain on a page, ensure they are always included in the request body for this endpoint. To remove individual scripts, simply call this endpoint without the script in the request body.

<Note title="Script Registration">
  To apply a script to a page, the script must first be registered to a Site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.scripts.upsertCustomCode("63c720f9347c2139b248e552", {
    scripts: [{
            id: "cms_slider",
            location: "header",
            version: "1.0.0",
            attributes: {
                "my-attribute": "some-value"
            }
        }, {
            id: "alert",
            location: "header",
            version: "0.0.1"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ScriptApplyList` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pages.scripts.<a href="/src/api/resources/pages/resources/scripts/client/Client.ts">deleteCustomCode</a>(page_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove all scripts from a page applied by the App. This endpoint will not remove scripts from the site's registered scripts.

To remove individual scripts applied by the App, use the [Add/Update Custom Code](/data/reference/custom-code/custom-code-pages/upsert-custom-code) endpoint.

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pages.scripts.deleteCustomCode("63c720f9347c2139b248e552");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**page_id:** `string` — Unique identifier for a Page
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites Redirects
<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">list</a>(site_id) -> Webflow.Redirects</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a list of all 301 redirect rules configured for a specific site.

Use this endpoint to review, audit, or manage the redirection rules that control how traffic is rerouted on your site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.redirects.list("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedirectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">create</a>(site_id, { ...params }) -> Webflow.Redirect</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new 301 redirection rule to a site.

This endpoint allows you to define a source path (`fromUrl`) and its corresponding destination path (`toUrl`), which will dictate how traffic is rerouted on your site. This is useful for managing site changes, restructuring URLs, or handling outdated links.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.redirects.create("580e63e98c9a982ac9b8b741", {
    id: "42e1a2b7aa1a13f768a0042a",
    fromUrl: "/mostly-harmless",
    toUrl: "/earth"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Redirect` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedirectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">delete</a>(site_id, redirect_id) -> Webflow.Redirects</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a 301 redirection rule from a site.

This is useful for cleaning up outdated or unnecessary redirects, ensuring that your site's routing behavior remains efficient and up-to-date.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.redirects.delete("580e63e98c9a982ac9b8b741", "66c4cb9a20cac35ed19500e6");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**redirect_id:** `string` — Unique identifier site redirect
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedirectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">update</a>(site_id, redirect_id, { ...params }) -> Webflow.Redirect</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a 301 redirection rule from a site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.redirects.update("580e63e98c9a982ac9b8b741", "66c4cb9a20cac35ed19500e6", {
    id: "42e1a2b7aa1a13f768a0042a",
    fromUrl: "/mostly-harmless",
    toUrl: "/earth"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**redirect_id:** `string` — Unique identifier site redirect
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Redirect` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedirectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites Plans
<details><summary><code>client.sites.plans.<a href="/src/api/resources/sites/resources/plans/client/Client.ts">getSitePlan</a>(site_id) -> Webflow.SitePlan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get site plan details for the specified Site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope | `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.plans.getSitePlan("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites RobotsTxt
<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">get</a>(site_id) -> Webflow.Robots</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the robots.txt configuration for various user agents.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `site_config:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.robotsTxt.get("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxtClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">put</a>(site_id, { ...params }) -> Webflow.Robots</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the `robots.txt` configuration for various user agents.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope | `site_config:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.robotsTxt.put("580e63e98c9a982ac9b8b741", {
    rules: [{
            userAgent: "googlebot",
            allows: ["/public"],
            disallows: ["/vogon-poetry", "/total-perspective-vortex"]
        }],
    sitemap: "https://heartofgold.ship/sitemap.xml"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Robots` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxtClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">delete</a>(site_id, { ...params }) -> Webflow.Robots</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove specific rules for a user-agent in your `robots.txt` file. To delete all rules for a user-agent, provide an empty rule set. This will remove the user-agent's entry entirely, leaving it subject to your site's default crawling behavior.

**Note:** Deleting a user-agent with no rules will make the user-agent's access unrestricted unless other directives apply.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `site_config:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.robotsTxt.delete("580e63e98c9a982ac9b8b741", {
    rules: [{
            userAgent: "*",
            allows: ["/public"],
            disallows: ["/bubbles"]
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Robots` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxtClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">patch</a>(site_id, { ...params }) -> Webflow.Robots</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the `robots.txt` configuration for various user agents.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope | `site_config:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.robotsTxt.patch("580e63e98c9a982ac9b8b741", {
    rules: [{
            userAgent: "googlebot",
            allows: ["/public"],
            disallows: ["/vogon-poetry", "/total-perspective-vortex"]
        }],
    sitemap: "https://heartofgold.ship/sitemap.xml"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Robots` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxtClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites WellKnown
<details><summary><code>client.sites.wellKnown.<a href="/src/api/resources/sites/resources/wellKnown/client/Client.ts">put</a>(site_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a supported well-known file to a site.

The current restrictions on well-known files are as follows:
  - Each file must be smaller than 100kb
  - Less than 30 total files
  - Have one of the following file extensions (or no extension): `.txt`, `.json`, `.noext`

  <Note title=".noext">
    `.noext` is a special file extension that removes other extensions. For example, `apple-app-site-association.noext.txt` will be uploaded as `apple-app-site-association`. Use this extension for tools that have trouble uploading extensionless files.
  </Note>

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `site_config:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.wellKnown.put("580e63e98c9a982ac9b8b741", {
    fileName: "apple-app-site-association.txt",
    fileData: "{\n  \"applinks\": {\n    \"apps\": [],\n    \"details\": [\n  {\n    \"appID\": \"ABCDE12345.com.example.app\",\n    \"paths\": [ \"/*\", \"/some/path/*\" ]\n      }\n    ]\n  }\n}\n",
    contentType: "application/json"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.WellKnownFile` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WellKnownClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.wellKnown.<a href="/src/api/resources/sites/resources/wellKnown/client/Client.ts">delete</a>(site_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete existing well-known files from a site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `site_config:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.wellKnown.delete("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.WellKnownDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WellKnownClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites GoogleTag
<details><summary><code>client.sites.googleTag.<a href="/src/api/resources/sites/resources/googleTag/client/Client.ts">list</a>(site_id) -> Webflow.GoogleTagIds</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all Google Tag IDs configured for a site, sorted by order.

Required scope: `sites:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.googleTag.list("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleTagClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.googleTag.<a href="/src/api/resources/sites/resources/googleTag/client/Client.ts">deleteAll</a>(site_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete all Google Tag IDs from a site.

Required scope: `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.googleTag.deleteAll("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleTagClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.googleTag.<a href="/src/api/resources/sites/resources/googleTag/client/Client.ts">upsert</a>(site_id, { ...params }) -> Webflow.GoogleTagIds</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add or update Google Tag IDs for a site. Existing tags not referenced in the request are preserved. A site may have a maximum of 25 tags total.

`order` is optional on input — it is auto-assigned for new tags and returned on all tags in the response.

Required scope: `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.googleTag.upsert("580e63e98c9a982ac9b8b741", {
    googleTagIds: [{
            order: 0,
            displayName: "Main Analytics Tag",
            tagId: "G-1234567890"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.GoogleTagIds` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleTagClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.googleTag.<a href="/src/api/resources/sites/resources/googleTag/client/Client.ts">delete</a>(site_id, tag_id) -> Webflow.GoogleTagIds</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Google Tag ID from a site. The `order` values of the remaining tags are renormalized after deletion.

Required scope: `sites:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.googleTag.delete("580e63e98c9a982ac9b8b741", "G-XXXXXXXXXX");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**tag_id:** `string` — The Google Tag ID (e.g. G-XXXXXXXXXX)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleTagClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites ActivityLogs
<details><summary><code>client.sites.activityLogs.<a href="/src/api/resources/sites/resources/activityLogs/client/Client.ts">list</a>(site_id, { ...params }) -> Webflow.SiteActivityLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve Activity Logs for a specific Site.

<Warning title="Enterprise Only">This endpoint requires an Enterprise workspace.</Warning>

Required scope: `site_activity:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.activityLogs.list("580e63e98c9a982ac9b8b741", {
    limit: 1,
    offset: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.ActivityLogsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActivityLogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites Comments
<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">listCommentThreads</a>(site_id, { ...params }) -> Webflow.CommentThreadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all comment threads for a site.

<Note title="Timing of comment threads">
  There may be a delay of up to 5 minutes before new comments appear in the system.
</Note>

Required scope | `comments:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.comments.listCommentThreads("580e63e98c9a982ac9b8b741", {
    localeId: "65427cf400e02b306eaa04a0",
    offset: 1,
    limit: 1,
    sortBy: "createdOn",
    sortOrder: "asc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CommentsListCommentThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">getCommentThread</a>(site_id, comment_thread_id, { ...params }) -> Webflow.CommentThread</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a specific comment thread.

  <Note title="Timing of comment threads">
    There may be a delay of up to 5 minutes before new comments appear in the system.
  </Note>

Required scope | `comments:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.comments.getCommentThread("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741", {
    localeId: "65427cf400e02b306eaa04a0",
    offset: 1,
    limit: 1,
    sortBy: "createdOn",
    sortOrder: "asc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**comment_thread_id:** `string` — Unique identifier for a Comment Thread
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CommentsGetCommentThreadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">resolveCommentThread</a>(site_id, comment_thread_id, { ...params }) -> Webflow.CommentThread</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resolve or unresolve a comment thread.

<Note>
  This endpoint is rate limited to 60 requests per minute per site.
</Note>

Required scope | `comments:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.comments.resolveCommentThread("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741", {
    resolved: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**comment_thread_id:** `string` — Unique identifier for a Comment Thread
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.ResolveCommentThreadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">listCommentReplies</a>(site_id, comment_thread_id, { ...params }) -> Webflow.CommentReplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all replies to a specific comment thread.

<Note title="Timing of comment threads">
  There may be a delay of up to 5 minutes before new comments appear in the system.
</Note>

Required scope | `comments:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.comments.listCommentReplies("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741", {
    localeId: "65427cf400e02b306eaa04a0",
    offset: 1,
    limit: 1,
    sortBy: "createdOn",
    sortOrder: "asc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**comment_thread_id:** `string` — Unique identifier for a Comment Thread
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CommentsListCommentRepliesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">createCommentReply</a>(site_id, comment_thread_id, { ...params }) -> Webflow.CommentReply</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a reply to an existing comment thread.

The reply author is always the user who authorized the OAuth token.
To @mention a user in the reply, include their user ID in double square brackets in the `content` field, as in `[[userId]]`.

<Note>
  The `comment_created` webhook fires automatically when a reply is created.
</Note>

Required scope | `comments:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.comments.createCommentReply("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741", {
    content: "Thanks for the feedback [[6287ec36a841b25637c663df]]!"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**comment_thread_id:** `string` — Unique identifier for a Comment Thread
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CreateCommentReplyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites Scripts
<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">getCustomCode</a>(site_id) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all scripts applied to a site by the App.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.scripts.getCustomCode("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">upsertCustomCode</a>(site_id, { ...params }) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply registered scripts to a site. If you have multiple scripts your App needs to apply or maintain on a site, ensure they are always included in the request body for this endpoint. To remove individual scripts, simply call this endpoint without the script in the request body.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.scripts.upsertCustomCode("580e63e98c9a982ac9b8b741", {
    scripts: [{
            id: "cms_slider",
            location: "header",
            version: "1.0.0",
            attributes: {
                "my-attribute": "some-value"
            }
        }, {
            id: "alert",
            location: "header",
            version: "0.0.1"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ScriptApplyList` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">deleteCustomCode</a>(site_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove all scripts from a site applied by the App. This endpoint will not remove scripts from the site's registered scripts.

To remove individual scripts applied by the App, use the [Add/Update Custom Code](/data/reference/custom-code/custom-code-sites/upsert-custom-code) endpoint.

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.scripts.deleteCustomCode("580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">listCustomCodeBlocks</a>(site_id, { ...params }) -> Webflow.ListCustomCodeBlocks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of scripts that have been applied to a site and/or individual pages.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints.

  See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

<Note>Access to this endpoint requires a bearer token obtained from an [OAuth Code Grant Flow](/data/reference/oauth-app).</Note>

Required scope | `custom_code:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.scripts.listCustomCodeBlocks("580e63e98c9a982ac9b8b741", {
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.ScriptsListCustomCodeBlocksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScriptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sites Forms
<details><summary><code>client.sites.forms.<a href="/src/api/resources/sites/resources/forms/client/Client.ts">listSubmissionsBySite</a>(site_id, { ...params }) -> Webflow.FormSubmissionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all form submissions for a given site with the ability to filter submissions by a centralized `elementId`.

Add `elementId` when you want to filter form submissions to a specific form in a site. You can get the `elementId` from the [List forms endpoint](/data/reference/forms/forms/list) (displayed as `formElementId` in the response).

<Note title="Forms in components">
When a form is used in a Webflow component definition, each instance of the component will yield a unique form. Adding the `elementId` in this request ensures this API response includes all submissions from that core form, wherever that form is used in instantiated components.
</Note>

Use the [List Form Submissions endpoint](/data/reference/forms/form-submissions/list-submissions) to list form submissions for a given form ID.

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.forms.listSubmissionsBySite("580e63e98c9a982ac9b8b741", {
    elementId: "18259716-3e5a-646a-5f41-5dc4b9405aa0",
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.FormsListSubmissionsBySiteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.forms.<a href="/src/api/resources/sites/resources/forms/client/Client.ts">listSubmissions</a>(site_id, form_id, { ...params }) -> Webflow.FormSubmissionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List form submissions for a given form ID within a specific site.

Use the [List Form Submissions by Site endpoint](/data/reference/forms/form-submissions/list-submissions-by-site) to list form submissions for a given site with the ability to filter by a `formElementId`.

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.forms.listSubmissions("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741", {
    offset: 1,
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**form_id:** `string` — Unique identifier for a Form
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.FormsListSubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.forms.<a href="/src/api/resources/sites/resources/forms/client/Client.ts">getSubmission</a>(site_id, form_submission_id) -> Webflow.FormSubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a form submission within a specific site.

Required scope | `forms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.forms.getSubmission("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**form_submission_id:** `string` — Unique identifier for a Form Submission
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.forms.<a href="/src/api/resources/sites/resources/forms/client/Client.ts">deleteSubmission</a>(site_id, form_submission_id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a form submission within a specific site.

Required scope | `forms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.forms.deleteSubmission("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**form_submission_id:** `string` — Unique identifier for a Form Submission
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sites.forms.<a href="/src/api/resources/sites/resources/forms/client/Client.ts">updateSubmission</a>(site_id, form_submission_id, { ...params }) -> Webflow.FormSubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update hidden fields on a form submission within a specific site.

Required scope | `forms:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.forms.updateSubmission("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**site_id:** `string` — Unique identifier for a Site
    
</dd>
</dl>

<dl>
<dd>

**form_submission_id:** `string` — Unique identifier for a Form Submission
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.FormsUpdateSubmissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Workspaces AuditLogs
<details><summary><code>client.workspaces.auditLogs.<a href="/src/api/resources/workspaces/resources/auditLogs/client/Client.ts">getWorkspaceAuditLogs</a>(workspace_id_or_slug, { ...params }) -> Webflow.WorkspaceAuditLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get audit logs for a workspace.

<Warning title="Enterprise & workspace API token only">This endpoint requires an Enterprise workspace and a workspace token with the `workspace_activity:read` scope. Create a workspace token from your workspace dashboard integrations page to use this endpoint.</Warning>

Required scope | `workspace_activity:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workspaces.auditLogs.getWorkspaceAuditLogs("hitchhikers-workspace", {
    limit: 1,
    offset: 1,
    sortOrder: "asc",
    eventType: "user_access",
    from: new Date("2025-06-22T16:00:31.000Z"),
    to: new Date("2025-07-22T16:00:31.000Z")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workspace_id_or_slug:** `string` — Unique identifier or slug for a Workspace
    
</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.workspaces.AuditLogsGetWorkspaceAuditLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditLogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

