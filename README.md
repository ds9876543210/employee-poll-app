# Would You Rather... Employee Poll Project

This is the final assessment project for Udacity's React Fundamentals course. This project is a react web app that hosts and allow users to poll different questions. It provides user the option to participate in a poll and select their answer options for the different polls, it also allows users to create and host their own polls. It even provides a dashboard to see the top users who have participated across different polls and also the visibility to track the question details.

This project covers Udacity React Nanodegree course concepts like components, hooks, states, browser routing, etc. and defines the efficient use of these.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
    This would install all the required npm libraries and create the backbone to run this react application.
- start the development server with `npm start`
    This would start the react server, so that the application can be accessed by a web browser.
- install react router with `npm install -save react-router-dom`
    This is required to install all the dependencies and libraries to support the browser routing capabilities that makes the application more user friendly and supports browser navigation.

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── actions # contains all the action files
    │   ├── authenticateUser.js # login user related actions
    │   ├── questions.js # question related actions
    │   ├── shared.js # common shared actions
    │   └── users.js # user related actions
    ├── middlewares # contains the middleware files
    │   ├── index.js # default file
    │   └── logger.js # logging middleware
    ├── reducers # contains all the reducer files
    │   ├── authenticateUser.js # login user related reducers
    │   ├── questions.js # question related reducers
    │   ├── index.js # dafault file
    │   └── users.js # user related reducers
    ├── utils # contains all the helper files and data/API file
    │   ├── _DATA.js # data file(data from file is user for this project)
    │   └── api.js # api's to support different operations
    └── components # Contains all the sub components for the project.
        ├── App.css # Styles for your app. Feel free to customize this as you desire.
        ├── App.js # This is the root of your app. 
        ├── Dashboard.js # Contains dahsboard component
        ├── ErrorPage.js # Component for error page to be displayed
        ├── LeaderView.js # Leader View component
        ├── Login.js # Login page component
        ├── NavigationBar.js # navigation Bar component
        ├── NewQuestion.js # New Question section component
        ├── Question.js # Question view component
        └── QuestionInfo.js # Question detail view component

```

## APIs

To access the data from _DATA file, we have created an api.js to support easy access:

### `getInitialDataInfo`

Method Signature:

```js
getInitialDataInfo();
```

- Returns a Promise which resolves to a JSON object containing a collection of user an question/answer related initial data.
- In collects all the initial data mainly used by state

### `saveQuestion`

Method Signature:

```js
saveQuestion(question);
```

- question: `<Object>` containing the new question object with its two possible answers
- Saves the question in the data.

### `saveQuestionAnswer`

Method Signature:

```js
saveQuestionAnswer(authedUser, qid, answer);
```

- authedUser: Id of user logged in.
- qid: Id of question being answered
- answer: answer selected by the user
- Saves the response for the question by the user.


## Author
- [Dhruv Sharma] - Built upon he inital code base to meet all the functional and non-functional requirements of the project.