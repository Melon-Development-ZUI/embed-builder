const express = require('express');
const route = express.Router();

const controllers = require('../controllers/api')

route
    .route('/')
    .get(controllers.home)

route
    .route('/server/:id')
    .get(controllers.server)

module.exports = route;