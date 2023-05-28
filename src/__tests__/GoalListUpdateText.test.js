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

it('updates the goal text when a goal is clicked and then blurred', async () => {
  render(
    <GoalList
      goals={mockGoals}
      removeGoal={mockRemoveGoal}
      toggleCompletion={mockToggleCompletion}
      updateGoal={mockUpdateGoal}
    />
  )
  userEvent.click(screen.getAllByRole('textbox')[0])
  userEvent.type(screen.getAllByRole('textbox')[0], 'New goal text')
  userEvent.tab() // simulates onBlur
  expect(mockUpdateGoal).toHaveBeenCalledWith(
    0,
    mockGoals[0].text + 'New goal text'
  )
})
