
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('wala-calendar-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
