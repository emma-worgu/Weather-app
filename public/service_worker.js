const cacheName = 'v2';

const cacheAsset = [
  './index.css',
  './index.html',
  '../asset'
]



// Install Event
self.addEventListener('install', (e) => {
  console.log('service worker Installed')

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service worker: Caching files');
        cache.addAll(cacheAsset);
      })
      .then(() => self.skipWaiting())
  )
});

// Activate Event
self.addEventListener('activate', (e) => {
  console.log('service worker Activated')
  // Remove unwanted caches
  e.waitUntil(
    caches.keys()
      .then(cacheName => {
        return Promise.all(
          cacheName.map(cache => {
            if (cache !== cacheName) {
              console.log('Service worker: Clearing old cache');
              return caches.delete(cache);
            }
          })
        )
      })
    )
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('service working: fetching....');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});