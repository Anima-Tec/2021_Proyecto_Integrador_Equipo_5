/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */ // disableamos camelcase para que no nos de error en el client id
/* eslint-disable */
import { React, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import ImcController from '../../networking/controllers/ImcController';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function result() {
  const [imc, setImc] = useState('');
  document.title = 'kiwi - resultado';
  const session = JSON.parse(localStorage.getItem('user')) || null;

  useEffect(() => {
    const client_id = session?.user?.client_id;
    const getImc = async () => {
      setImc(await ImcController.getImc(client_id));
    };
    getImc();
  }, [imc]);

  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form className="col d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1 className={styles.titleResult}>Tus resultados</h1>
          </div>
          <p className={styles.subtitle}>
            Test nutricional:
            <span className={`${styles.result}`}>{imc.value}</span>
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
