/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function test2() {
  document.title = 'kiwi - test';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 2</span>
          <div style={{ marginBottom: '20px' }}>
            <p>
              <label className={styles.label}>Altura (cm)</label>
            </p>
            <p>
              <input
                className={styles.input}
                placeholder="Ingrese su altura"
                name="height"
                autoComplete="off"
              />
            </p>
            <p>
              <label className={styles.label}>Peso (kg)</label>
            </p>
            <p>
              <input
                className={styles.input}
                placeholder="Ingrese su peso"
                name="weight"
                autoComplete="off"
              />
            </p>
            <Link to="/register">
              <button className={styles.button} type="submit">
                <span>Continuar </span>
              </button>
            </Link>
          </div>
        </form>
        <div className="col d-none d-sm-flex d-sm-none d-md-flex d-flex  d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
