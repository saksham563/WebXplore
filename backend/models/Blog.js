const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  category: String,
  title:  String,
  description: String,
  author: String,
  date: String,
  content: String,
});

module.exports = mongoose.model("Blog", blogSchema, "data2");
