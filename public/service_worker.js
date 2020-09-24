const cacheName = 'v2';

const cacheAsset = [
  './index.css',
  './index.html',
  '/assest/',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"',
  // 'https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"',
  'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"',
  // 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"'
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
    )
});

// Activate Event
self.addEventListener('activate', (e) => {
  console.log('service worker Activated')
//   // Remove unwanted caches
//   e.waitUntil(
//     caches.keys()
//       .then(cacheName => {
//         return Promise.all(
//           cacheName.map(cache => {
//             if (cache !== cacheName) {
//               console.log('Service worker: Clearing old cache');
//               return caches.delete(cache);
//             }
//           })
//         )
//       })
//     )
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('service working: fetching....');
  e.respondWith(
   caches.match(e.request)
    .then((res) => {
        if (res) {
          console.log(res);
            return res;
        } else {
            return fetch(e.request);
        }
    })
  )}); 