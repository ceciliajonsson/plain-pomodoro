import React from 'react'

function IntervalDisplay({ focusSessions, intervals }) {
  return (
    <div className="intervals">
      Interval {focusSessions + 1} of {intervals}
    </div>
  )
}

export default IntervalDisplay
