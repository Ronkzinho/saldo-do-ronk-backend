const express = require("express")
const SessionController = require("./controllers/SessionController.js")
const DashboardController = require("./controllers/DashboardController.js")
const HistoryController = require("./controllers/HistoryController.js")
var routes = express.Router()

routes.get("/", (req, res) => { res.send("OK") })
routes.post("/users", SessionController.store)
routes.get("/users", SessionController.index)
routes.get("/dashboard", DashboardController.index)
routes.put("/dashboard", DashboardController.update)
routes.delete("/dashboard", DashboardController.destroy)
routes.delete("/history", HistoryController.destroy)

module.exports = routes