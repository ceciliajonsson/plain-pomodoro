import React from 'react'

function GoalList({ goals, removeGoal }) {
  return (
    <div className="goal-list">
      {goals.map((goal, index) => (
        <div key={index} className="goal-item">
          {goal}
          <button onClick={() => removeGoal(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default GoalList
