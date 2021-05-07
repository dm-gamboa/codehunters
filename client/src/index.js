import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Splash from "./pages/Splash";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// TO DO
// ADD SPLASH PAGE / WALKTHROUGH ROUTING
ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path={["/"]} render={() => <Splash />} />
        <Route path={["/:page", "/:page/:subPage"]} render={() => <App />} />
      </Switch>
    </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
