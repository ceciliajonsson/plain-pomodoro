/**
 * SettingsInfo component displays information about the Pomodoro settings and completed focus sessions.
 * @returns {JSX.Element} The rendered SettingsInfo component.
 */

import React, { useContext } from 'react'
import { PomodoroContext } from '../contexts/PomodoroContext'

function SettingsInfo({ focusSessions }) {
  const { settings } = useContext(PomodoroContext)

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    return `${minutes} min`
  }

  return (
    <div className="settings-info">
      <p>Duration of focused work: {formatTime(settings.focusTime)}</p>
      <p>Duration of short breaks: {formatTime(settings.shortBreak)}</p>
      <p>Duration of long breaks: {formatTime(settings.longBreak)}</p>
      <p>Number of focus sessions: {settings.intervals}</p>
      <p>Completed focus sessions: {focusSessions || 0}</p>
    </div>
  )
}

export default SettingsInfo
