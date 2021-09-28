/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';
import SessionController from '../../networking/controllers/SessionController';
import styles from './Login.module.scss';
import Ilustration from '../../assets/images/login.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const history = useHistory();

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

  const onSubmit = async (data) => {
    await SessionController.login(data.email, data.password);
    history.push('/test');
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: '100vh' }}>
        <div
          style={{ backgroundColor: '#F9FAE9' }}
          className="col d-none d-sm-flex d-sm-none d-md-flex d-flex d-md-none d-lg-flex justify-content-center align-items-center"
        >
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
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
                  autoComplete="off"
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
              <span>INGRESAR </span>
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
