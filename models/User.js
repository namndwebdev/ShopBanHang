const mongoose = require('../config/db')
const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    bod: Date,
    address: String,
    phone: String,
    role: String
})
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel

