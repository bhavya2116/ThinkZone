const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    id: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    dob: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateOfRegistartion: {
        type: Date,
        required: Date.now,
        unique: true
    }
})
module.exports = User = mongoose.models('user', UserSchema)