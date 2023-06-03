/**
 * PomodoroProvider component is a context provider that holds the Pomodoro settings.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The rendered PomodoroProvider component.
 */

import React from 'react'

export const PomodoroContext = React.createContext()

export function PomodoroProvider({ children }) {
  const [settings, setSettings] = React.useState({
    focusTime: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    intervals: 5,
  })

  return (
    <PomodoroContext.Provider value={{ settings, setSettings }}>
      {children}
    </PomodoroContext.Provider>
  )
}
