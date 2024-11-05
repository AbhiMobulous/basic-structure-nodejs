const mongoose= require('mongoose');


const USER= mongoose.Schema({
    name: String,
    email: String,
})

module.exports=mongoose.model('User',USER);