import React, { useContext } from 'react'
import { PomodoroContext } from '../contexts/PomodoroContext'

function SettingsInfo() {
  const { settings } = useContext(PomodoroContext)

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    return `${minutes} min`
  }

  return (
    <div className="settings-info">
      <p>Focus Interval: {formatTime(settings.focusTime)}</p>
      <p>Short Break Interval: {formatTime(settings.shortBreak)}</p>
      <p>Long Break Interval: {formatTime(settings.longBreak)}</p>
      <p>Intervals before Long Break: {settings.intervals}</p>
    </div>
  )
}

export default SettingsInfo
