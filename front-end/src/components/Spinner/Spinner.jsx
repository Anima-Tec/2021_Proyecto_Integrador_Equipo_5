import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import spinner from '../../assets/images/spinner.svg';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div>
      <img alt="spinner" src={spinner} className={`spinner-border ${styles.spinner}`} role="status" />
    </div>
  );
}
