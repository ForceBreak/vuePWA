// Init service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

if ('Notification' in window && navigator.serviceWorker) {
  Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
    if (status === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        // let counter = 0;
        // let interval = setInterval(() => {
        //   if(counter == 10) {
        //     clearInterval(interval);
        //   }
        //   console.log('интервал')
        //   counter ++;
        // }, 2000);
        console.log(registration, 'registration')
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      })
    }
  });
}
