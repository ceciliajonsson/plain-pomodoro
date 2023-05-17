import React from 'react'

function StartStopButtons({ start, handleStartStop }) {
  return (
    <div className="start-stop-button">
      <button onClick={handleStartStop}>{!start ? 'Start' : 'Pause'}</button>
    </div>
  )
}

export default StartStopButtons
