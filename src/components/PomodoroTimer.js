import React, { useContext, useEffect, useState } from 'react'
// import IntervalDisplay from './IntervalDisplay'
import ControlButtons from './StartStopButtons'
import Timer from './Timer'
import GoalInput from './GoalInput'
import GoalList from './GoalList'
import { PomodoroContext } from '../contexts/PomodoroContext'
import Settings from './Settings'
import SettingsInfo from './SettingsInfo'
import FlashMessage from './FlashMessage'

function PomodoroTimer() {
  const [start, setStart] = useState(false)
  const [key, setKey] = useState(0)
  const [session, setSession] = useState('focus')
  const [focusSessions, setFocusSessions] = useState(0)
  const [duration, setDuration] = useState(25 * 60)
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])
  const [showSettings, setShowSettings] = useState(false)
  const [flashMessage, setFlashMessage] = useState(null)

  const { settings } = useContext(PomodoroContext)

  useEffect(() => {
    setDuration(settings.focusTime)
    setSession('focus')
    setKey((prevKey) => prevKey + 1) // Reset the timer
  }, [settings])

  const handleStartStop = () => {
    if (start) {
      setStart(false)
    } else {
      setStart(true)
      //setKey((prevKey) => prevKey + 1)
    }
  }

  const handleComplete = () => {
    let newFocusSessions = focusSessions
    if (session === 'focus') {
      newFocusSessions = focusSessions + 1
      setFocusSessions(newFocusSessions)
      if (newFocusSessions === settings.intervals) {
        setDuration(settings.longBreak) // long-break
        setSession('long-break')
      } else {
        setDuration(settings.shortBreak) // short-break
        setSession('short-break')
      }
    } else if (session === 'short-break' || session === 'long-break') {
      if (session === 'long-break') {
        newFocusSessions = 0
        setFocusSessions(newFocusSessions)
      }
      setDuration(settings.focusTime) // focus
      setSession('focus')
    }

    setKey((prevKey) => prevKey + 1)
    return [true, 1000] // repeat animation after 1 second delay
  }

  const addGoal = (goalText) => {
    if (goalText.trim() !== '') {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: goalText, completed: false },
      ])
    } else {
      setFlashMessage('Goal cannot be empty. Please enter a valid goal.')
      setTimeout(() => {
        setFlashMessage(null)
      }, 3000) // this will clear the flash message after 3 seconds
    }
  }

  const removeGoal = (index) => {
    setGoals((prevGoals) => prevGoals.filter((_, i) => i !== index))
  }

  const toggleCompletion = (index) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal, i) =>
        i === index ? { ...goal, completed: !goal.completed } : goal
      )
    )
  }

  return (
    <div>
      <SettingsInfo focusSessions={focusSessions} />

      <div className="pomodoro">
        <h1>Pomodoro App</h1>
        <p>Focus</p>
        <div className="time-wrapper">
          <Timer
            start={start}
            timerKey={key}
            session={session}
            duration={duration}
            handleComplete={handleComplete}
          />
          {/* <IntervalDisplay
        focusSessions={focusSessions}
        intervals={settings.intervals}
      /> */}
        </div>
        <div className="start-setting-buttons">
          <ControlButtons start={start} handleStartStop={handleStartStop} />
          <button onClick={() => setShowSettings(!showSettings)}>
            {showSettings ? 'Hide' : 'Show'} Settings
          </button>
          {showSettings && <Settings setShowSettings={setShowSettings} />}
        </div>
        <GoalInput goal={goal} setGoal={setGoal} addGoal={addGoal} />
        <FlashMessage flashMessage={flashMessage} />

        <GoalList
          goals={goals}
          removeGoal={removeGoal}
          toggleCompletion={toggleCompletion}
        />
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default PomodoroTimer
