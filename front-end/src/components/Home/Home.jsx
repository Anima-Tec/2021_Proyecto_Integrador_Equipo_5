/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Ilustration from '../../assets/images/home.svg';

import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const authToken = localStorage.getItem('user') || null;

  useEffect(() => {
    authToken ? setIsLogged(true) : setIsLogged(false);
  }, [authToken]);

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className={`row ${styles.row}`}>
        <div className="col d-flex flex-column justify-content-center">
          <h1 className={styles.title}>¿Crees tener un buen estado nutricional?</h1>
          <label className={styles.body}>
            Al finalizar este test avalado y controlado por profesionales, podrás comprobar tu salud
            nutricional y descubrir como poder mejorar tu alimentacion diaria. Desde el equipo de
            KIWI te estaremos apoyando y ayudando durante todo el proceso.
          </label>
          {isLogged ? (
            <Link className={styles.btnContainer} to="/test2">
              <button className={styles.button} type="button">
                REALIZAR TEST
              </button>
            </Link>
          ) : (
            <Link className={styles.btnContainer} to="/test1">
              <button className={styles.button} type="button">
                REALIZAR TEST
              </button>
            </Link>
          )}
        </div>
        <div className="col d-none d-sm-flex d-sm-none d-md-none d-flex d-lg-flex justify-content-center align-items-center">
          <img src={Ilustration} alt="Ilustración" className={`animate__bounceIn ${styles.img}`} />
        </div>
      </div>
    </div>
  );
}
