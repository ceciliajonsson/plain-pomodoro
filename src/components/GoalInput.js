/**

GoalInput component renders a form for entering a goal for the session.
@param {Object} props - The component props.
@param {string} props.goal - The current goal value.
@param {function} props.setGoal - The function to update the goal value.
@param {function} props.addGoal - The function to add the goal.
@returns {JSX.Element} The rendered GoalInput component.
*/

import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

/**
Handles the form submission.
Adds the goal and resets the goal input.
@param {Event} e - The form submit event object.
*/
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
