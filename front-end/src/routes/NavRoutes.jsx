import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavRoutes = ({ path, children }) => (
  <Route path={path}>
    {children}
  </Route>
);

NavRoutes.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavRoutes;
