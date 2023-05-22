import React, { useState } from 'react'

const Footer = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleFooter = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      className={`footer ${expanded ? 'expanded' : ''}`}
      onClick={toggleFooter}
    >
      <div className="footer-content">{<small>small</small>}</div>
    </div>
  )
}

export default Footer
