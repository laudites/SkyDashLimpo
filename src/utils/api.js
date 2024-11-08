// src/utils/api.js
import axios from 'axios';
import { refreshToken } from '../components/API/Login/RefreshToken';

const api = axios.create({
  baseURL: 'https://localhost:5001/api', 
  //baseURL: 'https://teste-api.eletrofrio.com.br:5500/api', 
  timeout: 60000,
});

// Interceptor para adicionar o token de acesso em cada solicitação
api.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Interceptor para lidar com respostas não autorizadas (401)
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 
    
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('tokenExpiry');
        window.location.href = '/login';
        return Promise.reject(error);
      
  }}
);

export default api;
