import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

const formDataApi = axios.create({
  baseURL: 'http://10.0.2.2:3333',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

formDataApi.interceptors.request.use((config) => {
  console.log(config.headers);
  return config;
});

export default api;
export { formDataApi };
