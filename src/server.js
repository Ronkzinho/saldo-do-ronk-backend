require("dotenv/config")
const express = require("express")
const cors = require("cors")
const http = require("http")
const mongoose = require("mongoose")
const ip = require("ip")
const routes = require("./routes")
const app = express()
const server = http.Server(app)
const bodyParser = require('body-parser')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors({ origin: [`http://25.3.27.131:3000`, "https://saldo-do-ronk.herokuapp.com", "http://saldo-do-ronk.herokuapp.com", null]})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3333)
