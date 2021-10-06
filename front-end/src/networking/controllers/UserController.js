import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(email, password) {
    const response = await axios.post(generateBackendURL('login'), {
      email,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async register(name, surname, email, dateBirth, role, password) {
    const response = await axios.post(generateBackendURL('register'), {
      name,
      surname,
      email,
      dateBirth,
      role,
      password,
    });
    TokenService.setUser(response.data);
  }
}

export default SessionController;