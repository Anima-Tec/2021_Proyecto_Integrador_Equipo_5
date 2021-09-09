import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/SignIn';

import NavRouter from './NavRoutes';

const Routes = () => (
  <Switch>
    <NavRouter path="/inicio">
      <Home />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>

    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
