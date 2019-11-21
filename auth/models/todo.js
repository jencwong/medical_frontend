const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  info: { type: String, required: false }
});

const toDo = mongoose.model("toDO", todoSchema);
module.exports = toDo;
