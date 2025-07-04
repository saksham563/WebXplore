require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5001;
const nodemailer = require("nodemailer");
const searchRoute = require("./search.js");

app.use(express.json())

// Enable CORS for all routes
const corsOptions ={ 
    origin: "http://localhost:5000",
    methods: "GET, POST",
    credentionals:true
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Try with or without this option
  tlsInsecure: true, // Disable TLS validation temporarily for testing
}).then(() => console.log('DB Connected Mongo Running'))
.catch(err => {
  console.error('DB Connection Error:', err);
  console.error('Error cause:', err.cause);  // This will give you more information
});

const Post = require('./models/Post');
const D = require('./models/d');
const Contact = require('./models/contact');

// Route to get all posts (if you need to fetch all posts somewhere)
app.get("/getUsers", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/portfolio", async (req, res) => {
  try {
    const posts = await D.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.post('/saveCaseEmail', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const newCaseStudyData = new Contact({
    email,
    formType: 'caseStudy', // Set formType to caseStudy
  });

  try {
    await newCaseStudyData.save();
    res.status(201).json({ message: 'Case study email saved successfully!' });
  } catch (error) {
    console.error('Error saving case study email:', error);
    res.status(500).json({ message: 'Error saving case study email' });
  }
});

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com", // SES SMTP endpoint
      port: 465, // Port for SSL
      secure: true, // True for 465
      auth: {
        user: process.env.EMAIL_USER, // SES SMTP username
        pass: process.env.EMAIL_PASS, // SES SMTP password
      },
      tls: {
        rejectUnauthorized: false, // Allow unauthorized certificates
      },
    });

    const mailOptions = {
      from: "enquiry@resolvainsights.com", // Replace with your verified sender email
      to: email,
      subject: '🌟 Your Requested Case Study is Here! 🌟',
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 20px auto; border: 1px solid #e0e7ff; border-radius: 10px; padding: 20px; background-color: #f8faff;">
              <h2 style="color: #1e40af; text-align: center;">Hello,</h2>
              <p style="color: #1e3a8a;">Thank you for showing interest in our case study, <strong>*AI-Powered Chatbots for Real-Time Customer Support*</strong>. We're delighted to share how we solved complex challenges with innovative solutions.</p>
              <p style="color: #1e3a8a;">Here's a quick overview of what you'll find in the case study:</p>
              <ul style="list-style-type: disc; margin-left: 20px; color: #1e3a8a;">
                  <li>Challenges and Objectives</li>
                  <li>Innovative Solutions Implemented</li>
                  <li>Technologies Used</li>
                  <li>Real-World Benefits</li>
                  <li>Results and Conclusion</li>
              </ul>

              <p style="color: #1e3a8a;">The full case study is attached to this email as a PDF. Feel free to download and review it at your convenience.</p>

              <p style="color: #1e3a8a;">If you have any questions or need further insights, don't hesitate to reach out to us. We’d love to collaborate with you!</p>

              <p style="text-align: center; font-size: 14px; color: #1e3a8a;">Best regards,</p>
              <p style="text-align: center; font-size: 16px; color: #1e40af; font-weight: bold;">The WebXplore Studio Team</p>

              <hr style="border-top: 1px solid #cbd5e1;" />
              <p style="font-size: 12px; color: #64748b; text-align: center;">
                  <em>Note: If you didn’t request this email, please disregard it. Your information is secure with us.</em>
              </p>
          </div>
      `,
      attachments: [
        {
          filename: "Case_Study_AI_Powered_Chatbots.pdf",
          path: "../frontend/src/assets/cs1.pdf", // Path to the PDF file
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

//Route to get a post by postId
// app.get("/getUsers/:postId", async (req, res) => {
//   const { postId } = req.params;

//   try {
//     const post = await Post.findById(postId); 
//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.json(post);
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

app.get('/getUsers/:title', async (req, res) => {
  try {
    const post = await Post.findOne({ title: req.params.title });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// app.get("/portfolio/:postId", async (req, res) => {
//   const { postId } = req.params;

//   try {
//     const post = await D.findById(postId); 
//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.json(post);
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// Fetch a project by title
app.get('/portfolio/title/:title', async (req, res) => {
  const { title } = req.params;

  try {
    const project = await D.findOne({ title });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project by title", error });
  }
});


// contact routes
app.get('/getContactFormData', async (req, res) => {
  try {
    const contactFormData = await Contact.find({ formType: 'contact' });
    res.json(contactFormData);
  } catch (error) {
    console.error('Error fetching contact form data:', error);
    res.status(500).json({ message: 'Error fetching contact form data' });
  }
});

app.get('/getPopupFormData', async (req, res) => {
  try {
    const popupFormData = await Contact.find({ formType: 'popup' });
    res.json(popupFormData);
  } catch (error) {
    console.error('Error fetching popup form data:', error);
    res.status(500).json({ message: 'Error fetching popup form data' });
  }
});

app.get('/getAllFormData', async (req, res) => {
  try {
    const formData = await Contact.find();
    res.json(formData);  // This will include the formType field in the response
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ message: 'Error fetching form data' });
  }
});

app.post('/subscribeNewsletter', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const newNewsletterData = new Contact({
    email,
    formType: 'newsletter', // Set formType to 'newsletter'
  });

  try {
    await newNewsletterData.save();
    res.status(201).json({ message: 'Newsletter subscription successful!' });
  } catch (error) {
    console.error('Error saving newsletter data:', error);
    res.status(500).json({ message: 'Error saving newsletter data' });
  }
});


// Contact form submission
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newContactData = new Contact({
    firstName,
    lastName,
    email,
    phone: phoneNumber,
    message,
    formType: 'contact',  // Set formType to 'contact'
  });

  try {
    await newContactData.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

// Popup form submission
app.post('/submitForm', async (req, res) => {
  const { name, email, phone, requirements } = req.body;

  if (!name || !email || !phone || !requirements) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newPopupData = new Contact({
    name,
    email,
    phone,
    requirements,
    formType: 'popup', // Set formType to 'popup'
  });

  try {
    await newPopupData.save();
    res.status(201).json({ message: 'Popup form submitted successfully!' });
  } catch (error) {
    console.error('Error saving popup data:', error);
    res.status(500).json({ message: 'Error saving popup data' });
  }
});

app.post('/homecontact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newHomeContactData = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message,
    formType: 'homecontact', // Set formType to 'homecontact'
  });

  try {
    await newHomeContactData.save();
    res.status(201).json({ message: 'Home contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving home contact data:', error);
    res.status(500).json({ message: 'Error saving home contact data' });
  }
});

// Fetch all homecontact form data
app.get('/getHomeContactData', async (req, res) => {
  try {
    const homeContactData = await Contact.find({ formType: 'homecontact' });
    res.json(homeContactData);
  } catch (error) {
    console.error('Error fetching home contact data:', error);
    res.status(500).json({ message: 'Error fetching home contact data' });
  }
});

app.post("/submitBlogContact", async (req, res) => {
  const { firstName, lastName, phoneNumber, email, message } = req.body;

  if (!firstName || !lastName || !phoneNumber || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      phone: phoneNumber,
      email,
      message,
      formType: "blogcontact",
    });

    await newContact.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Error saving form data." });
  }
});

app.get('/getBlogContactData', async (req, res) => {
  try {
    const blogContactData = await Contact.find({ formType: 'blogcontact' });
    res.json(blogContactData);
  } catch (error) {
    console.error('Error fetching home contact data:', error);
    res.status(500).json({ message: 'Error fetching home contact data' });
  }
});

// Use search route
app.use("/api", searchRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
