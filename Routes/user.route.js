const express = require('express');
const route=express.Router();
const { RESISTRATION, LOGIN , GENERATEVIDEO} = require('../Controllers/user.controller');


route.post("/create",RESISTRATION);
route.post("/login",LOGIN);
route.post("/generatevideo",GENERATEVIDEO);

module.exports = route; 