import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Nomatch } from "./Components";
import { InboundFiles, OutboundFiles } from "./Components";
import Tablee from "./Components/Table/Table.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/inbound" component={InboundFiles} />
          <Route exact path="/outbound" component={OutboundFiles} />
          <Route exact path="/" component={Login} />
          <Route exact path="*" component={Nomatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
