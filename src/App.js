import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Record, Home } from "./components";
import "./App.css";

function App() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/record'>Record</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/record'>
                <Record />
              </Route>
            </Switch>
          </div>
        </Router>
    );
}

export default App;
