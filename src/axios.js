import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER || 'https://study-resources-p56h4znn6q-ey.a.run.app',
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
          // processQueue(err, null);
        })
          .then((token) => {
            if (token) {
              originalRequest.headers.Authorization = `token=${token}`;
              return axiosInstance(originalRequest);
            }
          })
          .catch((err) => {
            Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      return new Promise((resolve, reject) => {
        axiosInstance
          .get('/auth/refreshtoken')
          .then((resp) => {
            const { data } = resp;
            axios.defaults.headers.common.Authorization = `token=${data.token}`;
            originalRequest.headers.Authorization = `token=${data.token}`;
            processQueue(null, data.token);
            resolve(axios(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
