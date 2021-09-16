import axios from 'axios';
import TokenService from '../tokenService';

class SessionController {
  static async login(email, password) {
    const response = await axios.post('http://127.0.0.1:8000/api/login/', {
      email,
      password,
    });
    TokenService.setUser(response.data);
  }
}

export default SessionController;
