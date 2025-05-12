const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Auth', authSchema);