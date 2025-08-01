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

**requestOptions:** `Token.RequestOptions`

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

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>

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

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">create</a>(workspaceId, { ...params }) -> Webflow.Site</code></summary>
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
    name: "The Hitchhiker's Guide to the Galaxy",
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

**workspaceId:** `string` — Unique identifier for a Workspace

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.SitesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

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

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">get</a>(siteId) -> Webflow.Site</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">delete</a>(siteId) -> void</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">update</a>(siteId, { ...params }) -> Webflow.Site</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.SitesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">getCustomDomain</a>(siteId) -> Webflow.Domains</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">publish</a>(siteId, { ...params }) -> Webflow.SitesPublishResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publishes a site to one or more more domains.

To publish to a specific custom domain, use the domain IDs from the [Get Custom Domains](/data/reference/sites/get-custom-domain) endpoint.

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
    publishToWebflowSubdomain: false,
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.SitesPublishRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Collections

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">list</a>(siteId) -> Webflow.CollectionList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">create</a>(siteId, { ...params }) -> Webflow.Collection</code></summary>
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
    fields: [
        {
            isRequired: true,
            type: "PlainText",
            displayName: "Title",
            helpText: "The title of the blog post",
        },
        {
            isRequired: true,
            type: "RichText",
            displayName: "Content",
            helpText: "The content of the blog post",
        },
        {
            isRequired: true,
            type: "Reference",
            displayName: "Author",
            helpText: "The author of the blog post",
            metadata: {
                collectionId: "23cc2d952d4e4631ffd4345d2743db4e",
            },
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CollectionsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">get</a>(collectionId) -> Webflow.Collection</code></summary>
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">delete</a>(collectionId) -> void</code></summary>
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Pages

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.PageList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Pages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">getMetadata</a>(pageId, { ...params }) -> Webflow.Page</code></summary>
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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PagesGetMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Pages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">updatePageSettings</a>(pageId, { ...params }) -> Webflow.Page</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Page-level metadata, including SEO and Open Graph fields.

<Note>
  Note: When updating Page Metadata in secondary locales, you may only add `slug` to the request if your Site has the [Advanced or Enterprise Localization](https://webflow.com/localization) add-on.
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
await client.pages.updatePageSettings("63c720f9347c2139b248e552", {
    localeId: "65427cf400e02b306eaa04a0",
    title: "Guide to the Galaxy",
    slug: "guide-to-the-galaxy",
    seo: {
        title: "The Ultimate Hitchhiker's Guide to the Galaxy",
        description:
            "Everything you need to know about the galaxy, from avoiding Vogon poetry to the importance of towels.",
    },
    openGraph: {
        title: "Explore the Cosmos with The Ultimate Guide",
        titleCopied: false,
        description: "Dive deep into the mysteries of the universe with your guide to everything galactic.",
        descriptionCopied: false,
    },
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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PageMetadataWrite`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Pages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">getContent</a>(pageId, { ...params }) -> Webflow.Dom</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get content from a static page. This includes text nodes, image nodes, select nodes, text input nodes, submit button nodes, and component instances with [property overrides](https://help.webflow.com/hc/en-us/articles/33961219350547-Component-properties#how-to-modify-property-values-on-component-instances).

To retrieve the static content of a component instance, use the [Get Component Content](/data/reference/pages-and-components/components/get-content) endpoint.

<Note>If you do not include a `localeId` in your request, the response will return any content that can be localized from the Primary locale.</Note>

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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PagesGetContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Pages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pages.<a href="/src/api/resources/pages/client/Client.ts">updateStaticContent</a>(pageId, { ...params }) -> Webflow.UpdateStaticContentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint updates content on a static page in **secondary locales**. It supports updating up to 1000 nodes in a single request.

Before making updates:

1. Use the [get page content](/data/reference/pages-and-components/pages/get-content) endpoint to identify available content nodes and their types
2. If the page has component instances, retrieve the component's properties that you'll override using the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint

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
    nodes: [
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
            text: "<h1>The Hitchhiker's Guide to the Galaxy</h1>",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
            text: "<div><h3>Don't Panic!</h3><p>Always know where your towel is.</p></div>",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad635",
            choices: [
                {
                    value: "choice-1",
                    text: "First choice",
                },
                {
                    value: "choice-2",
                    text: "Second choice",
                },
            ],
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad642",
            placeholder: "Enter something here...",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad671",
            value: "Submit",
            waitingText: "Submitting...",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad629",
            propertyOverrides: [
                {
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f0",
                    text: "<div><h1>Time is an <em>illusion</em></h1></div>",
                },
                {
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f1",
                    text: "Life, the Universe and Everything",
                },
            ],
        },
    ],
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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.PageDomWrite`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Pages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Components

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.ComponentList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Components.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">getContent</a>(siteId, componentId, { ...params }) -> Webflow.ComponentDom</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**componentId:** `string` — Unique identifier for a Component

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentsGetContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Components.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">updateContent</a>(siteId, componentId, { ...params }) -> Webflow.ComponentsUpdateContentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint updates content within a component defintion for **secondary locales**. It supports updating up to 1000 nodes in a single request.

Before making updates:

1. Use the [get component content](/data/reference/pages-and-components/components/get-content) endpoint to identify available content nodes and their types
2. If your component definition has a component instance nested within it, retrieve the nested component instance's properties that you'll override using the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint

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
    nodes: [
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
            text: "<h1>The Hitchhiker's Guide to the Galaxy</h1>",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
            text: "<div><h3>Don't Panic!</h3><p>Always know where your towel is.</p></div>",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad635",
            choices: [
                {
                    value: "choice-1",
                    text: "First choice",
                },
                {
                    value: "choice-2",
                    text: "Second choice",
                },
            ],
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad642",
            placeholder: "Enter something here...",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad671",
            value: "Submit",
            waitingText: "Submitting...",
        },
        {
            nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad629",
            propertyOverrides: [
                {
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f0",
                    text: "<div><h1>Time is an <em>illusion</em></h1></div>",
                },
                {
                    propertyId: "7dd14c08-2e96-8d3d-2b19-b5c03642a0f1",
                    text: "Life, the Universe and Everything",
                },
            ],
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**componentId:** `string` — Unique identifier for a Component

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentDomWrite`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Components.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">getProperties</a>(siteId, componentId, { ...params }) -> Webflow.ComponentProperties</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**componentId:** `string` — Unique identifier for a Component

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentsGetPropertiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Components.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.components.<a href="/src/api/resources/components/client/Client.ts">updateProperties</a>(siteId, componentId, { ...params }) -> Webflow.ComponentsUpdatePropertiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the default property values of a component definition in a specificed locale.

Before making updates, use the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint to identify properties that can be updated in a secondary locale.

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
    properties: [
        {
            propertyId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
            text: "The Hitchhiker\u2019s Guide to the Galaxy",
        },
        {
            propertyId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
            text: "<div><h3>Dont Panic!</h3><p>Always know where your towel is.</p></div>",
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**componentId:** `string` — Unique identifier for a Component

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ComponentPropertiesWrite`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Components.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Scripts

<details><summary><code>client.scripts.<a href="/src/api/resources/scripts/client/Client.ts">list</a>(siteId) -> Webflow.RegisteredScriptList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scripts.<a href="/src/api/resources/scripts/client/Client.ts">registerHosted</a>(siteId, { ...params }) -> Webflow.CustomCodeHostedResponse</code></summary>
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
    displayName: "displayName",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomCodeHostedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scripts.<a href="/src/api/resources/scripts/client/Client.ts">registerInline</a>(siteId, { ...params }) -> Webflow.CustomCodeInlineResponse</code></summary>
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
    displayName: "Alert",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.CustomCodeInlineRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Assets

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">list</a>(siteId) -> Webflow.Assets</code></summary>
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
await client.assets.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">create</a>(siteId, { ...params }) -> Webflow.AssetUpload</code></summary>
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
    fileHash: "3c7d87c9575702bc3b1e991f4d3c638e",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">get</a>(assetId) -> Webflow.Asset</code></summary>
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
await client.assets.get("580e63fc8c9a982ac9b8b745");
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

**assetId:** `string` — Unique identifier for an Asset on a site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">delete</a>(assetId) -> void</code></summary>
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

**assetId:** `string` — Unique identifier for an Asset on a site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">update</a>(assetId, { ...params }) -> Webflow.Asset</code></summary>
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
await client.assets.update("580e63fc8c9a982ac9b8b745");
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

**assetId:** `string` — Unique identifier for an Asset on a site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">listFolders</a>(siteId) -> Webflow.AssetFolderList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">createFolder</a>(siteId, { ...params }) -> Webflow.AssetFolder</code></summary>
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
    displayName: "my asset folder",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AssetsCreateFolderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">getFolder</a>(assetFolderId) -> Webflow.AssetFolder</code></summary>
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

**assetFolderId:** `string` — Unique identifier for an Asset Folder

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">list</a>(siteId) -> Webflow.WebhookList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>(siteId, { ...params }) -> Webflow.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Webhook.

Limit of 75 registrations per `triggerType`, per site.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>
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
    createdOn: new Date("2022-11-08T23:59:28.000Z"),
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Webhook`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">get</a>(webhookId) -> Webflow.Webhook</code></summary>
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

**webhookId:** `string` — Unique identifier for a Webhook

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>(webhookId) -> void</code></summary>
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

**webhookId:** `string` — Unique identifier for a Webhook

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Forms

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.FormList</code></summary>
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
await client.forms.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">get</a>(formId) -> Webflow.Form</code></summary>
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

**formId:** `string` — Unique identifier for a Form

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">listSubmissions</a>(formId, { ...params }) -> Webflow.FormSubmissionList</code></summary>
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
await client.forms.listSubmissions("580e63e98c9a982ac9b8b741");
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

**formId:** `string` — Unique identifier for a Form

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsListSubmissionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">getSubmission</a>(formSubmissionId) -> Webflow.FormSubmission</code></summary>
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

**formSubmissionId:** `string` — Unique identifier for a Form Submission

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">deleteSubmission</a>(formSubmissionId) -> void</code></summary>
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

**formSubmissionId:** `string` — Unique identifier for a Form Submission

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">updateSubmission</a>(formSubmissionId, { ...params }) -> Webflow.FormSubmission</code></summary>
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

**formSubmissionId:** `string` — Unique identifier for a Form Submission

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsUpdateSubmissionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forms.<a href="/src/api/resources/forms/client/Client.ts">listSubmissionsBySite</a>(siteId, { ...params }) -> Webflow.FormSubmissionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List form submissions for a given site. This endpoint differs from the existing [List Form Submissions endpoint](/data/reference/forms/form-submissions/list-submissions) by accepting `siteId` as a path parameter and `elementId` as a query parameter. You can get the `elementId` from the [List forms endpoint](/data/reference/forms/forms/list).

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
await client.forms.listSubmissionsBySite("580e63e98c9a982ac9b8b741", {
    elementId: "18259716-3e5a-646a-5f41-5dc4b9405aa0",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FormsListSubmissionsBySiteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.UserList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of users for a site

Required scope | `users:read`

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
await client.users.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.UsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(siteId, userId) -> Webflow.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a User by ID

Required scope | `users:read`

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
await client.users.get("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**userId:** `string` — Unique identifier for a User

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(siteId, userId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a User by ID

Required scope | `users:write`

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
await client.users.delete("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**userId:** `string` — Unique identifier for a User

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>(siteId, userId, { ...params }) -> Webflow.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a User by ID

Required scope | `users:write`

<Note class="notice">The <code>email</code> and <code>password</code>
fields cannot be updated using this endpoint</Note>

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
await client.users.update("580e63e98c9a982ac9b8b741", "580e63e98c9a982ac9b8b741", {
    id: "6287ec36a841b25637c663df",
    isEmailVerified: true,
    lastUpdated: new Date("2022-05-20T13:46:12.000Z"),
    invitedOn: new Date("2022-05-20T13:46:12.000Z"),
    createdOn: new Date("2022-05-20T13:46:12.000Z"),
    lastLogin: new Date("2022-05-20T13:46:12.000Z"),
    status: "verified",
    accessGroups: [
        {
            slug: "webflowers",
            type: "admin",
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**userId:** `string` — Unique identifier for a User

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.User`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">invite</a>(siteId, { ...params }) -> Webflow.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create and invite a user with an email address.

The user will be sent and invite via email, which they will need to accept in order to join paid any paid access group.

Required scope | `users:write`

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
await client.users.invite("580e63e98c9a982ac9b8b741", {
    email: "some.one@home.com",
    accessGroups: ["accessGroups"],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.UsersInviteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AccessGroups

<details><summary><code>client.accessGroups.<a href="/src/api/resources/accessGroups/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.AccessGroupList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of access groups for a site

Required scope | `users:read`

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
await client.accessGroups.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.AccessGroupsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccessGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Products

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.ProductAndSkUsList</code></summary>
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
await client.products.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">create</a>(siteId, { ...params }) -> Webflow.ProductAndSkUs</code></summary>
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
            skuProperties: [
                {
                    id: "color",
                    name: "Color",
                    enum: [
                        {
                            id: "red",
                            name: "Red",
                            slug: "red",
                        },
                        {
                            id: "yellow",
                            name: "Yellow",
                            slug: "yellow",
                        },
                        {
                            id: "blue",
                            name: "Blue",
                            slug: "blue",
                        },
                    ],
                },
                {
                    id: "size",
                    name: "Size",
                    enum: [
                        {
                            id: "small",
                            name: "Small",
                            slug: "small",
                        },
                        {
                            id: "medium",
                            name: "Medium",
                            slug: "medium",
                        },
                        {
                            id: "large",
                            name: "Large",
                            slug: "large",
                        },
                    ],
                },
            ],
        },
    },
    sku: {
        fieldData: {
            name: "Colorful T-shirt - Red Small",
            slug: "colorful-t-shirt-red-small",
            price: {
                value: 2499,
                unit: "USD",
                currency: "USD",
            },
            mainImage:
                "https://rocketamp-sample-store.myshopify.com/cdn/shop/products/Gildan_2000_Antique_Cherry_Red_Front_1024x1024.jpg?v=1527232987",
        },
    },
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductSkuCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">get</a>(siteId, productId) -> Webflow.ProductAndSkUs</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**productId:** `string` — Unique identifier for a Product

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">update</a>(siteId, productId, { ...params }) -> Webflow.Product</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**productId:** `string` — Unique identifier for a Product

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductSkuUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">createSku</a>(siteId, productId, { ...params }) -> Webflow.ProductsCreateSkuResponse</code></summary>
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
    skus: [
        {
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
                    currency: "USD",
                },
            },
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**productId:** `string` — Unique identifier for a Product

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductsCreateSkuRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">updateSku</a>(siteId, productId, skuId, { ...params }) -> Webflow.Sku</code></summary>
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
                currency: "USD",
            },
        },
    },
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**productId:** `string` — Unique identifier for a Product

</dd>
</dl>

<dl>
<dd>

**skuId:** `string` — Unique identifier for a SKU

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ProductsUpdateSkuRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Orders

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.OrderList</code></summary>
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
await client.orders.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">get</a>(siteId, orderId) -> Webflow.Order</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**orderId:** `string` — Unique identifier for an Order

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">update</a>(siteId, orderId, { ...params }) -> Webflow.Order</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**orderId:** `string` — Unique identifier for an Order

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">updateFulfill</a>(siteId, orderId, { ...params }) -> Webflow.Order</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**orderId:** `string` — Unique identifier for an Order

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersUpdateFulfillRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">updateUnfulfill</a>(siteId, orderId) -> Webflow.Order</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**orderId:** `string` — Unique identifier for an Order

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">refund</a>(siteId, orderId, { ...params }) -> Webflow.Order</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**orderId:** `string` — Unique identifier for an Order

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.OrdersRefundRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Inventory

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">list</a>(collectionId, itemId) -> Webflow.InventoryItem</code></summary>
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
await client.inventory.list("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">update</a>(collectionId, itemId, { ...params }) -> Webflow.InventoryItem</code></summary>
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
await client.inventory.update("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    inventoryType: "infinite",
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.InventoryUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ecommerce

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getSettings</a>(siteId) -> Webflow.EcommerceSettings</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ecommerce.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Collections Fields

<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">create</a>(collectionId, { ...params }) -> Webflow.FieldCreate</code></summary>
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
    helpText: "Add the body of your post here",
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.FieldCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">delete</a>(collectionId, fieldId) -> void</code></summary>
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**fieldId:** `string` — Unique identifier for a Field in a collection

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">update</a>(collectionId, fieldId, { ...params }) -> Webflow.Field</code></summary>
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
    helpText: "Add the body of your post here",
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**fieldId:** `string` — Unique identifier for a Field in a collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.FieldUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Collections Items

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">listItems</a>(collectionId, { ...params }) -> Webflow.CollectionItemList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of all Items within a Collection.

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
await client.collections.items.listItems("580e63fc8c9a982ac9b8b745");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsListItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">createItem</a>(collectionId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create Item(s) in a Collection.

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
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "Pan Galactic Gargle Blaster Recipe",
            slug: "pan-galactic-gargle-blaster",
        },
    },
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsCreateItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItems</a>(collectionId, { ...params }) -> void</code></summary>
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
    items: [
        {
            id: "580e64008c9a982ac9b8b754",
        },
    ],
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItems</a>(collectionId, { ...params }) -> Webflow.ItemsUpdateItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a single item or multiple items in a Collection.

The limit for this endpoint is 100 items.

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
await client.collections.items.updateItems("580e63fc8c9a982ac9b8b745", {
    items: [
        {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
            },
        },
        {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
            },
        },
        {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
            },
        },
        {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
            },
        },
    ],
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">listItemsLive</a>(collectionId, { ...params }) -> Webflow.CollectionItemList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all published items in a collection.

<Note title="Serve data with the Content Delivery API">
  To serve content to your other frontends applications, enterprise sites have access to a dedicated [content delivery API](/data/docs/cms-content-delivery), available at api-cdn.webflow.com.

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
await client.collections.items.listItemsLive("580e63fc8c9a982ac9b8b745");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsListItemsLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">createItemLive</a>(collectionId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create item(s) in a collection that will be immediately published to the live site.

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
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "Pan Galactic Gargle Blaster Recipe",
            slug: "pan-galactic-gargle-blaster",
        },
    },
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsCreateItemLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItemsLive</a>(collectionId, { ...params }) -> void</code></summary>
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
    items: [
        {
            id: "580e64008c9a982ac9b8b754",
        },
    ],
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemsLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItemsLive</a>(collectionId, { ...params }) -> Webflow.CollectionItemListNoPagination</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

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
    items: [
        {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
            },
        },
        {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
            },
        },
        {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
            },
        },
        {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
            },
        },
    ],
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemsLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">createItems</a>(collectionId, { ...params }) -> Webflow.BulkCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

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
    cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Don\u2019t Panic",
        slug: "dont-panic",
    },
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.CreateBulkCollectionItemRequestBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">getItem</a>(collectionId, itemId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

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
await client.collections.items.getItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsGetItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItem</a>(collectionId, itemId, { ...params }) -> void</code></summary>
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
await client.collections.items.deleteItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItem</a>(collectionId, itemId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a selected Item in a Collection.

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
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "Pan Galactic Gargle Blaster Recipe",
            slug: "pan-galactic-gargle-blaster",
        },
    },
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">getItemLive</a>(collectionId, itemId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a selected Collection live Item.

