const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

try{
    router.post('/signup', userCtrl.signup);
    router.post('/login', userCtrl.login);
    router.get('/', auth, userCtrl.profile);
    router.get('/', auth, userCtrl.delete);
    router.get('/', auth, userCtrl.update);
}catch (error){
    console.log(error);
}

module.exports = router;