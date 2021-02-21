import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER || 'https://study-resources-p56h4znn6q-ey.a.run.app',
  withCredentials: true,
});

export default axiosInstance;
