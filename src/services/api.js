import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:0648'
});

export default api;