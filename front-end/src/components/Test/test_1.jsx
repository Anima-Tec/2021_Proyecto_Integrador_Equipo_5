/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';
import profile from '../../assets/images/profile.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  document.title = 'kiwi - test';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img src={profile} alt="Ilustración" />
          <h1 className={styles.title}>
            Hola, soy Paloma
            <br />
            {' '}
            ¿Tienes una cuenta creada?
          </h1>
          <div>
            <Link to="/login">
              <button className={styles.button} type="button">
                <span>SI </span>
              </button>
            </Link>
            <Link to="/register">
              <button className={styles.button} type="button">
                <span>NO </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col d-none d-sm-flex d-sm-none d-md-flex d-flex  d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
