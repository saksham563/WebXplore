const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog.js');
const Project = require('./models/Project.js');

// Connect to MongoDB Atlas using your connection string
mongoose.connect("mongodb+srv://saksham:saksham123@webxplore.pkpqc.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB ");
});

mongoose.connection.on('error', (error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

// Search endpoint
router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is missing" });
  }

  try {
    const blogResults = await Blog.find({
      title: { $regex: query, $options: 'i' } // Case-insensitive title search
    }).select('title _id').lean();

    const projectResults = await Project.find({
      title: { $regex: query, $options: 'i' } // Case-insensitive title search
    }).select('title _id').lean();

    const results = [
      ...blogResults.map(result => ({ ...result, type: 'blog' })),
      ...projectResults.map(result => ({ ...result, type: 'project' })),
    ];

    res.json(results);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for blog page (based on title)
router.get('/blog/:title', async (req, res) => {
  try {
    const blog = await Blog.findOne({ title: req.params.title });
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog); // Return the blog details
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for project page (based on title)
router.get('/project/:title', async (req, res) => {
  try {
    const project = await Project.findOne({ title: req.params.title });
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project); // Return the project details
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
