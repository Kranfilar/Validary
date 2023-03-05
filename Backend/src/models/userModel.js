const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
});

// Encrypt password before saving to database
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            user.password = hash;
            next();
        } catch (err) {
            return next(err);
        }
    } else {
        return next();
    }
});

// Check if entered password matches the hashed password in the database
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
