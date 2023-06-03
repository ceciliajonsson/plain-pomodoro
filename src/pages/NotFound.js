/**
 * Renders the Not Found page of the Plain Pomodoro Application for pages that are not Found.
 * @returns {JSX.Element} The rendered Not Found component.
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import SettingsInfo from '../components/SettingsInfo'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="not-found-page">
      <SettingsInfo />

      <div className="not-found-content">
        <h1>Oops! The page you're looking for seems to have taken a break.</h1>
        <button onClick={() => navigate('/')}>Back to Plain Pomodoro</button>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound
