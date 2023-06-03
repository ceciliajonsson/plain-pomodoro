# Plain Pomodoro

Plain Pomodoro is a productivity application that utilizes the Pomodoro Technique for time management. It helps you break your work into focused time intervals with break periods, reducing mental fatigue and enhancing productivity.

## Features

- Pomodoro Timer: The timer cycles between predefined focus and break periods.
- Goal Setting: Add, remove, or update your goals for the focus session.
- Customize Settings: Set the duration of focus, short break, and long break periods according to your preference.
- Offline Support: All your data is stored locally and the app functions offline.
- Minimal Design: The design is clutter-free, helping you focus on your tasks.
- Responsive design: Ensure optimal viewing and functionality on all devices.
- Installability: The application can be installed on a device.

## Project Structure

Here are the key directories and files in this project:

- `public/`: Contains the static files like HTML files, manifest file for PWA, and the images.
- `src/`: Contains the React components, assets, and styles for the project.
- `src/__tests__`: Contains the automatic tests.
- `src/assetes`: Contains all assets.
- `src/components`: Contains all the React components.
- `src/context`: Contains React contexts.
- `src/pages`: Contains all the main pages.
- `src/singeltons`: Contains the singeltons.
- `package.json`: Contains scripts and list of dependencies for the project.
- `README.md`: Contains information about the project and instructions for setting up the development environment.

## Pages

- PomodoroTimer: The main component page.
- About: The about component page.

## Components

- StartStopButtons: Control buttons for the Pomodoro timer.
- Timer: The main Pomodoro timer functionality.
- GoalInput: Input field for adding new goals.
- GoalList: Lists all the added goals.
- Settings: Allows users to customize timer durations.
- SettingsInfo: Displays the current settings and number of completed focus sessions.
- FlashMessage: Displays flash messages (like error messages).
- Footer: The footer of the application.
- DownloadPWAButton: The button to download the app as a PWA.

## Running the tests

Jest is used for unit tests. You can run the tests with the following command: `npm test`.

## Deployment

To create a production build of the application, you can run npm run build. This will create a build directory with the optimized, minified bundle of the application.

## Built With

- React.js - The web framework used
- create-react-app - Tool used to bootstrap the project
- Service Workers API - Used to make the app a Progressive Web App
- Local Storage API - Provides access to a local storage
- Progressive Web Application (PWA) - Leverages modern web capabilities to deliver an app-like user experience

## Getting Started

1. Clone the repository
2. Install dependencies: npm install
3. Start the server: npm start

## Usage

import PomodoroTimer from './PomodoroTimer'

You can now use <PomodoroTimer /> in your React components.

## Credit

Owl Sound Effect
Creator: Pixabay
Link to asset: https://pixabay.com/sound-effects/owl-hooting-48028/

## License

This project is licensed under the MIT License
