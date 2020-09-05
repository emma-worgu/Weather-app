// Check if service worker is supported
if(navigator.serviceWorker) {
  console.log('service worker supported');
  window.addEventListener('load', () => {
    // Register the service worker
    console.log('Registering the service worker(1).....');
    navigator.serviceWorker
      .register('./service_worker.js', () => {
        console.log('Registering the service(2)......')
      })
        .then((reg) => {
        console.log('Service Worker Registered')
        })
        .catch((err) => {
        console.log(`Error occurred ${err}`);
        });
      });
};