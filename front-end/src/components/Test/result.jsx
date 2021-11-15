/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function result() {
  document.title = 'kiwi - resultado';
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form className="col d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1 className={styles.titleResult}>Tus resultados</h1>
          </div>
          <p className={styles.subtitle}>
            Test nutricional:
            <span className={`${styles.result}`}> god</span>
          </p>
          <div>
            <Link to="www.instagram.com/paloma.vanoli/">
              <button className={`${styles.buttonResult}`} type="button">
                <span>Obtener Consulta </span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
