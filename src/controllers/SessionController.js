const User = require("../models/User")
const bcrypt = require("bcryptjs")
module.exports = {
    async store(req, res){
    var { username, email, password } = req.body
    var user = await User.findOne({ email: email })
    if(user){
        return res.send({ error: "Usuário já cadastrado" })
    }
    var salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)
    user = await User.create({
        username: username,
        email: email,
        password: password,
        saldo: 0.00
    })
    return res.json(user)
    },
    async index(req, res){
    if(!req.headers.identifier){
        return res.send("Não era pra você estar aqui")
    }
    const { indentifier, password } = req.headers
    var user = await User.findOne({ email: indentifier }) ? await User.findOne({ email: indentifier }) : await User.findOne({ username: identifier })
    if(!user){
        return res.send({ error: "Nenhum usuário encontrado" })
    }
    var identificar = await bcrypt.compare(password, user.password)
    if(!identificar){
        return res.send({ error: "Senha incorreta" })
    }
    return res.json(user)
    }
}