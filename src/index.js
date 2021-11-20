import "./css/body.css";
import "./css/app.css";
require("babel-core/register");
require("babel-polyfill");
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
