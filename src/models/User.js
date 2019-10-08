const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    saldo: Number
})

module.exports = mongoose.model('User', UserSchema)