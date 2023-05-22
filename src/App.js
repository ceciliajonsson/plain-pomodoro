import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PomodoroTimer from './components/PomodoroTimer'
import { PomodoroProvider } from './contexts/PomodoroContext'
import About from './components/About'

function App() {
  return (
    <Router>
      <PomodoroProvider>
        <Routes>
          <Route path="/" element={<PomodoroTimer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PomodoroProvider>
    </Router>
  )
}

export default App
