import React from 'react'

function GoalList({ goals, removeGoal, toggleCompletion, timestamp }) {
  return (
    <div className="goal-list">
      {goals.map((goal, index) => (
        <div key={index} className="goal-item">
          <div className="goal-date-holder">
            <small>{goal.timestamp}</small>
          </div>
          <span
            lassName="goal-item-text"
            style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}
          >
            {goal.text}
          </span>
          <div className="goal-item-buttons">
            <button onClick={() => removeGoal(index)}>Delete</button>

            <button onClick={() => toggleCompletion(index)}>
              {goal.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default GoalList
