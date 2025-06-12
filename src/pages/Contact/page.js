"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Website Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
          Contact MEW Cables
        </h1>

        {/* Contact Form */}
        <div className="bg-blue-50 border border-blue-200 shadow-xl rounded-2xl px-8 py-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Get in Touch
          </h2>

          <form>
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                rows="5"
                placeholder="Enter your message"
                id="message"
                name="message"
              ></textarea>
            </div>

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
