/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import Ilustration from '../../assets/images/login.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().email('Email invalido').required('Campo requerido'),
    password: yup.string().required('Campo requerido'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: '100vh' }}>
        <div
          className="col d-none d-sm-flex d-sm-none d-md-flex d-flex justify-content-center align-items-center"
        >
          <img src={Ilustration} alt="Ilustración" className={styles.img} />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <h1 className={styles.title}>Iniciar sesión</h1>
              <p>
                <label className={styles.label}>Email</label>
              </p>
              <p>
                <input
                  className={styles.input}
                  placeholder="Ingrese su email"
                  name="email"
                  {...register('email')}
                />
              </p>
              <p className={styles.error}>{errors.email?.message}</p>
              <p>
                <label className={styles.label}>Contraseña</label>
              </p>
              <p>
                <input
                  className={styles.input}
                  placeholder="Ingrese su contraseña"
                  name="password"
                  type="password"
                  {...register('password')}
                />
              </p>
              <p className={styles.error}>{errors.password?.message}</p>
            </div>
            <button className={styles.button} type="submit">
              INGRESAR
            </button>
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
