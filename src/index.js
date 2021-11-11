import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './store';
import "./styles.css";
import {Provider} from 'react-redux';

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode);