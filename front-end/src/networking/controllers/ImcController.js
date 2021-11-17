/* eslint-disable camelcase */
/* eslint-disable */
import axios from 'axios';
import { generateBackendURL } from '../routes';

class ImcController {
  static sendImc(client_id, height, weight) {
    const session = JSON.parse(localStorage.getItem('user')).token || null;
    console.log(session);
    axios.post(generateBackendURL('imc'), {
      client_id,
      height,
      weight,
    },
    {
    headers: {
        'Authorization': 'Bearer ' + session,
      }
    });
  }
}

export default ImcController;
