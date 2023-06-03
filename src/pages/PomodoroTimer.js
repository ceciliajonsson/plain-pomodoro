/**
 * PomodoroTimer component renders the main Pomodoro timer functionality.
 * @returns {JSX.Element} The rendered PomodoroTimer component.
 */

import React, { useContext, useEffect, useState } from 'react'
import ControlButtons from '../components/StartStopButtons'
import Timer from '../components/Timer'
import GoalInput from '../components/GoalInput'
import GoalList from '../components/GoalList'
import { PomodoroContext } from '../contexts/PomodoroContext'
import Settings from '../components/Settings'
import SettingsInfo from '../components/SettingsInfo'
import FlashMessage from '../components/FlashMessage'
import TimerSound from '../assets/sounds/owl-hooting-48028.mp3'
import Footer from '../components/Footer'

function PomodoroTimer() {
  const [start, setStart] = useState(false)
  const [key, setKey] = useState(0)
  const [session, setSession] = useState('focus')
  const [focusSessions, setFocusSessions] = useState(0)
  const [duration, setDuration] = useState(25 * 60)
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem('goals')) || []
  )
  const [showSettings, setShowSettings] = useState(false)
  const [flashMessage, setFlashMessage] = useState(null)
  const [playTimerSound, setPlayTimerSound] = useState(false)

  const { settings } = useContext(PomodoroContext)

  useEffect(() => {
    setDuration(settings.focusTime)
    setSession('focus')
    setKey((prevKey) => prevKey + 1)
  }, [settings])

  useEffect(() => {
    if (playTimerSound) {
      const audio = new Audio(TimerSound)
      audio.play()
      setPlayTimerSound(false)
    }
  }, [playTimerSound])

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  /**
   * Handles the start/stop button click.
   * Toggles the `start` state.
   */

  const handleStartStop = () => {
    if (start) {
      setStart(false)
    } else {
      setStart(true)
    }
  }

  /**
   * Handles the timer completion.
   * Updates the necessary states and returns the next timer configuration.
   * @returns {[boolean, number]} An array containing the next timer configuration.
   * The first element is a boolean indicating whether the timer should restart,
   * and the second element is the duration in milliseconds for the next timer.
   */
  const handleComplete = () => {
    setPlayTimerSound(true)
    let newFocusSessions = focusSessions

    if (session === 'focus') {
      newFocusSessions = focusSessions + 1
      setFocusSessions(newFocusSessions)
      if (newFocusSessions === settings.intervals) {
        setDuration(settings.longBreak)
        setSession('long-break')
      } else {
        setDuration(settings.shortBreak)
        setSession('short-break')
      }
    } else if (session === 'short-break' || session === 'long-break') {
      if (session === 'long-break') {
        newFocusSessions = 0
        setFocusSessions(newFocusSessions)
      }
      setDuration(settings.focusTime)
      setSession('focus')
    }

    setKey((prevKey) => prevKey + 1)
    return [true, 1000]
  }

  /**
   * Adds a goal to the list of goals.
   * Validates the goal text and adds it to the list if valid.
   * Displays a flash message if the goal text is empty.
   * @param {string} goalText - The goal text to add.
   */
  const addGoal = (goalText) => {
    if (goalText.trim() !== '') {
      const currentDate = new Date()
      const day = currentDate.toLocaleString('en-US', { day: '2-digit' })
      const month = currentDate.toLocaleString('en-US', { month: 'long' })
      const year = currentDate.toLocaleString('en-US', { year: 'numeric' })
      const hour = currentDate.getHours().toString().padStart(2, '0')
      const minute = currentDate.getMinutes().toString().padStart(2, '0')

      const timestamp = `${day} ${month} ${year}, ${hour}:${minute}`

      const newGoal = {
        text: goalText,
        completed: false,
        timestamp: timestamp,
      }

      setGoals((prevGoals) => {
        const updatedGoals = [newGoal, ...prevGoals]
        localStorage.setItem('goals', JSON.stringify(updatedGoals))
        return updatedGoals.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        )
      })
    } else {
      setFlashMessage('Goal cannot be empty. Please enter a valid goal.')
      setTimeout(() => {
        setFlashMessage(null)
      }, 3000) // This will clear the flash message after 3 seconds.
    }
  }

  /**
   * Removes a goal from the list of goals.
   * @param {number} index - The index of the goal to remove.
   */
  const removeGoal = (index) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((_, i) => i !== index)
      localStorage.setItem('goals', JSON.stringify(updatedGoals))
      return updatedGoals
    })
  }

  /**
   * Updates the text of a goal at the specified index.
   * @param {number} index - The index of the goal to update.
   * @param {string} newText - The new text for the goal.
   */
  const updateGoal = (index, newText) => {
    setGoals((prevGoals) => {
      const newGoals = [...prevGoals]
      newGoals[index] = { ...newGoals[index], text: newText }
      return newGoals
    })
  }

  /**
   * Toggles the completion status of a goal at the specified index.
   * @param {number} index - The index of the goal to toggle.
   */
  const toggleCompletion = (index) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal, i) => {
        const updatedGoal =
          i === index ? { ...goal, completed: !goal.completed } : goal
        // Save the updated goals to localStorage
        localStorage.setItem('goals', JSON.stringify(prevGoals))
        return updatedGoal
      })
    )
  }

  return (
    <div>
      <SettingsInfo focusSessions={focusSessions} />

      <div className="pomodoro">
        <h1>Plain Pomodoro</h1>
        <p>
          Supercharge your productivity with the Pomodoro technique. <br />
        </p>
        <div className="time-wrapper">
          <Timer
            start={start}
            timerKey={key}
            session={session}
            duration={duration}
            handleComplete={handleComplete}
          />
        </div>
        <div className="start-setting-button">
          <ControlButtons start={start} handleStartStop={handleStartStop} />
          <div className="hidenshow-setting-button">
            <button onClick={() => setShowSettings(!showSettings)}>
              {showSettings ? 'Hide' : 'Show'} Settings
            </button>
          </div>
          {showSettings && <Settings setShowSettings={setShowSettings} />}
        </div>
        <GoalInput goal={goal} setGoal={setGoal} addGoal={addGoal} />
        <FlashMessage flashMessage={flashMessage} />

        <GoalList
          goals={goals}
          removeGoal={removeGoal}
          toggleCompletion={toggleCompletion}
          timestamp={goal.timestamp}
          updateGoal={updateGoal}
        />
      </div>
      <Footer />
    </div>
  )
}

export default PomodoroTimer
