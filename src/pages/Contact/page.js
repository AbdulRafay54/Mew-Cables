"use client";

import Swal from 'sweetalert2';
import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
  icon: 'info',
  title: 'Coming Soon!',
  text: 'This feature is coming soon. Please fill out the form on the Careers page.',
  confirmButtonColor: '#2563eb',
  confirmButtonText: 'Go to Careers'
}).then((result) => {
  if (result.isConfirmed) {
    window.location.href = '/Careers/page'; 
  }
});

  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
          Contact MEW Cables
        </h1>

        {/* Contact Form */}
        <div className="bg-blue-50 border border-blue-200 shadow-xl rounded-2xl px-8 py-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="name">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="email">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="company">
                Company Name <span className="text-gray-500 text-sm">(optional)</span>
              </label>
              <input
                name="company"
                id="company"
                type="text"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Country */}
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="country">
                Country <span className="text-gray-500 text-sm">(optional)</span>
              </label>
              <input
                name="country"
                id="country"
                type="text"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="message">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="message"
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
