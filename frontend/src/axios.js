import axios from 'axios'

axios.defaults.headers.baseURL = 'http://localhost:3000/';


var tokenId = function() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default tokenId;

