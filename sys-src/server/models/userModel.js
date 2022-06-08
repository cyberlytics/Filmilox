const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: { type: String, unique: true, required: true },
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        profilepicture:{type:String, required:false},
        admin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = User = mongoose.model('User', userSchema);
