export default class ResponseWrapper {
  constructor(api) {
    this.api = api;
  }

  site(site) {
    return {
      ...site,

      collections: this.api.collections.bind(this.api, site._id),
      webhooks: this.api.webhooks.bind(this.api, site._id),
      webhook: this.api.webhook.bind(this.api, site._id),
      createWebhook: this.api.createWebhook.bind(this.api, site._id),
      removeWebhook: this.api.removeWebhook.bind(this.api, site._id),
    };
  }

  collection(collection) {
    return {
      ...collection,

      items: this.api.items.bind(this.api, collection._id),
      item: this.api.item.bind(this.api, collection._id),
      createItem: this.api.createItem.bind(this.api, collection._id),
      updateItem: this.api.updateItem.bind(this.api, collection._id),
      removeItem: this.api.removeItem.bind(this.api, collection._id),
    };
  }

  item(item, collectionID) {
    return {
      ...item,

      update: this.api.updateItem.bind(this.api, collectionID, item._id),
      remove: this.api.updateItem.bind(this.api, collectionID, item._id),
    };
  }

  webhook(webhook, siteID) {
    return {
      ...webhook,

      remove: this.api.removeWebhook.bind(this.api, siteID, webhook._id),
    };
  }
}
