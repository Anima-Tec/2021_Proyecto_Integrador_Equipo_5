/* eslint-disable no-restricted-globals */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test2() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const cm = document.getElementById('cm');
  const kg = document.getElementById('kg');

  const calc = () => {
    const arr = ['A', 'B', 'D', 'E'];
    if (kg.value !== '' && cm.value !== '') {
      const weight = kg.value;
      const height = cm.value / 100;
      const imc = weight / (height * height);
      if (imc < 18.5) {
        alert(`Peso inferior al normal ${imc}`);
        arr.insert(0, '0');
      } else if (imc >= 18.5 && imc <= 24.9) {
        arr.insert(0, 20);
        alert(`Peso normal ${imc}`);
      } else if (imc >= 25 && imc <= 29.9) {
        arr.insert(0, 20);
        alert(`Peso superior al normal ${imc}`);
      } else if (imc > 30) {
        arr.insert(0, '0');
        alert(`Obesidad ${imc}`);
      }
    } else {
      alert('Debes ingresar peso y altura.');
    }
    console.log(arr);
  };
  document.title = 'kiwi - test';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 1 / 8</span>
          <div>
            <h1 className={styles.question}>¡Comencemos!</h1>
            <div className="d-flex">
              <p className={styles.containerInput}>
                <label className={styles.label}>Altura (cm)</label>
                <input
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className={styles.input}
                  placeholder="Ingrese su altura"
                  name="cm"
                  autoComplete="off"
                  id="cm"
                />
              </p>
              <p className={styles.containerInput}>
                <label className={styles.label}>Peso (kg)</label>
                <input
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className={styles.input}
                  placeholder="Ingrese su peso"
                  name="kg"
                  autoComplete="off"
                  id="kg"
                />
              </p>
            </div>
          </div>
          <div>
            <Link to="/home">
              <button className={`${styles.button} ${styles.buttonGhost}`} type="submit">
                <span>Volver </span>
              </button>
            </Link>
            <Link to="/test3">
              <button className={styles.button} type="submit" onClick={calc}>
                <span>Siguiente </span>
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
