const express = require("express");
const app = express();
const cors = require("cors");

//database
let port = 3000;
require("./database/db");

//router
const routes = require('./routes/router')

//middleware
app.use(cors());
app.use(express.json()); //does same thing like body-parser
app.use('/api',routes)

app.listen(port, () => {
  console.log("server is connected");
});
