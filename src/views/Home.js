import React from "react";
import Message from "./Message";
import News from "./News";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="side">
        <NavLink className="tags" to="/home/news">
          News
        </NavLink>
        <NavLink className="tags" to="/home/message">
          Message
        </NavLink>
      </div>
      <div className="home-route-content">
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
