import React from 'react'

function FlashMessage({ flashMessage }) {
  return (
    <div className="pomodoro">
      {flashMessage && <div className="flash-message">{flashMessage}</div>}
      {/*...rest of your code*/}
    </div>
  )
}

export default FlashMessage
