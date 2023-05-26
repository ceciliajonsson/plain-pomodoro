import React, { useState } from 'react'

function GoalList({ goals, removeGoal, toggleCompletion, updateGoal }) {
  const [editingIndex, setEditingIndex] = useState(null)

  const handleEdit = (index) => {
    setEditingIndex(index)
  }

  const handleChange = (event, index) => {
    updateGoal(index, event.target.value)
  }

  const handleBlur = () => {
    setEditingIndex(null)
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
            disabled={editingIndex !== index}
            onChange={(e) => handleChange(e, index)}
            onBlur={handleBlur}
          >
            {goal.text}
          </textarea>
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

            <button
              className="secondary-button"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default GoalList
