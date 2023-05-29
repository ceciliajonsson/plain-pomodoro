import { render, fireEvent, screen, waitFor, act } from '@testing-library/react'
import PomodoroTimer from '../components/PomodoroTimer'
import { MemoryRouter } from 'react-router-dom'
import { PomodoroContext } from '../contexts/PomodoroContext'
import React from 'react'

HTMLMediaElement.prototype.play = jest.fn()

jest.useFakeTimers()

const mockPomodoroContext = {
  settings: {
    focusTime: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    intervals: 4,
  },
}

test('sound plays when timer reaches zero', async () => {
  render(
    <PomodoroContext.Provider value={mockPomodoroContext}>
      <MemoryRouter>
        <PomodoroTimer />
      </MemoryRouter>
    </PomodoroContext.Provider>
  )

  // Click the start button
  fireEvent.click(screen.getByRole('button', { name: /Start/i }))

  act(() => {
    jest.advanceTimersByTime(25 * 60 * 1000) // 25 minutes
  })

  // Wait for any state updates and useEffect calls to complete
  await waitFor(() => {
    // Check if the sound was played
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled()
  })
})
