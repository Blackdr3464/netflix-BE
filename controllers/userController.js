const User = require('../models/User');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json(' deleted ');
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};

module.exports = userController;
