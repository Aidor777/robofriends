import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { searchRobots, requestRobots } from "./store/reducers";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
