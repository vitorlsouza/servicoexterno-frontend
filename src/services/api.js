import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicoexterno-backend.herokuapp.com/',
});

export default api;
