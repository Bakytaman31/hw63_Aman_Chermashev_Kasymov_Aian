import axios from 'axios';

const axiosPosts = axios.create({
    baseURL: 'https://blog-chermashev-kasymov.firebaseio.com/'
});

export default axiosPosts;