import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./Article";
import Redirect from "../Components/Redirect";

export default function Routes() {
  return (
    <Router>
      <div className="App ">
        <Switch>
          <Route path="/Redirect">
            <Redirect />
          </Route>
          <Route path="/">
            <Article />
          </Route>
        </Switch>
      </div>
      <></>
    </Router>
  );
}
