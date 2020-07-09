const List = require("../models/list");

module.exports.hello = (req, res) => {
  res.send("hello sithi from list"), console.log("inside list hello method");
};
