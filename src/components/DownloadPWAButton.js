import React, { useState, useEffect } from 'react'

const DownloadPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  const handleDownloadClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installation accepted')
        } else {
          console.log('PWA installation dismissed')
        }
        setDeferredPrompt(null)
      })
    }
  }

  return <button onClick={handleDownloadClick}>Download PWA</button>
}

export default DownloadPWAButton
