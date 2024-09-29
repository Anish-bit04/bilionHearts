const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const UserBeta = mongoose.model('UserBeta', userSchema);

module.exports = {
	UserBeta
};