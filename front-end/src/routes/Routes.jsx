/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Test from '../pages/Test';
import Test2 from '../components/Test/test_2';
import NavBar from '../components/navbar/NavBar';
import Register from '../components/Register/Register';

import NavRouter from './NavRoutes';

const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);
  const authToken = localStorage.getItem('user') || null;

  useEffect(() => {
    authToken ? setIsLogged(true) : setIsLogged(false);
  }, [authToken]);

  return isLogged ? (
    <Switch>
      <Redirect from="/" to="/inicio" exact />
      <NavRouter path="/inicio" exact>
        <NavBar />
        <Home />
      </NavRouter>
      <NavRouter path="/test" exact>
        <NavBar />
        <Test2 />
      </NavRouter>
      <Route>
        <Redirect to="/inicio" exact />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Redirect from="/" to="/inicio" exact />
      <NavRouter path="/inicio" exact>
        <NavBar />
        <Home />
      </NavRouter>
      <NavRouter path="/login" exact>
        <Login />
      </NavRouter>
      <NavRouter path="/test" exact>
        <NavBar />
        <Test />
      </NavRouter>
      <NavRouter path="/register" exact>
        <Register />
      </NavRouter>
      <Route>
        <Redirect to="/inicio" exact />
      </Route>
    </Switch>
  );
};

export default Routes;
