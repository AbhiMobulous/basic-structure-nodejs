const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/test_project';

// Connect to MongoDB

mongoose.connect(dbUrl).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.error('Failed to connect to MongoDB');
})