/**
 * Settings component renders a form for configuring the Pomodoro settings.
 * @returns {JSX.Element} The rendered Settings component.
 */

import React, { useContext, useState } from 'react'
import { PomodoroContext } from '../contexts/PomodoroContext'

function Settings({ setShowSettings }) {
  const { settings, setSettings } = useContext(PomodoroContext)
  const [tempSettings, setTempSettings] = useState({
    focusTime: settings.focusTime / 60,
    shortBreak: settings.shortBreak / 60,
    longBreak: settings.longBreak / 60,
    intervals: settings.intervals,
  })
  const [error, setError] = useState('') // New state to hold an error message

  const ranges = {
    focusTime: { min: 1, max: 90 },
    shortBreak: { min: 1, max: 15 },
    longBreak: { min: 1, max: 30 },
    intervals: { min: 1, max: 10 },
  }

  /**
   * Handles the change event on the input fields.
   * Updates the temporary settings state with the new value.
   * @param {Object} e - The change event object.
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setError('') // Reset error message when the user starts typing
    setTempSettings({
      ...tempSettings,
      [name]: value,
    })
  }

  /**
   * Handles the save button click.
   * Validates the settings and saves them if valid.
   */
  const handleSave = () => {
    let newSettings = {}
    const fieldNames = {
      focusTime: 'Focus time',
      shortBreak: 'Short break',
      longBreak: 'Long break',
      intervals: 'Intervals',
    }
    for (let key in tempSettings) {
      let parsedValue = parseInt(tempSettings[key])
      if (
        isNaN(parsedValue) ||
        parsedValue < ranges[key].min ||
        parsedValue > ranges[key].max
      ) {
        setError(
          `Please enter a valid number for ${fieldNames[key]} between ${ranges[key].min} and ${ranges[key].max}.`
        )
        return
      }
      newSettings[key] = key === 'intervals' ? parsedValue : parsedValue * 60
    }
    setSettings(newSettings)
    setShowSettings(false)
  }

  return (
    <div className="settings">
      <label>
        Focus time (minutes):
        <input
          type="number"
          name="focusTime"
          value={tempSettings.focusTime}
          onChange={handleChange}
        />
      </label>
      <label>
        Short break (minutes):
        <input
          type="number"
          name="shortBreak"
          value={tempSettings.shortBreak}
          onChange={handleChange}
        />
      </label>
      <label>
        Long break (minutes):
        <input
          type="number"
          name="longBreak"
          value={tempSettings.longBreak}
          onChange={handleChange}
        />
      </label>
      <label>
        Intervals:
        <input
          type="number"
          name="intervals"
          value={tempSettings.intervals}
          onChange={handleChange}
        />
      </label>
      {error && <p>{error}</p>} {/* Display error message if it exists */}
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default Settings
