import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer({ start, key, session, duration, handleComplete }) {
  const timerProps = {
    isPlaying: start,
    key: key,
    size: 120,
    strokeWidth: 6,
  }

  const sessionTitle = session === 'focus' ? 'Focus' : 'Break'

  return (
    <div className="count-down-circle-timer">
      <CountdownCircleTimer
        {...timerProps}
        colors={session === 'focus' ? [['#EF798A']] : [['#218380']]}
        duration={duration}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60
          return (
            <>
              <div className="count-down-circle-timer-text">
                <text>{sessionTitle}</text>
                <text>
                  {minutes}:{seconds < 10 ? '0' + seconds : seconds}
                </text>
              </div>
            </>
          )
        }}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer
