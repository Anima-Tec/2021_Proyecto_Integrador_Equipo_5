/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Ilustration from '../../assets/images/home.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: '80vh' }}>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className={styles.title}>¿Crees tener un buen estado nutricional?</h1>
          <label className={styles.body}>
            Al finalizar este test avalado y controlado por profesionales, podrás comprobar tu salud
            nutricional y descubrir como poder mejorar tu alimentacion diaria. Desde el equipo de
            KIWI te estaremos apoyando y ayudando durante todo el proceso.
          </label>
          <Link className="w-100" to="/test">
            <button className={styles.button} type="button">
              REALIZAR TEST
            </button>
          </Link>
        </div>
        <div className="col d-none d-sm-flex d-sm-none d-md-flex d-flex  d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
