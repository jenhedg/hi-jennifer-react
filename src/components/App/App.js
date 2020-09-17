import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalNav from "../container/GlobalNav";

import Home from "../pages/Home";
import Work from "../pages/Work";

import "../../index.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalNav location />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
