import React from "react";

export default function Contact() {
  return (
    <div className="contact-page bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-20 px-6 text-center dark:bg-gradient-to-r dark:from-blue-700 dark:via-teal-700 dark:to-green-700">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl mb-6">
            Have questions, suggestions, or feedback? We’d love to hear from
            you! Fill out the form below, and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="form-section py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
            Get In Touch
          </h2>
          <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
            {/* Name */}
            <div>
              <label
                className="block text-sm font-medium mb-2 dark:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-blue-500 hover:shadow-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:border-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium mb-2 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-teal-500 hover:shadow-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:border-teal-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium mb-2 dark:text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-violet-900 hover:shadow-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:border-orange-700"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md transform transition-all duration-300 hover:bg-teal-500 hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-blue-700 dark:hover:bg-teal-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
