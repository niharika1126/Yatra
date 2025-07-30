import React, { useState } from "react";
import diwaliImg from "../assets/diwali.jpg";

const Checkout = () => {
  const price = 57730;
  const deposit = 1000;
  const futurePayments = 56730;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-6">
        Home <span className="mx-2">❖</span>
        <span className="text-red-800 font-bold">Checkout</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-700 mb-8">Checkout</h1>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - Billing Details */}
        <div className="lg:w-[70%] bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Coupon Notice */}
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm text-gray-800">
            Have a coupon? <span className="text-red-600 font-semibold cursor-pointer">Click here to enter your code</span>
          </div>

          {/* Billing Details */}
          <h2 className="text-xl font-bold text-gray-800">Billing Details</h2>
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email address *</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2" />
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">First name *</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last name *</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2" />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Company name (optional)</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold mb-2">Country / Region *</label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>India</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold mb-2">Street address *</label>
              <input type="text" placeholder="House number and street name" className="w-full border rounded-lg px-4 py-2 mb-3" />
              <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border rounded-lg px-4 py-2" />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Town / City *</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">State *</label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Gujarat</option>
                </select>
              </div>
            </div>

            {/* PIN Code */}
            <div>
              <label className="block text-sm font-semibold mb-2">PIN Code *</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">Phone *</label>
              <div className="flex gap-2">
                <span className="bg-gray-100 px-3 py-2 border rounded-lg">+91</span>
                <input type="text" placeholder="081234 56789" className="w-full border rounded-lg px-4 py-2" />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" /> I would like to receive exclusive emails with discounts and product information
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" /> Create an account?
              </label>
            </div>

            {/* Order Notes */}
            <div>
              <label className="block text-sm font-semibold mb-2">Order notes (optional)</label>
              <textarea className="w-full border rounded-lg px-4 py-2" rows="3" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="lg:w-[30%] bg-white shadow-md rounded-lg p-6 space-y-6 text-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Order</h2>

          <div className="border-b pb-4">
            <p className="font-semibold text-gray-800">Diwali Tour Packages × 1</p>
            <p className="text-gray-600">Package Type: <span className="font-medium">Luxury</span></p>
            <p className="text-gray-600">Travel Type: <span className="font-medium">Couple</span></p>
            <p className="text-gray-600">Deposit amount: ₹1,000.00</p>
            <p className="text-gray-600">Future payments: ₹56,730.00</p>
            <p className="text-gray-600">Booking Date: March 1, 2025</p>
          </div>

          {/* Order Totals */}
          <div className="grid grid-cols-2 gap-3 font-semibold text-gray-700">
            <span>Subtotal:</span>
            <span>₹{price.toLocaleString()}</span>
            <span>Total:</span>
            <span>₹{price.toLocaleString()}</span>
            <span>Due today:</span>
            <span>₹{deposit.toLocaleString()}</span>
            <span>Future payments:</span>
            <span>₹{futurePayments.toLocaleString()}</span>
          </div>

          {/* Payment Option */}
          <div className="border p-4 rounded-lg space-y-2">
            <h3 className="font-semibold">Credit Card/Debit Card/NetBanking</h3>
            <p className="text-gray-600 text-sm">
              Pay securely by Credit or Debit card or Internet Banking through Razorpay.
            </p>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 leading-relaxed">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>

          {/* Place Order Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
