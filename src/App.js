import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Nomatch } from "./components";
import { InboundFiles, OutboundFiles } from "./components";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      {/*<Table />
      Table component is incomplete as of now, will configure properly once I
      get the response from API. For now have just added basic table format
      and dummy data*/}
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
