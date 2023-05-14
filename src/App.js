import React from 'react'
import './index.css'
import PomodoroTimer from './components/PomodoroTimer'
import { PomodoroProvider } from './contexts/PomodoroContext'

function App() {
  return (
    <PomodoroProvider>
      <PomodoroTimer />
    </PomodoroProvider>
  )
}

export default App
