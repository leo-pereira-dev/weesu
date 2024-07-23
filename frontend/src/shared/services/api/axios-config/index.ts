import axios from 'axios';

import { responseInterceptor, errorInterceptor, jwtInterceptor } from './interceptors';
import { Environment } from '../../../environment';


const Api = axios.create({
  baseURL: Environment.URL_BASE
});

// Adiciona o interceptor de requisição para JWT
Api.interceptors.request.use(
  (config) => jwtInterceptor(config),
  (error) => Promise.reject(error),
);

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };
