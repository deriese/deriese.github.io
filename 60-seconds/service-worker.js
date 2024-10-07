const CACHE_NAME = '60-second-meditation-cache-v1';
const urlsToCache = [
  './',             // Caches index.html
  './index.html',
  './styles.css',
  './script.js',
  './motivation.mp3', // Cache your audio files
  './concentration.mp3',
  './relaxation.mp3'
];

// Install the service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
