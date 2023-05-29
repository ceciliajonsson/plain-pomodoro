import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GoalList from '../components/GoalList'

jest.mock('react-textarea-autosize', () => {
  return ({ value, ...props }) => <textarea {...props} value={value} />
})

const mockGoals = [
  { text: 'Test goal 1', completed: false, timestamp: 'time1' },
  { text: 'Test goal 2', completed: true, timestamp: 'time2' },
]

const mockRemoveGoal = jest.fn()
const mockToggleCompletion = jest.fn()
const mockUpdateGoal = jest.fn()

it('Completed goal should not be editable', async () => {
  render(
    <GoalList
      goals={mockGoals}
      removeGoal={mockRemoveGoal}
      toggleCompletion={mockToggleCompletion}
      updateGoal={mockUpdateGoal}
    />
  )

  // Expect the second goal (completed) to be not editable
  const secondGoal = screen.getAllByRole('textbox')[1]
  expect(secondGoal.disabled).toBe(true)
})
