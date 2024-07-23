// src/shared/services/api/axios-config/interceptors/JwtInterceptor.ts

import { AxiosRequestConfig } from 'axios';

export const jwtInterceptor = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('APP_ACCESS_TOKEN');
  if (token) {
    config.headers!.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
};
