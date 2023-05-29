import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

it('Empty goal with placeholder text should not be possible to complete', async () => {
  render(
    <GoalList
      goals={mockGoals}
      removeGoal={mockRemoveGoal}
      toggleCompletion={mockToggleCompletion}
      updateGoal={mockUpdateGoal}
    />
  )

  // Find the second goal (empty goal with placeholder text)
  const secondGoal = screen.getAllByRole('textbox')[1]

  // Click on the second goal
  userEvent.click(secondGoal)

  // Type in the second goal
  userEvent.type(secondGoal, 'New goal text')

  // Simulate onBlur by tabbing out
  userEvent.tab()

  // Expect the updateGoal function to be called with the appropriate parameters
  expect(mockUpdateGoal).toHaveBeenCalledWith(1, 'New goal text')

  // Expect the second goal (empty goal with placeholder text) to not be completed
  expect(mockToggleCompletion).not.toHaveBeenCalledWith(1)
})
