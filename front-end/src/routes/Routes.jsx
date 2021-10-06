/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Test from '../pages/Test';
import NavBar from '../components/navbar/NavBar';
import Register from '../components/Test/Register/Register_1';
import Register2 from '../components/Test/Register/Register_2';
import Register3 from '../components/Test/Register/Register_3';

import NavRouter from './NavRoutes';

const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);
  const authToken = localStorage.getItem('user') || null;

  useEffect(() => {
    authToken ? setIsLogged(true) : setIsLogged(false);
  }, [authToken]);

  return (
    <Switch>
      {isLogged ? (
        <>
          <NavRouter path="/inicio">
            <NavBar />
            <Home />
          </NavRouter>
        </>
      ) : (
        <>
          <NavRouter path="/inicio">
            <NavBar />
            <Home />
          </NavRouter>
          <NavRouter path="/login">
            <Login />
          </NavRouter>
          <NavRouter path="/test">
            <NavBar />
            <Test />
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
        </>
      )}
      <Route path="/">
        <NavBar />
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
