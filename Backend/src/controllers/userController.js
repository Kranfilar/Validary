const User = require('../models/user.model');

exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password,
            role,
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const isMatch = await user.comparePassword(password);
        if (!isMatch) throw new Error('Invalid login credentials');

        const token = await user.generateAuthToken();

        res.json({ user, token });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};
