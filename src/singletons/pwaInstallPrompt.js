/**
 * PWAInstallPrompt is a class that handles the installation prompt for Progressive Web Apps (PWA).
 */
class PWAInstallPrompt {
  /**
   * Singleton instance of the PWAInstallPrompt class.
   */
  static instance = null
  /**
   * The deferred prompt event object.
   * @type {Event|null}
   */
  deferredPrompt = null

  /**
   * Constructs a new PWAInstallPrompt instance.
   * Registers an event listener for the 'beforeinstallprompt' event.
   * @constructor
   */
  constructor() {
    if (PWAInstallPrompt.instance) {
      return PWAInstallPrompt.instance
    }

    /**
     * Event listener for the 'beforeinstallprompt' event.
     * Prevents the default behavior and stores the event object in `deferredPrompt`.
     * @param {Event} e - The 'beforeinstallprompt' event object.
     */
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.deferredPrompt = e
    })

    PWAInstallPrompt.instance = this
  }

  /**
   * Retrieves the deferred prompt event object.
   * @returns {Event|null} The deferred prompt event object.
   */
  getDeferredPrompt() {
    return this.deferredPrompt
  }
}
/**
 * Singleton instance of the PWAInstallPrompt class.
 * @type {PWAInstallPrompt}
 */
const pwaInstallPrompt = new PWAInstallPrompt()
export default pwaInstallPrompt
