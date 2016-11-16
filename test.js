/* eslint-disable import/no-extraneous-dependencies */

import nock from 'nock';
import test from 'ava';

import Webflow from './dist';

test('Requires an access token', (t) => {
  t.throws(() => {
    new Webflow(); // eslint-disable-line no-new
  });
});

test('Passes the access token as an HTTP header', (t) => {
  const scope = nock('https://api.webflow.com')
    .matchHeader('Authorization', 'Bearer token')
    .get('/info')
    .reply(200, {});

  const api = new Webflow({ token: 'token' });

  return api.info().then(() => {
    scope.done();
    t.pass();
  });
});

test('Attaches rate limit information to response objects', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/info')
    .reply(200, {}, {
      'X-RateLimit-Limit': 100,
      'X-RateLimit-Remaining': 99,
    });

  const api = new Webflow({ token: 'token' });

  return api.info().then((res) => {
    scope.done();
    t.is(res._meta.rateLimit.limit, 100);
    t.is(res._meta.rateLimit.remaining, 99);
  });
});

test('Responds with a list of sites', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/sites')
    .reply(200, [
      {
        _id: '123',
      },
    ]);

  const api = new Webflow({ token: 'token' });

  return api.sites().then((sites) => {
    scope.done();
    t.is(sites.length, 1);
    t.is(sites[0]._id, '123');
  });
});

test('Responds with a single site', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/sites/123')
    .reply(200, { _id: '123' });

  const api = new Webflow({ token: 'token' });

  return api.site('123').then((site) => {
    scope.done();
    t.is(site._id, '123');
  });
});

test('Responds with a list of collections', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/sites/123/collections')
    .reply(200, [
      {
        _id: '321',
      },
    ]);

  const api = new Webflow({ token: 'token' });

  return api.collections('123').then((collections) => {
    scope.done();
    t.is(collections.length, 1);
    t.is(collections[0]._id, '321');
  });
});

test('Responds with a single collection', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/collections/321')
    .reply(200, { _id: '321' });

  const api = new Webflow({ token: 'token' });

  return api.collection('321').then((collection) => {
    scope.done();
    t.is(collection._id, '321');
  });
});

test('Responds with a list of items', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/collections/321/items')
    .reply(200, {
      items: [
        {
          _id: '456',
        },
      ],
    });

  const api = new Webflow({ token: 'token' });

  return api.items('321').then(({ items }) => {
    scope.done();
    t.is(items.length, 1);
    t.is(items[0]._id, '456');
  });
});

test('Responds with a single item', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/collections/321/items/456')
    .reply(200, {
      items: [
        {
          _id: '456',
        },
      ],
    });

  const api = new Webflow({ token: 'token' });

  return api.item('321', '456').then((item) => {
    scope.done();
    t.is(item._id, '456');
  });
});

test('Responds with a list of webhooks', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/sites/123/webhooks')
    .reply(200, [
      {
        _id: '321',
      },
    ]);

  const api = new Webflow({ token: 'token' });

  return api.webhooks('123').then((webhooks) => {
    scope.done();
    t.is(webhooks.length, 1);
    t.is(webhooks[0]._id, '321');
  });
});

test('Responds with a single webhook', (t) => {
  const scope = nock('https://api.webflow.com')
    .get('/sites/123/webhooks/321')
    .reply(200, { _id: '321' });

  const api = new Webflow({ token: 'token' });

  return api.webhook('123', '321').then((webhook) => {
    scope.done();
    t.is(webhook._id, '321');
  });
});
