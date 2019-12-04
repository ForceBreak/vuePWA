self.addEventListener('install', function(event) {
  console.log(event, 'install event')
});

// Delete cache on activate hook
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log(event);
});

self.addEventListener('push', function (event) {
  if (event && event.data) {
    console.log(event.data.json())
    event.waitUntil(self.registration.showNotification('Hello', {
      body: 'Body text',
      icon: null
    }));
  }
})