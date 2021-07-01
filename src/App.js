import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Nomatch, PrivateRoute } from "./components";
import { InboundFiles, OutboundFiles } from "./components";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/inbound" component={InboundFiles} />
          <PrivateRoute exact path="/outbound" component={OutboundFiles} />
          <Route exact path="/" component={Login} />
          <Route exact path="*" component={Nomatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
