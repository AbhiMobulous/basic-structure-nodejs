const USER = require("../Models/user.model");
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Abhishek';
const sendResponse  = require('../Utiles/utility');



const RESISTRATION = async (req, res) => {
    try {
        // Check if user already exists
        const existingUser = await USER.findOne({ email: req.body.email });
        if (existingUser) {
            return sendResponse(res, { message: "User already exists", status: 'fail', statusCode: 400 });
        }

        const user = new USER({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        await user.save();
        sendResponse(res, { message: "User registered successfully", statusCode: 200 });
       
    } catch (err) {
        console.error('Error during user registration:', err);
        sendResponse(res, { message: err.message, status: 'error', statusCode: 500 });
    }
};

const LOGIN = async (req, res) => {
    try {
        const user = await USER.findOne({ email: req.body.email });
        if (!user) {
            return sendResponse(res, { message: "User not found", status: 'fail', statusCode: 400 });
        }

        // Password matching (assuming `user.password` is stored as plain text; ideally, it should be hashed)
        const isMatch = user.password === req.body.password;
        if (!isMatch) {
            return sendResponse(res, { message: "Invalid password", status: 'fail', statusCode: 400 });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email }, // Payload with user details
            SECRET_KEY,                          // Secret key
            { expiresIn: '1h' }                  // Token expiration time (e.g., 1 hour)
        );

        // Send response with token
        sendResponse(res, { data: { token }, message: "User logged in successfully", statusCode: 200 });

    } catch (err) {
        console.error('Error during login:', err);
        sendResponse(res, { message: err.message, status: 'error', statusCode: 500 });
    }
};

module.exports = {
    RESISTRATION,
    LOGIN,
};
