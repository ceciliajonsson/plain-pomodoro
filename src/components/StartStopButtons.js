/**
 * StartStopButtons component renders start and stop buttons.
 * @param {Object} props - The component props.
 * @param {boolean} props.start - Flag indicating whether the timer is started.
 * @param {function} props.handleStartStop - The function to handle the start/stop button click.
 * @returns {JSX.Element} The rendered StartStopButtons component.
 */

import React from 'react'

function StartStopButtons({ start, handleStartStop }) {
  return (
    <div className="start-stop-button">
      <button onClick={handleStartStop}>{!start ? 'Start' : 'Pause'}</button>
    </div>
  )
}

export default StartStopButtons
