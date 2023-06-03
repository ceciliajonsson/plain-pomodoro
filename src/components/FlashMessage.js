/**

FlashMessage component renders a flash message.
@param {Object} props - The component props.
@param {string} props.flashMessage - The message to be displayed in the flash message.
@returns {JSX.Element} The rendered FlashMessage component.
*/

import React from 'react'

function FlashMessage({ flashMessage }) {
  return (
    <div className="flash-message">
      {flashMessage && <div className="flash-message">{flashMessage}</div>}
    </div>
  )
}

export default FlashMessage
