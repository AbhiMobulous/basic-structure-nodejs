const express = require('express');
const route = express.Router();

const {createUser, getUsers} = require('../Controllers/admin.controller');

// Middleware to authenticate users
route.post('/createuser', createUser);
route.get('/getuser', getUsers);

module.exports = route;