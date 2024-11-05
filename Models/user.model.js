const mongoose= require('mongoose');


const USER= mongoose.Schema({
    name: String,
    password: String,
    email: String,
})

module.exports=mongoose.model('User',USER);