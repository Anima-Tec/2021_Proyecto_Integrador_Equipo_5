/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../assets/images/logo.svg';
import styles from './navbar.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const user = localStorage.key('user');
  const [isLogged, setIsLogged] = useState(false);
  const authToken = localStorage.getItem('user') || null;

  let { current: toggleRef } = useRef();
  function toggleOnResize() {
    if (window.innerWidth < 1000) {
      toggleRef = () => {
        document.querySelector('#navbarSupportedContent').classList.toggle('show');
      };
    }
  }

  function toggle() {
    if (toggleRef) {
      toggleRef();
    }
  }

  useEffect(() => {
    window.addEventListener('resize', toggleOnResize);
  });

  useEffect(() => {
    authToken ? setIsLogged(true) : setIsLogged(false);
  }, [authToken]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <Link to="/inicio">
        <img className={styles.logo} src={Logo} width="147" height="50" alt="logo" />
      </Link>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => toggle()}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${styles.nogrow}`} id="navbarSupportedContent">
        {isLogged ? (
          <form className="form-inline d-flex my-2 my-lg-0 d-flex">
            <Dropdown>
              <Dropdown.Toggle className={styles.user} variant="success" id="dropdown-basic">
                <label className={styles.message}>Hola,</label>
                <label className={styles.message}>{user}</label>
                {' '}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className={styles.dropdown}>Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </form>
        ) : (
          <form className="form-inline d-flex my-2 my-lg-0 d-flex">
            <label className={styles.label}>¿Ya tienes una cuenta creada?</label>
            <Link to="/login">
              <button className={styles.button} type="submit">
                INICIAR SESIÓN
              </button>
            </Link>
          </form>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
