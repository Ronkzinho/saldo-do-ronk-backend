const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    saldo: Number,
    history: [{
        descrição: String,
        quantia: Number,
        data: String
    }]
})

module.exports = mongoose.model('User', UserSchema)