# React Typescript App Boilerplate

A boilerplate/starter project for quickly building React projects using Typescript, Material UI, React Router and more.

By running a single command, you will get a production-ready React App installed and fully configured on your machine.

## Quick Start

To create a project, simply run:

```bash
npx @pelusa/create-react-ts-boilerplate <project-name>
```

Or

```bash
npm init nodejs-express-app <project-name>
```

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone --depth 1 https://github.com/tomascatena/react-boilerplate
cd react-boilerplate
npx rimraf ./.git
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Structure

```
src\
 |--assets\         # Globally available assets like images, svgs, videos, etc
 |--components\     # Components used in the project
 |--constants\      # Constants like API Endpoints, routes, etc
 |--hooks\          # Custom React hooks
 |--pages\          # All the pages of the project
 |--store\          # Redux store
 |--themes\         # MUI themes
 |--typings\        # Types
 |--App.js          # React app
 |--index.js        # App entry point
```

## Inspirations

- [React Colors Project by Colt Steele](https://github.com/Colt/react-colors)
- [Flat UI Colors](https://flatuicolors.com/palette/defo)
- [Material UI Colors](https://materialuicolors.co/?utm_source=launchers)