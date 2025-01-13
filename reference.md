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

Create a site. This endpoint requires an Enterprise workspace.

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

Delete a site. This endpoint requires an Enterprise workspace.

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

Update a site. This endpoint requires an Enterprise workspace.

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

<Note title="Endpoint-specific rate limit">This endpoint has a limit of one successful publish queue per minute.</Note>

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
await client.sites.publish("580e63e98c9a982ac9b8b741");
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

Create a Collection for a site.

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
    body: {
        id: "6596da6045e56dee495bcbba",
        siteId: "6258612d1ee792848f805dcf",
        title: "Guide to the Galaxy",
        slug: "guide-to-the-galaxy",
        createdOn: "2024-03-11T10:42:00Z",
        lastUpdated: "2024-03-11T10:42:42Z",
        archived: false,
        draft: false,
        canBranch: true,
        isBranch: false,
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
        localeId: "653fd9af6a07fc9cfd7a5e57",
        publishedPath: "/en-us/guide-to-the-galaxy",
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

**request:** `Webflow.UpdatePageSettingsRequest`

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

Get static content from a static page. This includes text nodes, image nodes and component instances.
To retrieve the contents of components in the page use the [get component content](/data/reference/pages-and-components/components/get-content) endpoint.

<Note>If you do not provide a Locale ID in your request, the response will return any content that can be localized from the Primary locale.</Note>

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
await client.components.list("580e63e98c9a982ac9b8b741");
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

Get static content from a component definition. This includes text nodes, image nodes and nested component instances.
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

Get the property default values of a component definition.

<Note>If you do not provide a Locale ID in your request, the response will return any properties that can be localized from the Primary locale.</Note>

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

Update the property default values of a component definition in a specificed locale.

Before making updates:

1. Use the [get component properties](/data/reference/pages-and-components/components/get-properties) endpoint to identify available properties

<Note>The request requires a secondary locale ID. If a locale is missing, the request will not be processed and will result in an error.</Note>

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

List of scripts registered to a Site.

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.
Additionally, Scripts can be remotely hosted, or registered as inline snippets.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>

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

Add a script to a Site's Custom Code registry.

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.
Additionally, Scripts can be remotely hosted, or registered as inline snippets.

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

Add a script to a Site's Custom Code registry. Inline scripts can be between 1 and 2000 characters.

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.

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

List assets for a given site

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

Create a new asset entry.

This endpoint generates a response with the following information: `uploadUrl` and `uploadDetails`.
You can use these two properties to [upload the file to Amazon s3 by making a POST](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html)
request to the `uploadUrl` with the `uploadDetails` object as your header information in the request.

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

Get an Asset

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

Update an Asset

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
    lastTriggered: "2023-02-08T23:59:28Z",
    createdOn: "2022-11-08T23:59:28Z",
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
    data: {
        name: "Some One",
        acceptPrivacy: false,
        acceptCommunications: false,
    },
    accessGroups: ["webflowers", "platinum", "free-tier"],
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

**request:** `Webflow.UsersUpdateRequest`

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
    accessGroups: ["webflowers"],
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

Create a new product and SKU.

When you create a product, you will always create a SKU, since a Product Item must have, at minimum, a single SKU.

To create a Product with multiple SKUs - for example a T-shirt in sizes small, medium and large:

-   Create parameters in `sku-properties`, also known as [product options and variants.](https://help.webflow.com/hc/en-us/articles/33961334531347-Create-product-options-and-variants).
-   A single `sku-property` would be `color`. Within the `color` property, list the various colors of T-shirts as an array of `enum` values: `royal-blue`, `crimson-red`, and `forrest-green`.
-   Once, you've created a Product and its `sku-properties` with `enum` values, Webflow will create a **default SKU**, which will automatically be a combination of the first `sku-properties` you've created.
-   In our example, the default SKU will be a Royal Blue T-Shirt, because our first `enum` of our Color `sku-property` is Royal Blue.
-   After you've created your product, you can create additional SKUs using the [Create SKU endpoint.](/data/reference/ecommerce/products/create-sku)

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
await client.products.create("580e63e98c9a982ac9b8b741");
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
    skus: [{}],
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
    sku: {},
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

-   Absolute updates are done by setting `quantity` directly.
-   Incremental updates are by specifying the inventory delta in `updateQuantity` which is then added to the `quantity` stored on the server.

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

<details><summary><code>client.collections.fields.<a href="/src/api/resources/collections/resources/fields/client/Client.ts">create</a>(collectionId, { ...params }) -> Webflow.Field</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a custom field in a collection.

Slugs must be all lowercase letters without spaces.
If you pass a string with uppercase letters and/or spaces to the "Slug" property, Webflow will
convert the slug to lowercase and replace spaces with "-."

Only some field types can be created through the API.
This endpoint does not currently support bulk creation.

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

**request:** `Webflow.collections.FieldCreate`

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

To create items across multiple locales, please use [this endpoint.](/v2.0.0/data/reference/cms/collection-items/staged-items/create-items)

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
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Pan Galactic Gargle Blaster Recipe",
        slug: "pan-galactic-gargle-blaster",
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

**request:** `Webflow.ItemsCreateItemRequest`

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

**Note:** If the `cmsLocaleId` parameter is undefined or empty and the items are localized, items will be deleted only in the primary locale.

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
await client.collections.items.deleteItems("580e63fc8c9a982ac9b8b745");
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

<details><summary><code>client.collections.items.<a href="/src/api/resources/collections/resources/items/client/Client.ts">updateItems</a>(collectionId, { ...params }) -> Webflow.CollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a single item or multiple items (up to 100) in a Collection.

**Note:** If the `cmsLocaleId` parameter is undefined or empty and the items are localized, items will be updated only in the primary locale.

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

List of all live Items within a Collection.

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

Create live Item(s) in a Collection. The Item(s) will be published to the live site.

To create items across multiple locales, [please use this endpoint.](/v2.0.0/data/reference/cms/collection-items/staged-items/create-items)

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
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Pan Galactic Gargle Blaster Recipe",
        slug: "pan-galactic-gargle-blaster",
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

**request:** `Webflow.ItemsCreateItemLiveRequest`

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

Remove an item or multiple items (up to 100 items) from the live site. Deleting published items will unpublish the items from the live site and set them to draft.

**Note:** If the `cmsLocaleId` parameter is undefined or empty and the items are localized, items will be unpublished only in the primary locale.

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
await client.collections.items.deleteItemsLive("580e63fc8c9a982ac9b8b745");
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

Update a single live item or multiple live items (up to 100) in a Collection

**Note:** If the `cmsLocaleId` parameter is undefined or empty and the items are localized, items will be updated only in the primary locale.

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

**Notes:**

-   This endpoint can create up to 100 items in a request.
-   If the `cmsLocaleIds` parameter is undefined or empty and localization is enabled, items will only be created in the primary locale.

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

Delete an Item from a Collection. This endpoint does not currently support bulk deletion.

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
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Pan Galactic Gargle Blaster Recipe",
        slug: "pan-galactic-gargle-blaster",
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

**request:** `Webflow.CollectionItemPatchSingle`

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

Remove a live item from the site. Removing a published item will unpublish the item from the live site and set it to draft.

This endpoint does not currently support bulk deletion.

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
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Pan Galactic Gargle Blaster Recipe",
        slug: "pan-galactic-gargle-blaster",
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

**request:** `Webflow.CollectionItemPatchSingle`

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
    itemIds: ["itemIds"],
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

**request:** `Webflow.collections.ItemsPublishItemRequest`

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

Get all registered scripts that have been applied to a specific Page.

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>

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

Add a registered script to a Page.

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.

A site can have a maximum of 800 registered scripts.

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

Delete the custom code block that an app has created for a page

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.

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

Fetch a list of all URL redirect rules configured for a specific site.

Use this endpoint to review, audit, or manage the redirection rules that control how traffic is rerouted on your site.

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

Add a new URL redirection rule to a site.

This endpoint allows you to define a source path (`fromUrl`) and its corresponding destination path (`toUrl`), which will dictate how traffic is rerouted on your site. This is useful for managing site changes, restructuring URLs, or handling outdated links.

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

Remove a URL redirection rule from a site.
This is useful for cleaning up outdated or unnecessary redirects, ensuring that your site's routing behavior remains efficient and up-to-date.
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

Update a URL redirection rule from a site.
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

## Sites ActivityLogs

<details><summary><code>client.sites.activityLogs.<a href="/src/api/resources/sites/resources/activityLogs/client/Client.ts">list</a>(siteId, { ...params }) -> Webflow.SiteActivityLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve Activity Logs for a specific Site. Requires Site to be on an Enterprise plan. </br></br> Required scope | `site_activity:read`

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

## Sites Scripts

<details><summary><code>client.sites.scripts.<a href="/src/api/resources/sites/resources/scripts/client/Client.ts">getCustomCode</a>(siteId) -> Webflow.ScriptApplyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all registered scripts that have been applied to a specific Site.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>

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

Add a registered script to a Site.

In order to use the Custom Code APIs for Sites and Pages, Custom Code Scripts must first be registered
to a Site via the `registered_scripts` endpoints, and then applied to a Site or Page using the appropriate
`custom_code` endpoints.

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

Delete the custom code block that an app created for a Site

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

Get all instances of Custom Code applied to a Site or Pages.

<Note>Access to this endpoint requires a bearer token from a [Data Client App](/data/docs/getting-started-data-clients).</Note>

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
