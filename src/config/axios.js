import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/data.json',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
