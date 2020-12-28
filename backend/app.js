const bodyParser = require('body-parser');
const express = require('express');
const helmet = require("helmet");
const app = express();
const routesUsers = require('./routes/user');
const cors = require('cors');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(cors());
app.use(helmet()); 
app.use(bodyParser.json());

app.use('/api/auth', routesUsers);

  module.exports = app;