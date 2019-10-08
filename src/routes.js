const express = require("express")
const SessionController = require("./controllers/SessionController.js")
const DashboardController = require("./controllers/DashboardController.js")
var routes = express.Router()

routes.post("/users", SessionController.store)
routes.get("/users", SessionController.index)
routes.get("/dashboard", DashboardController.index)
routes.put("/dashboard", DashboardController.update)
routes.delete("/dashboard", DashboardController.destroy)

module.exports = routes