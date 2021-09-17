import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Test from '../pages/Test';
import NavBar from '../components/navbar/NavBar';

import NavRouter from './NavRoutes';

const Routes = () => (
  <Switch>
    <NavRouter path="/inicio">
      <NavBar />
      <Home />
    </NavRouter>
    <NavRouter path="/test">
      <NavBar />
      <Test />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>

    <Route path="/">
      <NavBar />
      <Home />
    </Route>
  </Switch>
);

export default Routes;
