const express = require('express');
const route = express.Router();

const controllers = require('../controllers/api')

route
    .route('/')
    .post(controllers.send)

route
    .route('/server/:id')
    .post(controllers.login)

module.exports = route;