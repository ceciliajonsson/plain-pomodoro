import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-holder">
        <Link to={'/'} className="footer-content">
          Home
        </Link>{' '}
        <div className="footer-divider">|</div>
        <Link to={'/about'} className="footer-content">
          About
        </Link>
      </div>
      <div className="footer-content">© 2023 Plain Pomodoro</div>
    </div>
  )
}

export default Footer
