import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Display from "./Display/Display";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/id/:id">
          <Display />
        </Route>
        <Route path="/*">
          <h1>Such Page Doesnt Exist</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
