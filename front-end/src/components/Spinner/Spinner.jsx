/* eslint-disable jsx-a11y/alt-text */
import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import spinner from '../../assets/images/spinner.svg';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div>
      <img src={spinner} className={`spinner-border ${styles.spinner}`} role="status" />
    </div>
  );
}
