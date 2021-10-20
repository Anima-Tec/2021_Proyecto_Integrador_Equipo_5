/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test2() {
  document.title = 'kiwi - test';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 4 / 8</span>
          <div>
            <h1 className={styles.question}>¿Tenes una dieta de descenso de peso?</h1>
            <div className="d-flex justify-content-center mt-4">
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${styles.check}`}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className={styles.label} htmlFor="inlineRadio1">
                  Si
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${styles.check}`}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className={styles.label} htmlFor="inlineRadio2">
                  No
                </label>
              </div>
            </div>
          </div>
          <Link to="/test6">
            <button className={styles.button} type="submit">
              <span>Siguiente </span>
            </button>
          </Link>
        </form>
        <div className="col d-none d-sm-flex d-sm-none d-md-none d-flex d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
