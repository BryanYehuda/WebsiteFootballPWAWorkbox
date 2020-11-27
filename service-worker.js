importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
{
    console.log(`Workbox berhasil dimuat`);
    workbox.precaching.precacheAndRoute([
      { url: '/', revision: '1' },
      { url: '/manifest.json', revision: '1' },
      { url: '/nav.html', revision: '1' },
      { url: '/index.html', revision: '1' },
      { url: '/push.js', revision: '1' },
      { url: '/images/logo.png', revision: '1' },
      { url: '/images/logo384.png', revision: '1' },
      { url: '/images/logo256.png', revision: '1' },
      { url: '/images/logo192.png', revision: '1' },
      { url: '/images/logo144.png', revision: '1' },
      { url: '/images/logo128.png', revision: '1' },
      { url: '/images/logo96.png', revision: '1' },
      { url: '/images/logo72.png', revision: '1' },
	  { url: '/images/favicon.ico', revision: '1' },
	  { url: '/style/materialize.css', revision: '1' },
	  { url: '/style/materialize.min.css', revision: '1' },
	  { url: '/script/materialize.js', revision: '1' },
	  { url: '/script/materialize.min.js', revision: '1' },
      { url: '/script/jquery-2.1.1.min.js', revision: '1' },
	  { url: '/script/api.js', revision: '1' },
	  { url: '/script/idb.js', revision: '1' },
	  { url: '/script/init.js', revision: '1' },
	  { url: '/script/main.js', revision: '1' },
	  { url: '/script/nav.js', revision: '1' },
	  { url: '/script/script.js', revision: '1' },
	  { url: '/script/uint.js', revision: '1' },
	  { url: '/style/style.css', revision: '1' },
]);


workbox.routing.registerRoute
(
    /.*(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'imageFcache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ]
    })
);
  
workbox.routing.registerRoute
(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute
(
    /.*(?:googleapis|gstatic)\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
);
  
}else{
  console.log(`Workbox gagal dimuat`);
}

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'images/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

