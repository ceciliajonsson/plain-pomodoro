import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect' // Import extend-expect from testing-library/jest-dom
import GoalList from '../components/GoalList'

jest.mock('react-textarea-autosize', () => {
  return ({ value, ...props }) => <textarea {...props} value={value} />
})

const mockGoals = [
  { text: 'Test goal 1', completed: false, timestamp: 'time1' },
  { text: '', completed: false, timestamp: 'time2' },
]

const mockRemoveGoal = jest.fn()
const mockToggleCompletion = jest.fn()
const mockUpdateGoal = jest.fn()

describe('Empty goal with placeholder text', () => {
  it('should not be possible to complete', () => {
    render(
      <GoalList
        goals={mockGoals}
        removeGoal={mockRemoveGoal}
        toggleCompletion={mockToggleCompletion}
        updateGoal={mockUpdateGoal}
      />
    )

    const secondGoal = screen.getAllByRole('textbox')[1]
    const completeButtons = screen.getAllByRole('button', { name: /complete/i })
    const secondGoalCompleteButton = completeButtons.find(
      (button) => button.textContent === 'Complete' && button.disabled
    )

    userEvent.click(secondGoal)
    userEvent.clear(secondGoal) // Clear the goal text
    userEvent.tab()

    expect(mockUpdateGoal).toHaveBeenCalledWith(1, '') // Ensure the goal text is empty
    expect(mockToggleCompletion).not.toHaveBeenCalledWith(1)
    expect(secondGoalCompleteButton).toBeInTheDocument() // Assert the complete button is present
    expect(secondGoalCompleteButton).toBeDisabled() // Assert the complete button is disabled
  })
})
