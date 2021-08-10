import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import NavRouter from './NavRoutes';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
