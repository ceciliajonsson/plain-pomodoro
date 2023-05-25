// pwaInstallPrompt.js
class PWAInstallPrompt {
  static instance = null
  deferredPrompt = null

  constructor() {
    if (PWAInstallPrompt.instance) {
      return PWAInstallPrompt.instance
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.deferredPrompt = e
    })

    PWAInstallPrompt.instance = this
  }

  getDeferredPrompt() {
    return this.deferredPrompt
  }
}

const pwaInstallPrompt = new PWAInstallPrompt()
export default pwaInstallPrompt
