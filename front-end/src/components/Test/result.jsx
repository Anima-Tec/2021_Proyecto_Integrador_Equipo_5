/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */ // disableamos camelcase para que no nos de error en el client id
/* eslint-disable */
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import ImcController from '../../networking/controllers/ImcController';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function result() {
  const [imc, setImc] = useState('');
  document.title = 'kiwi - resultado';
  const session = JSON.parse(localStorage.getItem('user')) || null;

  const pesoinferior = `BAJO PESO
  Desde el equipo de kiwi notamos que tu imc y tus respuestas concuerdan con el de una persona que tiene un problema con sus hábitos alimenticios. Te aconsejamos que te tomes una dieta especial para que puedas evitar estos problemas. Puedes agregar mas tiempos de comida a tu dieta diaria o aumentar la cantidad de comida que ingieres dados tus tiempos de comida. Puedes contactarte con nuestra nutricionista personal para acceder a consejos mas detallados sobre como mejorar tu dieta. Y nuestra psicologa tambien si deseas recibir ayuda psicologica. ¡A trabajar!`;

  const pesoideal = `PESO NORMAL
  Desde el equipo de kiwi observamos que mantienes unas costumbres de dietas apreciables y que no aparentas tener problemas psicologicos relacionados con la comida. ¡Sigue asi!`;

  const presobrepeso = `PRE-OBESIDAD
  Desde el equipo de kiwi apreciamos que tienes problemas para dividir tus comidas, te aconsejamos que mantengas un tiempo de comidas equilibrado para ayudar a tu metabolismo, trata de no pedir tanta comida muy frecuentemente. Ademas desde el plano psicologico recomendamos que canalices tus ansiedades o tus malestares en realizar actividad fisica y no perjudiciar tu salud. Puedes contactarte con nuestra nutricionista personal para acceder a consejos mas detallados sobre como mejorar tu dieta. Y nuestra psicologa tambien si deseas recibir ayuda psicologica. ¡A trabajar!`;

  const obesidad1 = `OBESIDAD CLASE 1
  Desde el equipo de kiwi vemos que hay mucho en que trabajar, te recomendamos que realices actividad fisica con frecuencia y que te tomes algunos alimentos que te ayuden a mantenerte sano. Trata de nunca pedir comida y cocinar en casa. Manten una dieta balanceada en verduras, frutas, legumbres y carnes. Puedes contactarte con nuestra nutricionista personal para acceder a consejos mas detallados sobre como mejorar tu dieta. Y nuestra psicologa tambien si deseas recibir ayuda psicologica. ¡A trabajar!`;

  useEffect(() => {
    const client_id = session?.user?.client_id;
    const getImc = async () => {
      setImc(await ImcController.getImc(client_id));
    };
    getImc();
  }, [imc]);

  const IMC = parseFloat(imc.value);

  const setResult = () => {
    if (IMC < 18.5) {
      alert(pesoinferior);
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      alert(pesoideal);
    } else if (IMC >= 25 && IMC <= 29.9) {
      alert(presobrepeso);
    } else if (IMC >= 30) {
      alert(presobrepeso);
    }
  }
  return (
    <div className="container-fluid" style={{ width: '80%' }}>
      <div className="row" style={{ height: '80vh' }}>
        <form className="col d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1 className={styles.titleResult}>Tus resultados</h1>
          </div>
          <p className={styles.subtitle}>
            Test nutricional:
            <span className={`${styles.result}`}> {imc.value}</span>
          </p>
          <button className={`${styles.buttonResult}`} onClick={setResult}> Obtener resultado</button>
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
