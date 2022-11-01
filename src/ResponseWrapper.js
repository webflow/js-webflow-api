export default class ResponseWrapper {
  constructor(api) {
    this.api = api;
  }

  site(site) {
    return {
      ...site,

      collections: this.api.collections.bind(this.api, { siteId: site._id }),
      webhooks: this.api.webhooks.bind(this.api, { siteId: site._id }),
      domains: this.api.domains.bind(this.api, { siteId: site._id }),
      webhook: (first, ...rest) => {
        return this.api.webhook({ ...first, siteId: site._id }, ...rest);
      },
      createWebhook: (first, ...rest) => {
        return this.api.createWebhook({ ...first, siteId: site._id }, ...rest);
      },
      removeWebhook: (first, ...rest) => {
        return this.api.removeWebhook({ ...first, siteId: site._id }, ...rest);
      },
      publishSite: (domains) => {
        return this.api.publishSite({ siteId: site._id, domains });
      },
    };
  }

  domain(domain) {
    return {
      ...domain,
    };
  }

  collection(collection) {
    return {
      ...collection,

      items: this.api.items.bind(this.api, { collectionId: collection._id }),
      item: (first, ...rest) => {
        return this.api.item(
          { ...first, collectionId: collection._id },
          ...rest
        );
      },
      createItem: (first, ...rest) => {
        return this.api.createItem(
          { ...first, collectionId: collection._id },
          ...rest
        );
      },
      updateItem: (first, ...rest) => {
        return this.api.updateItem(
          { ...first, collectionId: collection._id },
          ...rest
        );
      },
      removeItem: (first, ...rest) => {
        return this.api.removeItem(
          { ...first, collectionId: collection._id },
          ...rest
        );
      },
    };
  }

  item(item, collectionId) {
    const itemId = item._id;
    const ids = { itemId, collectionId };
    return {
      ...item,

      update: (itemData, query) => {
        return this.api.updateItem({ ...itemData, ...ids }, query);
      },
      remove: (query) => {
        return this.api.removeItem(ids, query);
      },
    };
  }

  user(user, siteId) {
    const userId = user._id;
    const ids = { userId, siteId };

    return {
      ...user,
      update: (userData) => {
        return this.api.updateUser({ ...ids, ...userData });
      },
      remove: this.api.removeUser.bind(this.api, ids),
    };
  }

  webhook(webhook, siteId) {
    const webhookId = webhook._id;
    const ids = { webhookId, siteId };

    return {
      ...webhook,
      remove: this.api.removeWebhook.bind(this.api, ids),
    };
  }
}
