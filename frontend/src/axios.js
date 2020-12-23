import axios from 'axios'

axios.defaults.headers.baseURL = 'http://localhost:3000/';

(function() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
})();

//Default config options
const defaultOptions = {
    baseURL: 'http://localhost:3000/',
    header: {
        'Content-Type': 'application/json',
    },
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


