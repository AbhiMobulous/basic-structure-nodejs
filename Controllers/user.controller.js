const USER = require("../Models/user.model");
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');
const ffmpegPath = require('ffmpeg-static');
const os = require('os');

ffmpeg.setFfmpegPath(ffmpegPath);

module.exports = {
    RESISTRATION: async (req, res) => {
        try {
            const user = new USER({
                name: req.body.name,
                email: req.body.email,
            });
            await user.save();
            res.status(200).json({ message: "User registered successfully" });
        } catch (err) {
            console.error('Error during user registration:', err);
            res.status(500).json({ error: err.message });
        }
    },

    LOGIN: async (req, res) => {
        try {
            const user = await USER.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
            // Uncomment and implement comparePassword if password verification is needed
            // const isMatch = await user.comparePassword(req.body.password);
            // if (!isMatch) {
            //     return res.status(400).json({ error: "Invalid password" });
            // }
            const token = user.generateToken();
            res.json({ message: "User logged in successfully", token });
        } catch (err) {
            console.error('Error during login:', err);
            res.status(500).json({ error: err.message });
        }
    }

    
};
