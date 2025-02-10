import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./Store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

const set = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const browserStore = {
  set,
  get,
};
root.render(
  
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  
);
