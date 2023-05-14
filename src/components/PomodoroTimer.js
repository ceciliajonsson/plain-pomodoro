import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

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

  const timerProps = {
    isPlaying: start,
    key: key,
    size: 120,
    strokeWidth: 6,
  }

  const handleComplete = () => {
    if (session === 'focus') {
      setFocusSessions((prevFocusSessions) => prevFocusSessions + 1)
      if (focusSessions === 3) {
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
      <CountdownCircleTimer
        {...timerProps}
        colors={session === 'focus' ? [['#EF798A']] : [['#218380']]}
        duration={duration}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60
          return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        }}
      </CountdownCircleTimer>

      <div className="intervals">Interval {focusSessions + 1} of 5</div>

      <div className="buttons">
        <button onClick={handleStartStop}>{!start ? 'Start' : 'Stop'}</button>
      </div>
    </div>
  )
}

export default PomodoroTimer