<Note title="Serve data with the Content Delivery API">
  To serve content to your other frontends applications, enterprise sites have access to a dedicated [content delivery API](/data/docs/cms-content-delivery), available at api-cdn.webflow.com.

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
await client.collections.items.getItemLive("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsGetItemLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">deleteItemLive</a>(collectionId, itemId, { ...params }) -> void</code></summary>
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
await client.collections.items.deleteItemLive("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754");
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsDeleteItemLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItemLive</a>(collectionId, itemId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

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
    body: {
        isArchived: false,
        isDraft: false,
        fieldData: {
            name: "Pan Galactic Gargle Blaster Recipe",
            slug: "pan-galactic-gargle-blaster",
        },
    },
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**itemId:** `string` — Unique identifier for an Item

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.collections.ItemsUpdateItemLiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">publishItem</a>(collectionId, { ...params }) -> Webflow.ItemsPublishItemResponse</code></summary>
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
    itemIds: ["643fd856d66b6528195ee2ca", "643fd856d66b6528195ee2cb", "643fd856d66b6528195ee2cc"],
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

**collectionId:** `string` — Unique identifier for a Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ItemsPublishItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Pages Scripts

<details><summary><code>client.pages.scripts.<a href="/src/api/resources/pages/resources/scripts/client/Client.ts">getCustomCode</a>(pageId) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all scripts applied to a page.

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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pages.scripts.<a href="/src/api/resources/pages/resources/scripts/client/Client.ts">upsertCustomCode</a>(pageId, { ...params }) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply scripts to a page.

<Note title="Script Registration">
  To apply a script to a page, the script must first be registered to a Site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

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
    scripts: [
        {
            id: "cms_slider",
            location: "header",
            version: "1.0.0",
            attributes: {
                "my-attribute": "some-value",
            },
        },
        {
            id: "alert",
            location: "header",
            version: "0.0.1",
        },
    ],
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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ScriptApplyList`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pages.scripts.<a href="/src/api/resources/pages/resources/scripts/client/Client.ts">deleteCustomCode</a>(pageId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a custom code block that the App created on a page.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>

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

**pageId:** `string` — Unique identifier for a Page

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites Redirects

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">list</a>(siteId) -> Webflow.Redirects</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redirects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">create</a>(siteId, { ...params }) -> Webflow.Redirect</code></summary>
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
    toUrl: "/earth",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Redirect`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redirects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">delete</a>(siteId, redirectId) -> Webflow.Redirects</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**redirectId:** `string` — Unique identifier site rediect

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redirects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.redirects.<a href="/src/api/resources/sites/resources/redirects/client/Client.ts">update</a>(siteId, redirectId, { ...params }) -> Webflow.Redirect</code></summary>
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
    toUrl: "/earth",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**redirectId:** `string` — Unique identifier site rediect

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Redirect`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redirects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites Plans

<details><summary><code>client.sites.plans.<a href="/src/api/resources/sites/resources/plans/client/Client.ts">getSitePlan</a>(siteId) -> Webflow.SitePlan</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plans.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites RobotsTxt

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">get</a>(siteId) -> Webflow.Robots</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">put</a>(siteId, { ...params }) -> Webflow.Robots</code></summary>
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
    rules: [
        {
            userAgent: "googlebot",
            allows: ["/public"],
            disallows: ["/vogon-poetry", "/total-perspective-vortex"],
        },
    ],
    sitemap: "https://heartofgold.ship/sitemap.xml",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Robots`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">delete</a>(siteId, { ...params }) -> Webflow.Robots</code></summary>
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
    rules: [
        {
            userAgent: "*",
            allows: ["/public"],
            disallows: ["/bubbles"],
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Robots`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.robotsTxt.<a href="/src/api/resources/sites/resources/robotsTxt/client/Client.ts">patch</a>(siteId, { ...params }) -> Webflow.Robots</code></summary>
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
    rules: [
        {
            userAgent: "googlebot",
            allows: ["/public"],
            disallows: ["/vogon-poetry", "/total-perspective-vortex"],
        },
    ],
    sitemap: "https://heartofgold.ship/sitemap.xml",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.Robots`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RobotsTxt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites WellKnown

<details><summary><code>client.sites.wellKnown.<a href="/src/api/resources/sites/resources/wellKnown/client/Client.ts">put</a>(siteId, { ...params }) -> void</code></summary>
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
    fileName: "fileName",
    fileData: "fileData",
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.WellKnownFile`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WellKnown.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.wellKnown.<a href="/src/api/resources/sites/resources/wellKnown/client/Client.ts">delete</a>(siteId, { ...params }) -> void</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.WellKnownDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WellKnown.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites ActivityLogs

<details><summary><code>client.sites.activityLogs.<a href="/src/api/resources/sites/resources/activityLogs/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.SiteActivityLogResponse</code></summary>
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
await client.sites.activityLogs.list("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.ActivityLogsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActivityLogs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites Comments

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">listCommentThreads</a>(siteId, { ...params }) -> Webflow.CommentThreadList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CommentsListCommentThreadsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">getCommentThread</a>(siteId, commentThreadId, { ...params }) -> Webflow.CommentThread</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**commentThreadId:** `string` — Unique identifier for a Comment Thread

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CommentsGetCommentThreadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.comments.<a href="/src/api/resources/sites/resources/comments/client/Client.ts">listCommentReplies</a>(siteId, commentThreadId, { ...params }) -> Webflow.CommentReplyList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**commentThreadId:** `string` — Unique identifier for a Comment Thread

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.CommentsListCommentRepliesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites Scripts

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">getCustomCode</a>(siteId) -> Webflow.ScriptApplyList</code></summary>
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">upsertCustomCode</a>(siteId, { ...params }) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply registered scripts to a site.

<Note title="Script Registration">
  To apply a script to a site or page, the script must first be registered to a site via the [Register Script](/data/reference/custom-code/custom-code/register-hosted) endpoints. Once registered, the script can be applied to a Site or Page using the appropriate endpoints. See the documentation on [working with Custom Code](/data/docs/custom-code) for more information.
</Note>

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
    scripts: [
        {
            id: "cms_slider",
            location: "header",
            version: "1.0.0",
            attributes: {
                "my-attribute": "some-value",
            },
        },
        {
            id: "alert",
            location: "header",
            version: "0.0.1",
        },
    ],
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.ScriptApplyList`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">deleteCustomCode</a>(siteId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove scripts from a site applied by the App. This endpoint will not remove scripts from the site's registered scripts.

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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">listCustomCodeBlocks</a>(siteId, { ...params }) -> Webflow.ListCustomCodeBlocks</code></summary>
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
await client.sites.scripts.listCustomCodeBlocks("580e63e98c9a982ac9b8b741");
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

**siteId:** `string` — Unique identifier for a Site

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.sites.ScriptsListCustomCodeBlocksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Scripts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Workspaces AuditLogs

<details><summary><code>client.workspaces.auditLogs.<a href="/src/api/resources/workspaces/resources/auditLogs/client/Client.ts">getWorkspaceAuditLogs</a>(workspaceIdOrSlug, { ...params }) -> Webflow.WorkspaceAuditLogResponse</code></summary>
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
    from: new Date("2024-04-22T16:00:31.000Z"),
    to: new Date("2024-04-22T16:00:31.000Z"),
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

**workspaceIdOrSlug:** `string` — Unique identifier or slug for a Workspace

</dd>
</dl>

<dl>
<dd>

**request:** `Webflow.workspaces.AuditLogsGetWorkspaceAuditLogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditLogs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
