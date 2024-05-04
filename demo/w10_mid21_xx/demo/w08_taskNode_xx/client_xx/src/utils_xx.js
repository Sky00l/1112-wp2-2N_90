import axios from 'axios';

const customFetch_xx = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default customFetch_xx;
