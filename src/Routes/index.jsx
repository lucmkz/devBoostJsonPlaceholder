import React from "react";
import { Switch, Route } from "react-router-dom";

// import Route from '../Routes';

import Users from "../Pages/Users";
import Tasks from "../Pages/Tasks";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/tasks/:id+" component={Tasks} />
  </Switch>
);

export default Routes;
