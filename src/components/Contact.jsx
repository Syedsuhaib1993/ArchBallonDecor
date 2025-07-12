import React from "react";
import contactDecor from "../assets/contacts.png"; // use any image
import contactDecor2 from "../assets/contacts.png"; // second image

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 overflow-hidden"
    >
      {/* Left Image */}
      <div className="w-[100px] h-[100px] lg:w-full lg:h-full  lg:flex flex-1 justify-end pr-6">
        <img
          src={contactDecor}
          alt="Decor Left"
          className="lg:max-w-xs lg:w-full md:w-full w-[100px] rounded-lg  object-cover"
        />
      </div>

      {/* Center Form */}
      <div className="w-full lg:w-[40%] bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg z-10 mx-auto">
        <h2 className="text-4xl font-bold text-pink-700 mb-6 text-center">Contact Us 🎈</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-pink-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-pink-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              placeholder="Your message..."
              rows="5"
              className="w-full border border-pink-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Image */}
      <div className="hidden lg:flex flex-1  justify-start pl-6">
        <img
          src={contactDecor2}
          alt="Decor Right"
          className="max-w-xs rounded-lg  object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
