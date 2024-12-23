let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

const buttonInstall = document.getElementById('installButton');
buttonInstall.addEventListener('click', () => {
  hideMyInstallPromotion();
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  }
});

function showInstallPromotion() {
  document.getElementById('installPrompt').style.display = 'block';
}

function hideMyInstallPromotion() {
  document.getElementById('installPrompt').style.display = 'none';
}
