/**
 * App component is the entry point of the Plain Pomodoro application.
 * It sets up the routing and wraps the components with context providers.
 * @returns {JSX.Element} The rendered App component.
 */

import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PomodoroTimer from './pages/PomodoroTimer'
import { PomodoroProvider } from './contexts/PomodoroContext'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router basename={'/plain-pomodoro'}>
      <PomodoroProvider>
        <Routes>
          <Route exact path="/" element={<PomodoroTimer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PomodoroProvider>
    </Router>
  )
}

export default App
