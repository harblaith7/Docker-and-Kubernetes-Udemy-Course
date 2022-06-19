const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
