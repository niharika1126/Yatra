import React from "react";

export default function ContactForm() {
  return (
    <section className="py-12 px-4 w-mainwidth">
      {/* Contact Form */}
      <form className=" sm:w-mainwidth  mx-auto bg-Yellow p-8 shadow-xl rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>

        <label for="name" className="block text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full  rounded-lg p-2 mb-4"
          required
        />

        <label for="email" className="block text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
          className="w-full rounded-lg p-2 mb-4"
          required
        />

        <label for="phone" className="block text-sm font-bold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full rounded-lg p-2 mb-4"
          required
        />

        <label for="purpose" className="block text-sm font-bold mb-2">
          Purpose of Contact
        </label>
        <select
          id="purpose"
          name="purpose"
          className="w-full  rounded-lg p-2 mb-4"
          required
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="Grants">Grants</option>
          <option value="Collaborate">Collaborate</option>
        </select>

        <label for="message" className="block text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="w-full  rounded-lg p-2 mb-4"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary/90"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
