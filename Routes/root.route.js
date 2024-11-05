const express = require('express');
const route= express.Router();

const userRoute=require("../Routes/user.route");
const adminRoute=require("../Routes/admin.route");

route.use("/user",userRoute);
route.use("/admin",adminRoute);

module.exports=route;