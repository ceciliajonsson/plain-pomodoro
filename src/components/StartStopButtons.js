import React from 'react'

function StartStopButtons({ start, _callback }) {
  return (
    <div className="start-stop-buttons">
      <button onClick={_callback}>{!start ? 'Start' : 'Stop'}</button>
    </div>
  )
}

export default StartStopButtons
