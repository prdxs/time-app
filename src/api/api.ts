import axios from 'axios';

const fetch = axios.create({
  headers: { Authorization: 'mysecrettoken' },
});

export const getTime = () => fetch.get('/time');

export default {
  getTime,
};
