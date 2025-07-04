const mongoose=require('mongoose')

const pre = new mongoose.Schema({
    title: String,
    industry: String,
    technologyStack: [String],
    projectOverview: String,
    solution:String,
    results:String,
  });
  
  // Create a model based on the schema
  module.exports = mongoose.model("ports", pre);