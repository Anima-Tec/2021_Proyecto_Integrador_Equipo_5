/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';
import SessionController from '../../networking/controllers/UserController';
import styles from './Register.module.scss';
import back from '../../assets/images/return.png';
import Spinner from '../Spinner/Spinner';
import Ilustration from '../../assets/images/login.svg';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required('Campo requerido'),
    last_name: yup.string().required('Campo requerido'),
    email: yup.string().email('Email invalido').required('Campo requerido'),
    date_birth: yup
      .string()
      .required('Campo requerido')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Fecha de nacimiento inválida'),
    password: yup.string().min(8, 'Debe tener más de 8 caracteres').required('Campo requerido'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Campo requerido'),
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
      await SessionController.register(
        data.name,
        data.last_name,
        data.email,
        data.date_birth,
        data.password,
        data.password_confirmation,
      );
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
                <Link to="/">
                  <img src={back} alt="volver" className={styles.return} />
                </Link>
                <h1 className={styles.title}>Registrarse</h1>
              </div>
              <div className="d-flex">
                <p className={`w-50 ${styles.padding}`}>
                  <input
                    className={styles.input}
                    placeholder="Nombre"
                    name="text"
                    autoComplete="off"
                    {...register('name')}
                  />
                  <span className={styles.error}>{errors.name?.message}</span>
                </p>
                <p className={`w-50 ${styles.padding}`}>
                  <input
                    className={styles.input}
                    placeholder="Apellido"
                    name="last_name"
                    type="text"
                    {...register('last_name')}
                  />
                  <span className={styles.error}>{errors.last_name?.message}</span>
                </p>
              </div>
              <div className="d-flex">
                <p className={`w-50 ${styles.padding}`}>
                  <input
                    className={styles.input}
                    placeholder="Email"
                    name="email"
                    {...register('email')}
                  />
                  <span className={styles.error}>{errors.email?.message}</span>
                </p>
                <p className={`w-50 ${styles.padding}`}>
                  <input
                    className={styles.input}
                    placeholder="Fecha de nacimiento"
                    name="date_birth"
                    type={isDate ? 'date' : 'text'}
                    id="date"
                    onFocus={() => setIsDate(true)}
                    onBlur={() => setIsDate(false)}
                    {...register('date_birth')}
                  />
                  <span className={styles.error}>{errors.date_birth?.message}</span>
                </p>
              </div>
              <div className="d-flex">
                <p className={`w-50 ${styles.padding}`}>
                  <input
                    className={styles.input}
                    placeholder="Contraseña"
                    name="password"
                    type="password"
                    {...register('password')}
                  />
                  <span className={styles.error}>{errors.password?.message}</span>
                </p>
                <p className={`w-50 ${styles.padding}`}>
                  <input
                    className={styles.input}
                    placeholder="Confirmar contraseña"
                    name="password_confirmation"
                    type="password"
                    {...register('password_confirmation')}
                  />
                  <span className={styles.error}>{errors.password_confirmation?.message}</span>
                </p>
              </div>
            </div>
            <button className={styles.button} type="submit" disabled={loading}>
              {loading ? <Spinner /> : <span>REGISTRARSE </span>}
            </button>
            <p className={styles.p}>
              Tienes una cuenta?{' '}
              <Link to="/login" className={styles.link}>
                Iniciar sesión
              </Link>
            </p>
            <p className={styles.error}>{errors.general?.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
