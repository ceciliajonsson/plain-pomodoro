import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer({ start, timerKey, session, duration, handleComplete }) {
  const timerProps = {
    isPlaying: start,
    key: timerKey,
    size: 220,
    strokeWidth: 8,
    trailColor: '#1b323b',
  }

  const sessionTitle = session === 'focus' ? 'Focus' : 'Break'

  return (
    <div className="count-down-circle-timer">
      <CountdownCircleTimer
        {...timerProps}
        colors={session === 'focus' ? [['#7895A1']] : [['#196361']]}
        duration={duration}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60
          return (
            <>
              <div className="count-down-circle-timer-text">
                <h3>{sessionTitle}</h3>
                <p>
                  {minutes}:{seconds < 10 ? '0' + seconds : seconds}
                </p>
              </div>
            </>
          )
        }}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer
