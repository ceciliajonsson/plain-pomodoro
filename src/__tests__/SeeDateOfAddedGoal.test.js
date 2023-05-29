import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PomodoroTimer from '../components/PomodoroTimer'
import { PomodoroContext } from '../contexts/PomodoroContext'
import { MemoryRouter } from 'react-router-dom'

import React from 'react'
jest.mock('react-textarea-autosize', () => (props) => <textarea {...props} />)

const mockPomodoroContext = {
  settings: {
    focusTime: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    intervals: 4,
  },
}

// Test if the date and time of the added goal is displayed
test('date and time of added goal is displayed', async () => {
  render(
    <PomodoroContext.Provider value={mockPomodoroContext}>
      <MemoryRouter>
        <PomodoroTimer />
      </MemoryRouter>
    </PomodoroContext.Provider>
  )

  const goalInput = screen.getByRole('textbox', {
    name: /Enter your goal for the session/i,
  })
  fireEvent.change(goalInput, {
    target: { value: 'Test goal' },
  })

  const submitButton = screen.getByRole('button', { name: /Submit/i })
  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(screen.getByText(/Test goal/i)).toBeInTheDocument()
  })

  const date = new Date()
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.toLocaleString('en-US', { year: 'numeric' })
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')

  const time = `${day} ${month} ${year}, ${hour}:${minute}`

  await waitFor(() => {
    expect(screen.getByText(time)).toBeInTheDocument()
  })
})
