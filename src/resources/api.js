import axios from 'axios';

import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@MeContrata/Token');
  config.headers.authorization = token;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    Toast.show(error.response.data.error || 'Ocorreu um erro. Tente novamente ou entre em contato com o suporte.');
    return Promise.reject(error);
  },
);

const formDataApi = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

formDataApi.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@MeContrata/Token');
  config.headers.authorization = token;
  return config;
});

formDataApi.interceptors.response.use(
  (response) => response,
  (error) => {
    Toast.show(error.response.data.error || 'Ocorreu um erro. Tente novamente ou entre em contato com o suporte.');
    return Promise.reject(error);
  },
);

export default api;
export { formDataApi };
