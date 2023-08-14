import axios from 'axios';

const api = axios.create({

  baseURL: "http://192.168.240.237:4000/",

});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  config.headers.Authorization = token;

  return config;
});


export default api;
