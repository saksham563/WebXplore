// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
    requirements: { type: String },
    formType: {
      type: String,
      required: true,
      enum: ["contact", "popup", "caseStudy", "newsletter", "homecontact", "blogcontact"], // added blogcontact
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactData", contactSchema);
