/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Test from '../components/Test/part1';
import Test2 from '../components/Test/part2';
import Test3 from '../components/Test/part3';
import Test4 from '../components/Test/part4';
import Test5 from '../components/Test/part5';
import Test6 from '../components/Test/part6';
import Test7 from '../components/Test/part7';
import Test8 from '../components/Test/part8';
import Test9 from '../components/Test/part9';
import Result from '../components/Test/result';
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
      <NavRouter path="/test2">
        <NavBar />
        <Test2 />
      </NavRouter>
      <NavRouter path="/test3">
        <NavBar />
        <Test3 />
      </NavRouter>
      <NavRouter path="/test4">
        <NavBar />
        <Test4 />
      </NavRouter>
      <NavRouter path="/test5">
        <NavBar />
        <Test5 />
      </NavRouter>
      <NavRouter path="/test6">
        <NavBar />
        <Test6 />
      </NavRouter>
      <NavRouter path="/test7">
        <NavBar />
        <Test7 />
      </NavRouter>
      <NavRouter path="/test8">
        <NavBar />
        <Test8 />
      </NavRouter>
      <NavRouter path="/test9">
        <NavBar />
        <Test9 />
      </NavRouter>
      <NavRouter path="/result">
        <NavBar />
        <Result />
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
      <NavRouter path="/test1" exact>
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
