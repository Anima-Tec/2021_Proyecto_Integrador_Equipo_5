/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test6() {
  document.title = 'kiwi - test';

  const [foodType, setFoodType] = useState();
  const getFoodType = (event) => {
    setFoodType(event.target.value);
  }
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 5 / 8</span>
          <div>
            <h1 className={styles.question}>Cuando pido comida elijo opciones...</h1>
            <div className="d-flex justify-content-center mt-4">
              <p>
                <select name="select" className={styles.select} onChange={getFoodType}>
                  <option hidden selected disabled>
                    Elija una opción
                  </option>
                  <option value="Saludables">Saludables</option>
                  <option value="Chatarra">Chatarra</option>
                  <option value="No-pido-comida">No pido comida</option>
                </select>{' '}
              </p>
            </div>
          </div>
          <Link to="/test7">
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
