/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */ // disableamos camelcase para que no nos de error en el client id
/* eslint-disable */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import ImcController from '../../networking/controllers/ImcController';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test2() {
  document.title = 'kiwi - test';
  const session = JSON.parse(localStorage.getItem('user')) || null;
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  function imc() {
      const client_id = session?.user?.client_id;
      ImcController.sendImc(client_id, height, weight);
  }
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 1 / 8</span>
          <div>
            <h1 className={styles.question}>┬íComencemos!</h1>
            <div className="d-flex">
              <p className={styles.containerInput}>
                <label className={styles.label}>Altura (cm)</label>
                <input
                  onChange={handleHeightChange}
                  className={styles.input}
                  placeholder="Ingrese su altura"
                  name="height"
                  autoComplete="off"
                  type="number"
                  min="1"
                />
              </p>
              <p className={styles.containerInput}>
                <label className={styles.label}>Peso (kg)</label>
                <input
                  onChange={handleWeightChange}
                  className={styles.input}
                  placeholder="Ingrese su peso"
                  name="weight"
                  autoComplete="off"
                  type="number"
                  min="1"
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
              <button className={styles.button} type="submit" onClick={() => imc(height, weight)}>
                <span>Siguiente </span>
              </button>
            </Link>
          </div>
        </form>
        <div className="col d-none d-sm-flex d-sm-none d-md-none d-flex d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustraci├│n" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
