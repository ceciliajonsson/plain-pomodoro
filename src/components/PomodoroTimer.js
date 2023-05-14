import React, { useState } from 'react'
import IntervalDisplay from './IntervalDisplay'
import ControlButtons from './StartStopButtons'
import Timer from './Timer'
import GoalInput from './GoalInput'
import GoalList from './GoalList'

function PomodoroTimer() {
  const [start, setStart] = useState(false)
  const [key, setKey] = useState(0)
  const [session, setSession] = useState('focus')
  const [focusSessions, setFocusSessions] = useState(0)
  const [duration, setDuration] = useState(25 * 60)
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handleStartStop = () => {
    if (start) {
      setStart(false)
    } else {
      setStart(true)
      setKey((prevKey) => prevKey + 1)
    }
  }

  const handleComplete = () => {
    if (session === 'focus') {
      setFocusSessions((prevFocusSessions) => prevFocusSessions + 1)
      if (focusSessions === 4) {
        setDuration(15 * 60) // long-break
        setSession('long-break')
      } else {
        setDuration(5 * 60) // short-break
        setSession('short-break')
      }
    } else {
      setDuration(25 * 60)
      if (session === 'long-break') {
        setFocusSessions(0)
      }
      setSession('focus') // focus
    }
    setKey((prevKey) => prevKey + 1)
    return [true, 1000] // repeat animation after 1 second delay
  }

  const addGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal])
  }

  const removeGoal = (index) => {
    setGoals((prevGoals) => prevGoals.filter((_, i) => i !== index))
  }

  return (
    <div className="pomodoro">
      <Timer
        start={start}
        key={key}
        session={session}
        duration={duration}
        handleComplete={handleComplete}
      />

      <IntervalDisplay focusSessions={focusSessions} />

      <ControlButtons start={start} handleStartStop={handleStartStop} />

      <GoalInput goal={goal} setGoal={setGoal} addGoal={addGoal} />
      <GoalList goals={goals} removeGoal={removeGoal} />
    </div>
  )
}

export default PomodoroTimer
