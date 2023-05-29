import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import PomodoroTimer from '../components/PomodoroTimer'
import { PomodoroProvider } from '../contexts/PomodoroContext'
import '@testing-library/jest-dom'
jest.mock('react-textarea-autosize')

// In your Jest setup file or at the top of your test file
global.navigator = {
  serviceWorker: {
    register: jest.fn(),
  },
}

window.addEventListener = jest.fn(() => {})

global.window = Object.create(window)
window.addEventListener = jest.fn()

// Mocking window object
const mockWindow = {
  location: {
    hostname: '',
    href: '',
    origin: '',
  },
  addEventListener: jest.fn(),
}

// Mocking navigator object
const mockNavigator = {
  serviceWorker: {
    register: jest.fn(),
    ready: Promise.resolve({
      unregister: jest.fn(),
    }),
    controller: null,
  },
}

global.window = Object.create(window)
Object.assign(global.window, mockWindow)

global.navigator = Object.create(navigator)
Object.assign(global.navigator, mockNavigator)

it('renders without crashing', () => {
  render(
    <PomodoroProvider>
      <MemoryRouter>
        <PomodoroTimer />
      </MemoryRouter>
    </PomodoroProvider>
  )

  expect(screen.getByText('Plain Pomodoro')).toBeInTheDocument()
})
