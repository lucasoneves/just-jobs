import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";

// Provider inject the Store into react components
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import counterReducer from "./store/reducers/counter";
import offersReducer from './store/reducers/offers';

const store = createStore(counterReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
