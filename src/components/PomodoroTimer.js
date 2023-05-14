import React, { useState } from 'react'
import IntervalDisplay from './IntervalDisplay'
import ControlButtons from './StartStopButtons'
import Timer from './Timer'

function PomodoroTimer() {
  const [start, setStart] = useState(false)
  const [key, setKey] = useState(0)
  const [session, setSession] = useState('focus')
  const [focusSessions, setFocusSessions] = useState(0)
  const [duration, setDuration] = useState(25 * 60)

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
    </div>
  )
}

export default PomodoroTimer
