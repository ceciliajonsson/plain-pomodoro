import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer({ start, key, session, duration, handleComplete }) {
  const timerProps = {
    isPlaying: start,
    key: key,
    size: 120,
    strokeWidth: 6,
  }

  return (
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
  )
}

export default Timer
