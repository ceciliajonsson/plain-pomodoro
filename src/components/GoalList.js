import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
function GoalList({ goals, removeGoal, toggleCompletion, updateGoal }) {
  const [editIndex, setEditIndex] = useState(null)
  const [tempGoal, setTempGoal] = useState('')

  const handleBlur = () => {
    if (tempGoal.trim() === '') {
      updateGoal(editIndex, '')
    } else {
      updateGoal(editIndex, tempGoal)
    }
    setEditIndex(null)
    setTempGoal('')
  }

  const handleFocus = (index, text) => {
    if (goals[index].completed) return
    setEditIndex(index)
    setTempGoal(text)
  }

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
