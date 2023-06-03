/**
 * Entry point of the Plain Pomodoro application.
 * Renders the main App component and registers the service worker for offline functionality.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

// Wait for the DOM to fully load
serviceWorkerRegistration.register('/plain-pomodoro/service-worker.js')

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')

  if (rootElement) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement
    )
  } else {
    console.error('Container element with ID "root" not found.')
  }
})
