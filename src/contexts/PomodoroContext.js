import React from 'react'

export const PomodoroContext = React.createContext()

export function PomodoroProvider({ children }) {
  const [settings, setSettings] = React.useState({
    focusTime: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    intervals: 4,
  })

  return (
    <PomodoroContext.Provider value={{ settings, setSettings }}>
      {children}
    </PomodoroContext.Provider>
  )
}
