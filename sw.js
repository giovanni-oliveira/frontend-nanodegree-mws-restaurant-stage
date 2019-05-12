const cacheName = 'restaurant-v1';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/main.js',
    '/js/dbhelper.js',
    '/js/restaurant_info.js',
    '/img/'
];

self.addEventListener('install', function(event) {
    event.waitUntil(async function(){
        const cache = await caches.open(cacheName);
        await cache.addAll(urlsToCache);
    }());
});

self.addEventListener('fetch', event => {
    event.respondWith(async function() {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(event.request);

        if(cachedResponse) return cachedResponse;

        const networkResponse = await fetch(event.request);
        event.waitUntil(
            cache.put(event.request, networkResponse.clone())
        );

        return networkResponse;
    }());
});
