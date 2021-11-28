# Zendesk Coding Challenge

Zendesk is a customer service tool that allows the creation and management of support tickets.
Your company needs you to build a Ticket Viewer that will:
- Connect to the Zendesk API
- Request all the tickets for your account
- Display them in a list
- Display individual ticket details
- Page through tickets when more than 25 are returned

## Installation & Usage Instructions

To run the application, your machine would need to have all the packages
Pre-requisites:
- [Node.js](https://nodejs.org/)
- Terminal ([Git Bash](https://git-scm.com/downloads)/Powershell/cmd/Linux terminal)
- [npm](https://www.npmjs.com/) 

## Installation

Dillinger requires  v10+ to run.

Check for node and npm, move to the root directory, install the dependencies and devDependencies and start the server.

```sh
node -v
npm -v
cd zicodech-p1-2021
npm install
npm start
```
To see the test cases use either of the following commands..

```sh
npm test #Runs test cases in CLI
CI=true npm test -- --env=jsdom --coverage #GUI Version of test cases
```

## Usage Information:

- The application uses the *OAuth Client Token* which is stored in the .env file in the root directory
- I have used ```/tickets``` API to fetch the tickets and display it in a custom table developed using flex box
- In the table I have used micro component - User to load the user data from the ```user/:id``` API and display his name
- I have used SCSS to style as it is easy to create variables and import it wherever needed
- Also I have used FontAwesome & Bootstrap for icons and some well-built CSS instead of writing everything from scratch given a week time


## Packages used

| Plugin | Usage | Version |
| ------ | ------ | ------ |
| axios | Make request from the Browser to Zendesk API Endpoints | 0.24.0 |
| node-sass | SCSS compiler | 6.0.1 |
| notistack | Display messages using a Snackbar | 2.0.3 |
| react | Application Development Framework | 17.0.2 |
| react-avatar | Used while showing User name first letters | 4.0.0 |
| react-loader-spinner | Quick loading spinner while loading pages | 4.0.0 |
| react-tooltip | Show tooltips in sidebar/menubar while hovering the icons | 4.2.21 |
| typescript | Used for a type strict development | 4.5.2 |


**Developed by Mugundh Muthuvel**