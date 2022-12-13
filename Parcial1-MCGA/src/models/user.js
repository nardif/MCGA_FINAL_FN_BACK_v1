const { Schema, model } = require('mongoose');
// const { customAlphabet } = require('nanoid');

// const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 60);

const userSchema = new Schema({
    userId: {
        type: String,
    },
    name: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
    },
    password:{
        type: String,
    },
    token: {
        type: String,
        // default: () => nanoid()
    },
    iat: {
        type: String,
    }
}, { timestamps: true });

module.exports = model("user", userSchema)