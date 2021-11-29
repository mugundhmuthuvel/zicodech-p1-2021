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
- Desktop / PC (Application is currently not built with a responsive design)
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
- First page is the dashboard, and its just a simple landing page.
- Second is the Tickets page, where ```/tickets``` API endpoint is hit to fetch all the requests from the account
- Third, In every ticket row displayed in the table, an expand icon will be displayed, which on clicked will take you to the ticket detail page. where every ticket can be viewed in detail. And to return to the table, either the tickets icon in the side bar or the Back text link in the ticket detail page can be clicked.

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

## What I could have done
I could have made the application a little better by:
- Making the app responsive, so that it can be viewed across all the devices - Mobile Tablet Desktop.
- Made use of Redux for better sharing of data between components such as using the redux loaded data in the User component to reduce the number of calls being made to the server.
- Authentication. I have used a very basic authentication mechanism and it just checks if there is an access token available, if so I lead them to the tickets list page. Instead, I should have checked whether the authentication token is valid and if not, I should redirect them to the login page again
- Pagination. I liked the way my Gmail pagination works. So I have used the same feature here instead of implementing the page numbers listed as button and few hidden pages and then last page.
- Colors. As I like simple flat and dark color I chose the dark grey and green. Coincidentally or under the influence of the Zendesk logo, it matched the colors in the dashboard some what.
- Use of any. Using any is actually a bad way of developing using typescript. But unfortunately I was spending more time in doing that. Hence I decided to go with it in a few places.

These are excuses, I understand. With the given time I was able to do very less justice to the application as I had my assignments and semester right around the corner. My sincere apologies for the excuses.

**Developed by Mugundh Muthuvel**