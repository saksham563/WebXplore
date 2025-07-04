const mongoose = require('mongoose');

// Define the schema for a post
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Title is required
    unique: true,    // Title must be unique for each post
  },
  description: {
    type: String,
    required: true,  // Description is required
  },
  content: {
    type: String,
    required: true,  // Content is required
  },
  date: {
    type: String,
    required: true,  // Date is required
  },
  slug: { type: String, required: true, unique: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export the model based on the schema
module.exports = mongoose.model("data2", postSchema);
