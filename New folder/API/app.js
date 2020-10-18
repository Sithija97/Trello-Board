const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("./database/mongoose");
const List = require("./database/models/list");
const Task = require("./database/models/task");
const router = require("./routes/router");

app.use(express.json()); /*map json*/
app.use(cors()); /*identify different ports*/

/* Routes */
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
