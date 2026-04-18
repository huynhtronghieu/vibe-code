// Service Worker - Auto-updating PWA
// Change this version string whenever you deploy new code.
// The SW will detect the change and prompt users to update.
var CACHE_VERSION = 'v1';
var CACHE_NAME = 'feeding-tracker-' + CACHE_VERSION;
var BASE_PATH = '/fetch-baby/';

var ASSETS = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  'https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js'
];

// Install: cache all assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: delete old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key.startsWith('feeding-tracker-') && key !== CACHE_NAME;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: network-first for HTML (always get latest), cache-first for CDN assets
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // For navigation requests and our own files: network-first
  if (event.request.mode === 'navigate' ||
      url.pathname.startsWith(BASE_PATH)) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        // Update cache with fresh response
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(function() {
        // Offline: serve from cache
        return caches.match(event.request);
      })
    );
    return;
  }

  // For CDN assets: cache-first
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      });
    })
  );
});

// Listen for skip waiting message from the page
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
