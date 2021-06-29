import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Nomatch } from "./Components";
import { InboundFiles, OutboundFiles } from "./Components";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
