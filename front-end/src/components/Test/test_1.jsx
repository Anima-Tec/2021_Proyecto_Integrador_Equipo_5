/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function test1() {
  document.title = 'kiwi - test';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 1</span>
          <h1 className={styles.question}>¿Tienes una cuenta creada?</h1>
          <div style={{ marginBottom: '20px' }}>
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
        </form>
        <div className="col d-none d-sm-flex d-sm-none d-md-none d-flex d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
