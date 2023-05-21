import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PomodoroTimer from '../components/PomodoroTimer'
import { PomodoroContext } from '../contexts/PomodoroContext'

const settings = {
  focusTime: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
  intervals: 5,
}

test('renders PomodoroTimer without crashing', () => {
  render(
    <PomodoroContext.Provider value={{ settings }}>
      <PomodoroTimer />
    </PomodoroContext.Provider>
  )

  expect(screen.getByText(/Plain Pomodoro/i)).toBeInTheDocument()
})
