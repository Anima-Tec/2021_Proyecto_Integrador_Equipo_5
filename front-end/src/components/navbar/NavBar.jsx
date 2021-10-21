/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown, Navbar, Nav, Form,
} from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg';
import styles from './navbar.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const authToken = localStorage.getItem('user') || null;
  const session = JSON.parse(localStorage.getItem('user')) || null;

  const logOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  useEffect(() => {
    authToken ? setIsLogged(true) : setIsLogged(false);
  }, [authToken]);

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Link to="/inicio">
        <img className={styles.logo} src={Logo} width="147" height="50" alt="logo" />
      </Link>
      {' '}
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'flex-end' }}>
        {isLogged ? (
          <Nav
            className="mr-auto my-2 my-lg-0 flex-row justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Dropdown>
              <Dropdown.Toggle className={styles.user} variant="success" id="dropdown-basic">
                <label className={styles.message}>{session?.user?.name}</label>
                <label className={styles.message}>{session?.user?.last_name}</label>
                {' '}
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.contentDropdown}>
                <Dropdown.Item className={styles.dropdown} onClick={logOut}>
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        ) : (
          <Form className="d-flex justify-content-end mt-2">
            <Link to="/login">
              <button className={styles.button} type="submit">
                INICIAR SESIÓN
              </button>
            </Link>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
