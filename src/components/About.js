import React from 'react'
import SettingsInfo from './SettingsInfo'
import Footer from './Footer'

function About() {
  return (
    <div className="about-page">
      <SettingsInfo />

      <div className="about-page-content">
        <h1>About the Plain Pomodoro Applicaiton</h1>
        <p>
          <i>Last updated: 4 June 2023</i>
        </p>
        <p>
          The Plain Pomodoro App is a productivity tool inspired by the Pomodoro
          Technique, a time management method developed by Francesco Cirillo in
          the late 1980s.{' '}
        </p>
        <p>
          The technique uses a timer to break work into intervals, traditionally
          25 minutes in length, separated by short breaks. The Plain Pomodoro
          App provides a digital implementation of this technique to help you
          enhance your focus, productivity, and work-life balance.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            Flexible timer settings to customize the focus time, short breaks,
            long breaks, and intervals before a long break.
          </li>
          <li>
            Visual and audio notifications to signal the end of each interval.
          </li>
          <li>
            Goal setting functionality to set and track tasks or objectives
            during the work sessions.
          </li>
          <li>
            Intuitive interface with a simple and clean design for a
            distraction-free experience.
          </li>
          <li>
            Progressive Web App (PWA) functionality to install the app on your
            device.
          </li>
          <li>
            Responsive design to ensure optimal viewing and functionality on all
            devices.
          </li>
          <li>
            Offline functionality to use the app without an internet connection
            for optimal focus.
          </li>
        </ul>
        <h2>How to Use</h2>
        <ol>
          <li>
            Set the desired duration for your focus time, short breaks, long
            breaks, and the number of intervals before a long break in the
            Settings.
          </li>
          <li>Add a goal or task to work on during the Pomodoro session.</li>
          <li>
            Click the Start button to begin a Pomodoro session. The timer will
            countdown the focus time.
          </li>
          <li>
            Work on your task with full concentration until the focus time is
            up.
          </li>
          <li>
            When the timer completes, take a short break to relax and recharge.
          </li>
          <li>
            After a certain number of work intervals, enjoy a longer break to
            unwind.
          </li>
          <li>
            Repeat the process to improve your productivity and maintain a
            healthy work rhythm.
          </li>
        </ol>
        <h2>Limitations</h2>
        <ul>
          <li>
            Using the Plain Pomodoro App in the browser may be subject to
            browser limitations and performance variations.
          </li>
          <li>
            Browser restrictions on audio playback may affect the sound
            notifications in some cases.
          </li>
          <li>
            The app relies on browser timers, which may not be as precise as
            native timers.
          </li>
          <li>
            The app may not work optimally on older or unsupported browsers.
          </li>
        </ul>
        <h2>Recommendation for a More Reliable and Consistent Experience</h2>
        <p>
          In some browser environments, the Pomodoro App may not function as
          expected when accessed directly via a browser URL. However, the app
          can be downloaded as a Progressive Web App (PWA) for a more reliable
          and consistent experience.
        </p>
        <p>
          To install the Pomodoro App as a PWA, please follow the instructions
          specific to your browser and device.
        </p>
        <button className="install-button">Install</button>
        <p>
          Start using the Plain Pomodoro App today and supercharge your
          productivity!
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default About
