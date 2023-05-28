import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

function GoalInput({ goal, setGoal, addGoal }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    addGoal(goal)
    setGoal('')
  }
  return (
    <form className="goal-input" onSubmit={handleSubmit}>
      <label htmlFor="goal-textarea"> Enter your goal for the session:</label>
      <TextareaAutosize
        id="goal-textarea"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default GoalInput
