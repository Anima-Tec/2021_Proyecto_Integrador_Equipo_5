/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Link } from 'react-router-dom';
import ImcController from '../../networking/controllers/ImcController';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test2() {
  document.title = 'kiwi - test';
  const session = JSON.parse(localStorage.getItem('user')) || null;

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleChange = (event) => {
    setHeight(event.target.value);
  };

  const handleChange2 = (event) => {
    setWeight(event.target.value);
  };

  function imc(height, weight) {
    try {
      if(height && weight) {
        const client_id = session?.user?.client_id;
        height = parseInt(height);
        weight = parseInt(weight);
        console.log(client_id, height, weight);
        ImcController.sendImc(client_id, height, weight);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          /*onSubmit={this.onSubmit(height, weight)}*/
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
        >
          <span className={styles.title}>PREGUNTA 1 / 8</span>
          <div>
            <h1 className={styles.question}>¡Comencemos!</h1>
            <div className="d-flex">
              <p className={styles.containerInput}>
                <label className={styles.label}>Altura (cm)</label>
                <input
                  className={styles.input}
                  placeholder="Ingrese su altura"
                  name="height"
                  autoComplete="off"
                  onChange={handleChange}
                  type="number"
                  min="0"
                />
              </p>
              <p className={styles.containerInput}>
                <label className={styles.label}>Peso (kg)</label>
                <input
                  className={styles.input}
                  placeholder="Ingrese su peso"
                  name="weight"
                  autoComplete="off"
                  onChange={handleChange2}
                  type="number"
                  min="0"
                />
              </p>
            </div>
          </div>
          <Link to="/test3">
            <button className={styles.button} type="submit" onClick={() => imc(height, weight)}>
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
