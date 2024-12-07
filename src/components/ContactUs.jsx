import React from "react";

function ContactUs() {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white flex justify-center items-start pt-10"
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center border-b-2 border-gray-500 pb-2">
          Contact Us
        </h2>
        <p className="text-center mb-6 text-gray-300">
          Submit the form below to get in touch with me.
        </p>
        <form
          action="https://formcarry.com/s/wVtnBpWChCm"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-3 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-gray-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-gray-500 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="p-3 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-gray-500 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 font-semibold"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
