const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./controller");
const {dbInit}=require("./models/dbModels")


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors());
app.use(routes);


dbInit()

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
