/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory /* , Link  */ } from 'react-router-dom';
import SessionController from '../../../networking/controllers/UserController';
import styles from './Register.module.scss';
import Ilustration from '../../../assets/images/test.svg';
import 'animate.css';
import profile from '../../../assets/images/profile.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  document.title = 'kiwi - registro';
  const history = useHistory();

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Debe tener más de 8 caracteres')
      .required('Campo requerido'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Confirmar contraseña es requerido'),
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
      await SessionController.register(data.password, data.confirmPassword);
      history.push('/');
    } catch (error) {
      setError('general', { message: error.message });
    }
  };

  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.content}>
              <img className={styles.profile} src={profile} alt="profile" />
            </div>
            <h1 className={styles.title}>Perfecto, continuemos!</h1>
            <p>
              <input
                className={styles.input}
                placeholder="Contraseña"
                type="password"
                name="password"
                autoComplete="off"
                {...register('password')}
              />
              <span className={styles.error}>{errors.password?.message}</span>
            </p>
            <p>
              <input
                className={styles.input}
                placeholder="Confirmar contraseña"
                type="password"
                name="confirmPassword"
                autoComplete="off"
                {...register('confirmPassword')}
              />
              <span className={styles.error}>{errors.confirmPassword?.message}</span>
            </p>
            <button className={styles.button} type="submit">
              <span>CONTINUAR </span>
            </button>
          </form>
        </div>
        <div className="col d-none d-sm-flex d-sm-none d-md-flex d-flex  d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
