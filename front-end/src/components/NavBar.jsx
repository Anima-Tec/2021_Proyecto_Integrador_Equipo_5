/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/inicio">
      <img src={Logo} width="147" height="50" alt="logo" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="form-inline d-flex my-2 my-lg-0">
        <label>¿Ya tienes una cuenta creada?</label>
        <Link to="/login">
          <button className="" type="submit">
            INICIAR SESION
          </button>
        </Link>
      </form>
    </div>
  </nav>
);

export default NavBar;
