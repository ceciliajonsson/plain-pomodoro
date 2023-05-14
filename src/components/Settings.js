import React, { useContext, useState } from 'react'
import { PomodoroContext } from '../contexts/PomodoroContext'

function Settings({ setShowSettings }) {
  const { settings, setSettings } = useContext(PomodoroContext)
  const [tempSettings, setTempSettings] = useState(settings)

  const handleChange = (e) => {
    setTempSettings({
      ...tempSettings,
      [e.target.name]: parseInt(e.target.value) * 60,
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
        />
      </label>
      <label>
        Short break (minutes):
        <input
          type="number"
          name="shortBreak"
          value={tempSettings.shortBreak / 60}
          onChange={handleChange}
        />
      </label>
      <label>
        Long break (minutes):
        <input
          type="number"
          name="longBreak"
          value={tempSettings.longBreak / 60}
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
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default Settings
