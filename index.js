const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require("./Config/dbConnection");
const cors = require('cors');
app.use(cors());
const rootRoute=require('./Routes/root.route');
const bodyParser=require('body-parser');
app.use(bodyParser.json()); 
app.use(express.json()); 


app.use('/api/vi',rootRoute);

app.listen(process.env.PORT,()=>{
    console.log('Server running at http://localhost:3000/');  // This will print the server is running at the specified port. 3000 in this case.  // Replace this with your own port number.  // This will print the server is running at the specified port. 3000 in this case.  // Replace this with your own port number.  // This will print the server is running at the specified port. 3000 in this case.  // Replace this with your own port number.  // This will print the server is running at the specified port. 3000 in this case.  // Replace this with your own port number.  // This will print the server is running at the specified port. 3000 in this case.  // Replace this with your own port number.  // This will print the server is running at the specified port. 30
});