const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("./database/mongoose");
const List = require("./database/models/list");
const Task = require("./database/models/task");

app.use(express.json()); /*map json*/
app.use(cors()); /*identify different ports*/

/* Routes */
app.get('/list', (req, res) => {
    List.find({})
    .then((lists) => {
      res.send(lists);
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
});

app.post('/list', (req, res) => {
  new List({
    title: req.body.title,
  })
    .save()
    .then((lists) => {
      res.send(lists);
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
});

app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
