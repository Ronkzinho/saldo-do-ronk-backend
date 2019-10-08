const User = require("../models/User")
module.exports = {
    async index(req, res){
        if(!req.headers){
            return res.send("Não era para você estar aqui")
        }
        var { _id } = req.headers
        var user = await User.findById(_id)
        if(!user){
            return res.send({ error: "Usuário não encontrado" })
        }
        return res.json(user)

    },
    async update(req, res){
        var { _id, saldo } = req.body
        var user = await User.findById(_id)
        if(!user){
            return res.send({ error: "Usuário não encontrado" })
        }
        user.saldo = parseFloat(user.saldo.toFixed(2)) + parseFloat(parseFloat(saldo).toFixed(2))
        user.save()
        return res.json(user)
    },
    async destroy(req, res){
        var { _id } = req.headers
        var user = await User.findById(_id)
        if(!user){
            return res.send({ error: "Usuário não encontrado" })
        }
        user.saldo = 0.00
        user.save()
        return res.json(user)
    }
}