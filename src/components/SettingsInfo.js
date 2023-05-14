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
      <p>Time for focused work: {formatTime(settings.focusTime)}</p>
      <p>Duration of short breaks: {formatTime(settings.shortBreak)}</p>
      <p>Duration of long breaks: {formatTime(settings.longBreak)}</p>
      <p>Number of focus sessions before a long break: {settings.intervals}</p>
      <p>Completed focus sessions: {focusSessions}</p>
    </div>
  )
}

export default SettingsInfo
