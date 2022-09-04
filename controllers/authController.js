const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authController = {
    register: async (req, res) => {
        try {
            // hash pass
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // create new user
            const newUser = new User({
                email: req.body.email,
                password: hashed,
            });

            // save new user
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json('wrong email');
            }
            const password = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!password) {
                return res.status(404).json('wrong password');
            }
            if (user && password) {
                // const accessToken = jwt.sign(
                //     {
                //         id: user.id,
                //         admin: user.admin,
                //     },
                //     process.env.ACCESS_KEY,
                //     { expiresIn: '30d' }
                // );
                // privite pass
                // const { password, ...others } = user._doc;

                // return res.status(200).json({ ...others });
                res.status(200).json(user);
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};

module.exports = authController;
