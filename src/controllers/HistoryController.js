const User = require("../models/User")
module.exports = {
    async destroy(req, res){
        var { user_id, history_id } = req.headers
        var user = await User.findById(user_id)
        if(!user){
            return res.send({ error: "Usuário não encontrado" })
        }
        user.history = user.history.filter(id !== history_id)
        user.save()
        return res.json(user)
    }
}