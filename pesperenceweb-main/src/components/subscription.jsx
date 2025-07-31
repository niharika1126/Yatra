import React from "react";

const Subscription = () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      {/* Centered Content */}
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Subscribe and get 5% off on your first tour!
        </h2>

        {/* Form */}
        <form className="space-y-4 w-full px-0 sm:px-12">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-full bg-gray-100 text-sm outline-none"
            required
          />

          {/* Contact */}
          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full px-4 py-3 rounded-full bg-gray-100 text-sm outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-full bg-gray-100 text-sm outline-none"
            required
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
