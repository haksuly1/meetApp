import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
//import * as atatus from 'atatus-spa';

//atatus.config('AIzaSyAozvbNX9z2Or14N9x8DL-7d5Jw5qeR5hM').install();
//import * as serviceWorker from './serviceWorker';
import * as atatus from 'atatus-js';
atatus.config('81b6fba18bcb472eb25f4755396446b5').install();

//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
//serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//atatus.notify(new Error('Test Atatus Setup'));