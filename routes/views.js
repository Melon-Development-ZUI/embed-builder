const express = require('express');
const route = express.Router();

const controllers = require('../controllers/api')

route
    .route('/')
    .post(controllers.home)

route
    .route('/server/:id')
    .post(controllers.server)

module.exports = route;