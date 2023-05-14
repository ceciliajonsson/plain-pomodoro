import React, { useContext, useState } from 'react'
import { PomodoroContext } from '../contexts/PomodoroContext'

function Settings({ setShowSettings }) {
  const { settings, setSettings } = useContext(PomodoroContext)
  const [tempSettings, setTempSettings] = useState(settings)

  const ranges = {
    focusTime: { min: 60, max: 5400 },
    shortBreak: { min: 60, max: 900 },
    longBreak: { min: 60, max: 1800 },
    intervals: { min: 1, max: 10 },
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = name === 'intervals' ? parseInt(value) : parseInt(value) * 60

    // Check if value is within the allowed range
    if (newValue < ranges[name].min || newValue > ranges[name].max) {
      newValue =
        newValue < ranges[name].min ? ranges[name].min : ranges[name].max
    }

    setTempSettings({
      ...tempSettings,
      [name]: newValue,
    })
  }

  const handleSave = () => {
    setSettings(tempSettings)
    setShowSettings(false)
  }

  return (
    <div className="settings">
      <label>
        Focus time (minutes):
        <input
          type="number"
          name="focusTime"
          value={tempSettings.focusTime / 60}
          onChange={handleChange}
          max={ranges.focusTime.max / 60}
        />
      </label>
      <label>
        Short break (minutes):
        <input
          type="number"
          name="shortBreak"
          value={tempSettings.shortBreak / 60}
          onChange={handleChange}
          max={ranges.shortBreak.max / 60}
        />
      </label>
      <label>
        Long break (minutes):
        <input
          type="number"
          name="longBreak"
          value={tempSettings.longBreak / 60}
          onChange={handleChange}
          max={ranges.longBreak.max / 60}
        />
      </label>
      <label>
        Intervals:
        <input
          type="number"
          name="intervals"
          value={tempSettings.intervals}
          onChange={handleChange}
          max={ranges.intervals.max}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default Settings
