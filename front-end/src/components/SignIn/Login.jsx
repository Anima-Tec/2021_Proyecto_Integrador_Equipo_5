/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';
import SessionController from '../../networking/controllers/UserController';
import styles from './Login.module.scss';
import back from '../../assets/images/return.png';
import Spinner from '../Spinner/Spinner';
import Ilustration from '../../assets/images/login.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email('Email invalido').required('Campo requerido'),
    password: yup.string().required('Campo requerido'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await SessionController.login(data.email, data.password);
      history.push('/inicio');
      window.location.reload();
    } catch (error) {
      setLoading(false);
      setError('general', { message: error.message });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: '100vh' }}>
        <div
          style={{ backgroundColor: '#F9FAE9' }}
          className="col d-none d-sm-flex d-sm-none d-md-flex d-flex d-md-none d-lg-flex justify-content-center align-items-center"
        >
          <img
            src={Ilustration}
            alt="Ilustración"
            className={`animate__animated animate__backInLeft ${styles.img}`}
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <div className="d-flex">
                <Link to="/inicio">
                  <img src={back} alt="volver" className={styles.return} />
                </Link>
                <h1 className={styles.title}>Iniciar sesión</h1>
              </div>
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
                <span className={styles.error}>{errors.email?.message}</span>
              </p>
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
                <span className={styles.error}>{errors.password?.message}</span>
              </p>
            </div>
            <button className={styles.button} type="submit" disabled={loading}>
              {loading ? <Spinner /> : <span>INGRESAR </span>}
            </button>
            <p className={styles.p}>
              Eres nuevo?
              {' '}
              <Link to="/register" className={styles.link}>
                Registrarse
              </Link>
            </p>
            <p className={styles.error}>{errors.general?.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
