 if (!('serviceWorker' in navigator)) {
      console.log("Service worker tidak didukung browser ini.");
    } else {
      registerServiceWorker();
      requestPermission();
    }

 function registerServiceWorker() {
      return navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
          console.log('Registrasi service worker berhasil.');
          return registration;
        })
        .catch(function (err) {
          console.error('Registrasi service worker gagal.', err);
        });
    }
    
    function requestPermission(){
      if('Notification' in window) {
        Notification.requestPermission().then(result => {
          if(result === 'denied'){
            console.log("Fitur notifikasi tidak diijinkan.");
            return;
          } else if (result === 'default'){
            console.error("Pengguna menutup kotak dialog permintaan ijin.");
            return;
          }
          console.log('Notification granted');
          
          if(('PushManager' in window)) {
            console.log('PushManager exist!');
            
            navigator.serviceWorker.getRegistration().then(reg => {
            
              reg.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: "BGuFovLk-PEOCnx1Q1PKhwZc86aaVSIhopcSfr_ycvc6irGqAv-31EIofflb2yz6gpZaTWxVNoZtKDfvninu8Xc"
              }).then(sub => {
                console.log('Berhasil melakukan subscribe dengan endpoint:' + sub.endpoint);
                console.log("p256dh: " + btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('p256dh')))));
                console.log("auth: " + btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('auth')))));
              }).catch(e => {
                console.log('Error: ', e)
              })
            })
          }
        })
      }
    }