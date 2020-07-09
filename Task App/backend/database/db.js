const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

(db_url = "mongodb://localhost:27017/TaskApp"),
  mongoose
    .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(`DB connection error ${err}`);
    });
