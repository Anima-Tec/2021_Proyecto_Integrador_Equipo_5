/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
/* import { Link } from 'react-router-dom';
 */ import styles from './Register.module.scss';
import Ilustration from '../../../assets/images/test.svg';
import 'animate.css';
import profile from '../../../assets/images/profile.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <form className={styles.form}>
            <img className={styles.profile} src={profile} alt="Ilustración" />
            <h1 className={styles.title}>Perfecto, continuemos!</h1>
            <p>
              <input
                className={styles.input}
                placeholder="Nombre"
                name="email"
                autoComplete="off"
              />
            </p>
            <p>
              <input
                className={styles.input}
                placeholder="Apellido"
                name="email"
                autoComplete="off"
              />
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
