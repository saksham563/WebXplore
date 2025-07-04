import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import subimg from "../../assets/subblog2.png";

const Subblogpage = () => {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5001/getUsers/${title}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [title]);

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required.';
    if (!formData.lastName) errors.lastName = 'Last name is required.';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required.';
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!formData.message) errors.message = 'Message is required.';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      axios
        .post('http://localhost:5001/submitBlogContact', formData)
        .then(() => {
          setSubmitStatus('Form submitted successfully.');
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            message: '',
          });
        })
        .catch(() => {
          setSubmitStatus('Error submitting form.');
        });
    } else {
      setFormErrors(errors);
    }
  };

  if (loading) return <div className="text-white text-center text-2xl">Loading...</div>;
  if (error) return <div className="text-white text-center text-2xl">Error loading post.</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-6 sm:p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[1200px] p-8 sm:p-6 text-gray-800 animate-fadeIn">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-3">
          <img
            src={subimg}
            alt={post.title}
            className="w-full sm:w-1/3 max-h-96 object-cover rounded-lg"
          />
          <h1 className="flex-1 text-4xl font-bold text-left sm:text-2xl sm:leading-snug">
            {post.title}
          </h1>
        </div>
        <p className="text-lg font-bold text-gray-700 my-4 sm:text-base">
          {post.description}
        </p>
        <p className="text-sm text-gray-600 mb-6">{post.date}</p>
        <div className="text-base leading-7 text-gray-900 sm:text-sm sm:leading-6">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-5 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 bg-gray-200 p-7 rounded-lg shadow-md">
          <h2 className="text-xl text-gray-800 sm:text-lg">Contact Us</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring focus:ring-indigo-200 sm:text-sm"
              />
              {formErrors.firstName && <p className="text-red-500 text-xs">{formErrors.firstName}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring focus:ring-indigo-200 sm:text-sm"
              />
              {formErrors.lastName && <p className="text-red-500 text-xs">{formErrors.lastName}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring focus:ring-indigo-200 sm:text-sm"
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-xs">{formErrors.phoneNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring focus:ring-indigo-200 sm:text-sm"
              />
              {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring focus:ring-indigo-200 sm:text-sm"
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-black text-white text-lg rounded-md hover:bg-gray-700 transition duration-300 sm:text-sm sm:px-4 sm:py-2"
            >
              Submit
            </button>
            {submitStatus && <p className="mt-5 text-green-600">{submitStatus}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subblogpage;