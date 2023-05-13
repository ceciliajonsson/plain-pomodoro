import React, { useState, useEffect } from 'react'

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [displayMessage, setDisplayMessage] = useState(false)
  const [start, setStart] = useState(false)
  const [focusTime, setFocusTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)

  const handleStart = () => {
    setMinutes(focusTime)
    setSeconds(0)
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
            setDisplayMessage(!displayMessage)
            setMinutes(displayMessage ? focusTime : breakTime)
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
  }, [minutes, seconds, displayMessage, start, focusTime, breakTime])

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New round starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="inputs">
        <input
          type="number"
          value={focusTime}
          onChange={(e) => setFocusTime(e.target.value)}
          placeholder="Focus Time"
        />
        <input
          type="number"
          value={breakTime}
          onChange={(e) => setBreakTime(e.target.value)}
          placeholder="Break Time"
        />
      </div>
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
