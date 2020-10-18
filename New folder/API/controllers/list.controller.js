const mongoose = require("../database/mongoose");
const List = require("../database/models/list");
const Task = require("../database/models/task");

// ReadAll
// app.get("/list", (req, res) => {
module.exports.readall = (req, res) => {
  List.find({})
    .then((lists) => {
      res.send(lists);
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
};

//Create
//   app.post("/list", (req, res) => {
module.exports.create = (req, res) => {
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
};

//ReadOne
//   app.get("/list/:listId", (req, res) => {
module.exports.readone = (req, res) => {
  List.find({
    _id: req.params.listId,
  })
    .then((lists) => {
      res.send(lists);
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
};

//Update
//  app.patch("/list/:listId", (req, res) => {
module.exports.update = (req, res) => {
  List.findByIdAndUpdate({
    _id: req.params.listId,
  })
    .then((lists) => {
      res.send("updated " + lists);
      console.log("list updated successfullt");
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
};

//Delete
//   app.delete("/list/:listId", (req, res) => {
module.exports.delete = (req, res) => {
  List.findByIdAndDelete({
    _id: req.params.listId,
  })
    .then((lists) => {
      res.send("deleted " + lists);
      console.log("list deleted successfullt");
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
};
