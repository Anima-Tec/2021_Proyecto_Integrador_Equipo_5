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
  static async getImc(client_id) {
    const session = JSON.parse(localStorage.getItem('user')).token || null;
    const response = await axios.get(generateBackendURL(`imc/${client_id}`), {
      headers: {
        'Authorization': 'Bearer ' + session,
      }
    });
    return response.data;
  }
}

export default ImcController;
