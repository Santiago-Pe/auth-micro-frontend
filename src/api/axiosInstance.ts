import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL; // Obtenemos la URL base desde las variables de entorno
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': `${API_KEY}`
  }
});

export default axiosInstance;
