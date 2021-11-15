/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test9() {
  document.title = 'kiwi - test';

  let [fruitFrec, setFruitFrec] = React.useState();

  const getFruitFrec = (event) => {
    fruitFrec = setFruitFrec(event.target.value);
  };

  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 8 / 8</span>
          <div>
            <h1 className={styles.question}>¿Comes frutas diariamente?</h1>
            <div className="d-flex justify-content-center mt-4">
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${styles.check}`}
                  onChange={getFruitFrec}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Si"
                />
                <label className={styles.label} htmlFor="inlineRadio1">
                  Si
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${styles.check}`}
                  onChange={getFruitFrec}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="No"
                />
                <label className={styles.label} htmlFor="inlineRadio2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div>
            <Link to="/test8">
              <button className={`${styles.button} ${styles.buttonGhost}`} type="submit">
                <span>Volver </span>
              </button>
            </Link>
            <Link to="/result">
              <button className={styles.button} type="submit">
                <span>Terminar </span>
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
