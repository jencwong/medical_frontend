// Require our module.

const mongoose = require("mongoose");

const indeedSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  radius: { type: Number, required: true },
  count: { type: Number, required: true }
});

const indeed = mongoose.model("newIndeed", indeedSchema);
module.exports = indeed;
