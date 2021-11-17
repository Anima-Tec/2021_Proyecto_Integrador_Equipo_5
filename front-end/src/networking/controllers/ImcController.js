/* eslint-disable */ // disableamos porque no permite mandar el token en el header
import axios from 'axios';
import { generateBackendURL } from '../routes';

class ImcController {
  static sendImc(client_id, height, weight) {
    const session = JSON.parse(localStorage.getItem('user')).token || null;
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
