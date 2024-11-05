const Models = require('../Models/user.model');
module.exports ={
    createUser: async (req, res) => {
        try {
            const user = new Models(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await Models.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}