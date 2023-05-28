import React, { useState } from 'react'

function GoalList({ goals, removeGoal, toggleCompletion, updateGoal }) {
  const [editIndex, setEditIndex] = useState(null)
  const [tempGoal, setTempGoal] = useState('')

  const handleBlur = (index) => {
    updateGoal(index, tempGoal)
    setEditIndex(null)
  }

  const handleFocus = (index, text) => {
    setEditIndex(index)
    setTempGoal(text)
  }

  return (
    <div className="goal-list">
      {goals.map((goal, index) => (
        <div key={index} className="goal-item" data-testid={`goal-${index}`}>
          <div className="goal-date-holder">
            <small>{goal.timestamp}</small>
          </div>
          <textarea
            className="goal-item-text"
            style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}
            readOnly={editIndex !== index}
            value={editIndex === index ? tempGoal : goal.text}
            onClick={() => handleFocus(index, goal.text)}
            onChange={(e) => setTempGoal(e.target.value)}
            onBlur={() => handleBlur(index)}
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
