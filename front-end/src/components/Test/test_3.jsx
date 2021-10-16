/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Test.module.scss';
import Ilustration from '../../assets/images/test.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test3() {
  const schema = yup.object().shape({
    weight: yup.number().required('Campo requerido'),
    height: yup.number().required('Campo requerido'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  document.title = 'kiwi - test';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form
          className={`col d-flex flex-column justify-content-center align-items-center ${styles.form}`}
          onSubmit={handleSubmit}
        >
          <span className={styles.title}>PREGUNTA 3</span>
          <div>
            <div className="d-flex">
              <p className={styles.containerInput}>
                <label className={styles.label}>Altura (cm)</label>
                <input
                  className={styles.input}
                  placeholder="Ingrese su altura"
                  name="height"
                  autoComplete="off"
                  {...register('height')}
                />
                <span className={styles.error}>{errors.height?.message}</span>
              </p>
              <p className={styles.containerInput}>
                <label className={styles.label}>Peso (kg)</label>
                <input
                  className={styles.input}
                  placeholder="Ingrese su peso"
                  name="weight"
                  autoComplete="off"
                  {...register('weight')}
                />
                <span className={styles.error}>{errors.weight?.message}</span>
              </p>
            </div>
          </div>
          <Link to="/test4">
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
