/* eslint-disable react/jsx-one-expression-per-line */
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
          <span className={styles.title}>PREGUNTA 6 / 8</span>
          <div>
            <h1 className={styles.question}>¿Cuántos tiempos de comida haces?</h1>
            <div className="d-flex justify-content-center mt-4">
              <p>
                <select name="select" className={styles.select}>
                  <option hidden selected disabled>
                    Elija una opción
                  </option>
                  <option value="value1">Menos de 2</option>
                  <option value="value2">3</option>
                  <option value="value3">4</option>
                  <option value="value4">5</option>
                  <option value="value5">Más de 6</option>
                </select>{' '}
              </p>
            </div>
          </div>
          <Link to="/test8">
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
