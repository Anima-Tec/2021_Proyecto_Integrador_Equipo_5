/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().email('Email invalido').required('Campo requerido'),
    password: yup.string().required('Campo requerido'),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="containter-fluid">
      <div className="row section">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div>
            <img className="img-fluid" src="../img/palomitas.jpg" alt="" />
          </div>
        </div>
        <div className="col-6">
          <h1 className={styles.title}>Iniciar sesión</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>
                <label className={styles.label}>
                  Email
                </label>
              </p>
              <p>
                <input className={styles.input} placeholder="email" name="email" type="email" {...register('email')} />
              </p>
              <p>
                <label className={styles.label}>
                  Contraseña
                </label>
              </p>
              <p>
                <input className={styles.input} placeholder="password" name="password" type="password" {...register('password')} />
              </p>
            </div>
            <button className={styles.button} type="submit">INGRESAR</button>
            <p className={styles.p}>
              Eres nuevo?
              {' '}
              <Link to="/test" className={styles.link}>
                Realizar test
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
