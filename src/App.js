import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PomodoroTimer from './components/PomodoroTimer'
import { PomodoroProvider } from './contexts/PomodoroContext'
import About from './pages/About'
import DownloadPWAButton from './components/DownloadPWAButton'

function App() {
  return (
    <Router basename={'/plain-pomodoro'}>
      <PomodoroProvider>
        <Routes>
          <Route exact path="/" element={<PomodoroTimer />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" component={DownloadPWAButton} />
        </Routes>
      </PomodoroProvider>
    </Router>
  )
}

export default App
