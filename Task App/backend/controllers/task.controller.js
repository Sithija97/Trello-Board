const Task = require("../models/task");

module.exports.hello = (req, res) => {
  res.send("hello sithi from task"), console.log("inside task hello method");
};
