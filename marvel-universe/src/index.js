import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from 'react-router-dom'


import App from './App';
// set up provider
import {reducer} from './store/reducers/reducer';
// create store passing in rootReducer as first arg and applyMiddleware as second
// middleware consumes thunk as its first arg and logger as second.
const store = createStore(reducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
