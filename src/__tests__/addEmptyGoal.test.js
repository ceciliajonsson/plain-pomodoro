import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PomodoroTimer from '../components/PomodoroTimer'
import { PomodoroContext } from '../contexts/PomodoroContext'
import React from 'react'

const mockPomodoroContext = {
  settings: {
    focusTime: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    intervals: 4,
  },
}

// Todo: Test so that a user can not add an empty goal

test('user can not add an empty goal', async () => {
  render(
    <PomodoroContext.Provider value={mockPomodoroContext}>
      <PomodoroTimer />
    </PomodoroContext.Provider>
  )

  const goalInput = screen.getByRole('textbox', {
    name: /Enter your goal for the session/i,
  })
  fireEvent.change(goalInput, {
    target: { value: '' },
  })

  const submitButton = screen.getByRole('button', { name: /Submit/i })
  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(
      screen.getByText(/Goal cannot be empty. Please enter a valid goal./i)
    ).toBeInTheDocument()
  })
})
