const Task = require("../models/task");

module.exports.hello = (req, res) => {
  res.send("hello sithi from task"), console.log("inside task hello method");
};

//display all tasks
module.exports.displayTask = (req, res) => {
  Task.find({ _listId: req.params.listId })
    .then((tasks) => {
      res.send(tasks);
      console.log("display tasks");
    })
    .catch((err) => {
      console.log("error is displaying lists");
    });
};

//add tasks
module.exports.addTask = (req, res) => {
  new Task({ title: req.body.title, _listId: req.params.listId })
    .save()
    .then((tasks) => {
      res.send(tasks);
      console.log("add tasks");
    })
    .catch((err) => {
      console.log("error is displaying lists");
    });
};

//get a particular task
module.exports.getOneTask = (req, res) => {
  Task.find({ _listId: req.params.listId, _id: req.params.taskId })
    .then((task) => {
      res.send(task), console.log("task found");
    })
    .catch((err) => {
      console.log("error in finding a list: " + err);
    });
};

//update task
module.exports.updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _listId: req.params.listId, _id: req.params.taskId },
    { $set: req.body }
  )
    .then((task) => {
      res.send(task), console.log("task updated");
    })
    .catch((err) => {
      console.log("error in finding a list: " + err);
    });
};

//delete task
module.exports.deleteTask = (req, res) => {
  Task.findOneAndDelete({ _listId: req.params.listId, _id: req.params.taskId })
    .then((list) => {
      res.send(list), console.log("list deleted");
    })
    .catch((err) => {
      console.log("error in deleting list: " + err);
    });
};

