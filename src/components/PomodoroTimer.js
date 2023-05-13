import React, { useState, useEffect } from 'react'

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [start, setStart] = useState(false)
  const [session, setSession] = useState('focus')
  const [focusSessions, setFocusSessions] = useState(0)

  const handleStart = () => {
    setStart(true)
  }

  const handleStop = () => {
    setStart(false)
  }

  useEffect(() => {
    let interval = null
    if (start) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (session === 'focus') {
              setFocusSessions(focusSessions + 1)
              if (focusSessions === 4) {
                setMinutes(15) // long break
                setSession('long-break')
              } else {
                setMinutes(5) // short break
                setSession('short-break')
              }
            } else {
              setMinutes(25) // focus
              if (session === 'long-break') {
                setFocusSessions(0)
              }
              setSession('focus')
            }
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
    } else if (!start) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [minutes, seconds, start, session, focusSessions])

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <div className="pomodoro">
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="intervals">Interval {focusSessions + 1} of 5</div>

      <div className="buttons">
        {!start ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
      </div>
    </div>
  )
}

export default PomodoroTimer
