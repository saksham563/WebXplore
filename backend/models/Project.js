const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  industry: String,
  title: String,
  technologyStack: [String],
  projectOverview: String,
  solution: String,
  results: String,
});

module.exports = mongoose.model("Project", projectSchema, "ports");
