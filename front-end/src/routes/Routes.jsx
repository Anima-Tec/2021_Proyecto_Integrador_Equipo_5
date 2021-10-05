/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Test from '../pages/Test';
import NavBar from '../components/navbar/NavBar';
import Register from '../components/Test/Register/Register_1';
import Register2 from '../components/Test/Register/Register_2';
import Register3 from '../components/Test/Register/Register_3';

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
    <NavRouter path="/register">
      <NavBar />
      <Register />
    </NavRouter>
    <NavRouter path="/register2">
      <NavBar />
      <Register2 />
    </NavRouter>
    <NavRouter path="/register3">
      <NavBar />
      <Register3 />
    </NavRouter>

    <Route path="/">
      <NavBar />
      <Home />
    </Route>
  </Switch>
);

export default Routes;
