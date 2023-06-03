import React from 'react'
import PWAInstallPrompt from '../singletons/PWAInstallPrompt'

const DownloadPWAButton = () => {
  const handleDownloadClick = () => {
    console.log('download button clicked')
    const deferredPrompt = PWAInstallPrompt.getDeferredPrompt()
    if (deferredPrompt) {
      deferredPrompt.prompt()
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installation accepted')
        } else {
          console.log('PWA installation dismissed')
        }
      })
    }
  }

  return <button onClick={handleDownloadClick}>Download Plain Pomodoro</button>
}

export default DownloadPWAButton
