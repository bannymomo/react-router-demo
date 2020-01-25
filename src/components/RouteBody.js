import React from "react";
import Home from "../views/Home";
import Service from "../views/Service";
import About from "../views/About";
import Contact from "../views/Contact";
import { Route, Switch, Redirect } from "react-router-dom";
function RouteBody() {
  return (
    <div className="route-body">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default RouteBody;
