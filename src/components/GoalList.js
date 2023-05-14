import React from 'react'

function GoalList({ goals, removeGoal, toggleCompletion }) {
  return (
    <div className="goal-list">
      {goals.map((goal, index) => (
        <div key={index} className="goal-item">
          <span
            style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}
          >
            {goal.text}
          </span>
          <button onClick={() => toggleCompletion(index)}>
            {goal.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => removeGoal(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default GoalList
