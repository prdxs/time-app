import axios from 'axios';

const fetch = axios.create({
  headers: { Authorization: 'mysecrettoken' },
});

export const getTime = () => fetch.get('/time');

export const getMetrics = () => fetch.get('/metrics');

export default {
  getTime,
  getMetrics,
};
