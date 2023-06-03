/**
 * GoalList component renders a list of goals.
 * @param {Object} props - The component props.
 * @param {Array} props.goals - The array of goals to display.
 * @param {function} props.removeGoal - The function to remove a goal.
 * @param {function} props.toggleCompletion - The function to toggle the completion status of a goal.
 * @param {function} props.updateGoal - The function to update a goal.
 * @returns {JSX.Element} The rendered GoalList component.
 */

import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
function GoalList({ goals, removeGoal, toggleCompletion, updateGoal }) {
  const [editIndex, setEditIndex] = useState(null)
  const [tempGoal, setTempGoal] = useState('')

  /**
   * Handles the blur event on the goal textarea.
   * Updates the goal text or clears it if empty.
   */
  const handleBlur = () => {
    if (tempGoal.trim() === '') {
      updateGoal(editIndex, '')
    } else {
      updateGoal(editIndex, tempGoal)
    }
    setEditIndex(null)
    setTempGoal('')
  }

  /**
   * Handles the focus event on the goal textarea.
   * Sets the edit index and temporary goal value.
   * @param {number} index - The index of the goal being edited.
   * @param {string} text - The current text of the goal being edited.
   */
  const handleFocus = (index, text) => {
    if (goals[index].completed) return
    setEditIndex(index)
    setTempGoal(text)
  }

  /**
   * Handles the input change event on the goal textarea.
   * Updates the temporary goal value.
   * @param {Object} e - The input change event object.
   */
  const handleInputChange = (e) => {
    setTempGoal(e.target.value)
  }

  return (
    <div className="goal-list">
      {goals.map((goal, index) => (
        <div key={index} className="goal-item" data-testid={`goal-${index}`}>
          <div className="goal-date-holder">
            <small>{goal.timestamp}</small>
          </div>
          <TextareaAutosize
            className="goal-item-text"
            style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}
            readOnly={editIndex !== index}
            disabled={goal.completed}
            value={editIndex === index ? tempGoal : goal.text}
            onClick={() => handleFocus(index, goal.text)}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={
              goal.text === ''
                ? 'This goal is empty. Click here to edit this goal.'
                : ''
            }
          />

          <div className="goal-item-buttons">
            <button
              className="secondary-button"
              onClick={() => removeGoal(index)}
            >
              Delete
            </button>

            <button
              className="secondary-button"
              onClick={() => toggleCompletion(index)}
              disabled={goal.text === ''}
            >
              {goal.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default GoalList
