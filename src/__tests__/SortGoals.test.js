import { render, fireEvent, screen } from '@testing-library/react'
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

test('goals are sorted by date', async () => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date('2023-05-21T08:00:00Z'))

  render(
    <PomodoroContext.Provider value={mockPomodoroContext}>
      <PomodoroTimer />
    </PomodoroContext.Provider>
  )

  const goalInput = screen.getByRole('textbox', {
    name: /Enter your goal for the session/i,
  })
  const submitButton = screen.getByRole('button', { name: /Submit/i })

  fireEvent.change(goalInput, { target: { value: 'Test goal 1' } })
  fireEvent.click(submitButton)

  jest.setSystemTime(new Date('2023-05-21T09:00:00Z'))

  fireEvent.change(goalInput, { target: { value: 'Test goal 2' } })
  fireEvent.click(submitButton)

  const goalOne = screen.getByTestId('goal-0')
  const goalTwo = screen.getByTestId('goal-1')

  expect(goalOne).toHaveTextContent(/Test goal 2/i)
  expect(goalTwo).toHaveTextContent(/Test goal 1/i)
})
