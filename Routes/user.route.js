const express = require('express');
const route=express.Router();
const { RESISTRATION, LOGIN } = require('../Controllers/user.controller');


route.post("/create",RESISTRATION);
route.post("/login",LOGIN);


module.exports = route; 