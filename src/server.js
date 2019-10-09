require("dotenv/config")
const express = require("express")
const cors = require("cors")
const http = require("http")
const mongoose = require("mongoose")
const routes = require("./routes")
const app = express()
const server = http.Server(app)
const bodyParser = require('body-parser')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3333)