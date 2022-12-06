import axios, { AxiosRequestConfig } from 'axios';
import { API_URI } from '../configs';

// type CustomAxiosRequestHeaders = AxiosRequestHeaders & {
//   common: Record<string, string>;
// };

// interface AxiosCustomConfigOptions extends AxiosRequestConfig {
//   data?: Record<string, any>;
//   params?: Record<string, any>;
// }

const instance = axios.create({
  baseURL: API_URI,
  timeout: 50000,
  // transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: (_) => {
    return true;
  },
});

instance.interceptors.request.use(
  function (config: AxiosRequestConfig<any>) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }

    return Promise.reject(response.data?.message ?? 'Error!');
  },
  (error) => {
    // if (!error.response) {
    //   console.error('Please check your internet connection.');
    //   return {
    //     data: {
    //       error: 400,
    //       status: 0,
    //       message: 'Please check your internet connection.',
    //     },
    //   };
    // }
    return Promise.reject(error);
  }
);

export default instance;
