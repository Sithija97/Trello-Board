const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/taskmanager",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Dtabase Connected Successfully !"))
  .catch((error) => console.log("error: " + error));

module.exports = mongoose;
