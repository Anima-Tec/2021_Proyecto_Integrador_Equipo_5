import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Foro from '../pages/Foro';
import Informative from '../pages/Informative';

import NavRouter from './NavRoutes';

const Routes = () => (
  <Switch>
    <NavRouter path="/inicio">
      <Home />
    </NavRouter>
    <NavRouter path="/informativa">
      <Informative />
    </NavRouter>
    <NavRouter path="/foro">
      <Foro />
    </NavRouter>

    <Route path="/">
      <NavBar />
      <Home />
    </Route>
  </Switch>
);

export default Routes;
