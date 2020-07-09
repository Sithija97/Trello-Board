const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  titile: {
    type: String,
    trim: true,
    minlength: 3,
  },

  _listId: {
    required: true,
    type: mongoose.Types.ObjectId,
  },

  completed: {
    default: false,
    required: true,
    type: Boolean,
  },
});

const Task = mongoose.model("Task", TaskSchema, "tasks");
module.exports = Task;
