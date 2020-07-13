const List = require("../models/list");
const Task = require("../models/task");

//test
module.exports.hello = (req, res) => {
  res.send("hello sithi from list"), console.log("inside list hello method");
};

//display all lists
module.exports.displayList = (req, res) => {
  List.find({})
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.log("error is displaying lists");
    });
};

//add lists
module.exports.addList = (req, res) => {
  new List({ title: req.body.title })
    .save()
    .then((list) => {
      res.send(list), console.log("new list created");
    })
    .catch((err) => {
      console.log("error in adding a list: " + err);
    });
};

//get a particular list
module.exports.getOneList = (req, res) => {
  List.find({ _id: req.params.listId })
    .then((list) => {
      res.send(list), console.log("list found");
    })
    .catch((err) => {
      console.log("error in finding a list: " + err);
    });
};

//update list
module.exports.updateList = (req, res) => {
  List.findOneAndUpdate({ _id: req.params.listId }, { $set: req.body })
    .then((list) => {
      res.send(list), console.log("list updated");
    })
    .catch((err) => {
      console.log("error in updating list: " + err);
    });
};

//delete list
module.exports.deleteList = (req, res) => {

  const deleteTasks = (list) => {
    Task.deleteMany({_listId : list._id})
      .then(()=>list)
      .catch((err) => {
        console.log("error in deleteTasks function: " + err);
      });
  }

  const list = List.findByIdAndDelete(req.params.listId)
    .then((list) => {
      deleteTasks(list), console.log("list deleted");
    })
    .catch((err) => {
      console.log("error in deleting list: " + err);
    });
    res.send(list);
};
