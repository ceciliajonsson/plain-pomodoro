import React from 'react'

function StartStopButtons({ start, handleStartStop }) {
  return (
    <div className="start-stop-buttons">
      <button onClick={handleStartStop}>{!start ? 'Start' : 'Stop'}</button>
    </div>
  )
}

export default StartStopButtons
