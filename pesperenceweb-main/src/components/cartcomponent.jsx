import React, { useState } from "react";
import diwaliImg from "../assets/diwali.jpg";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const price = 57730;
  const deposit = 1000;
  const futurePayments = 56730;

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-6">
        Home <span className="mx-2">❖</span>
        <span className="text-red-800 font-bold">Cart</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-700 mb-8">Cart</h1>

      {/* Cart Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-4 bg-gray-100 px-4 py-3 font-semibold text-gray-700 text-sm">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center px-4 py-6 border-b text-sm">
          {/* Product Info */}
          <div className="flex gap-4">
            <img src={diwaliImg} alt="Diwali Tour" className="w-20 h-20 rounded-md object-cover" />
            <div>
              <p className="font-semibold text-gray-800">Diwali Tour Packages</p>
              <p className="text-black-600">Package Type: <span className="font-medium">Luxury</span></p>
              <p className="text-black-600">Travel Type: <span className="font-medium">Couple</span></p>
              <p className="text-black-600">Deposit: ₹1,000.00</p>
              <p className="text-black-600">Future payments: ₹56,730.00</p>
              <p className="text-black-600">Booking Date: March 1, 2025</p>
            </div>
          </div>

          {/* Price */}
          <span className="text-red-800 font-semibold">₹{price.toLocaleString()}</span>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button onClick={handleDecrement} className="border px-2 py-1">-</button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-10 text-center border rounded"
            />
            <button onClick={handleIncrement} className="border px-2 py-1">+</button>
          </div>

          {/* Subtotal */}
          <span className="font-semibold text-gray-800">
            ₹{(price * quantity).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Update Cart & Coupon */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Coupon code"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm">
            Apply Coupon
          </button>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm">
          Update Cart
        </button>
      </div>

      {/* Full Width Cart Totals */}
      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h2>

        <div className="grid grid-cols-2 gap-4 text-red-700 text-base font-semibold mb-4">
          <span>Subtotal:</span>
          <span>{price.toLocaleString()}</span>

          <span>Total:</span>
          <span>{price.toLocaleString()}</span>

          <span>Due today:</span>
          <span>{deposit.toLocaleString()}</span>

          <span>Future payments:</span>
          <span>{futurePayments.toLocaleString()}</span>
        </div>

        {/* Checkout Button */}
        <button 
           onClick={() => navigate("/checkout")}
         className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold mt-4">
          Proceed to Checkout
        </button>
        
        
        {/* Enhanced Notes Section */}
        <div className="mt-6 text-gray-900 text-lg leading-relaxed space-y-4 font-semibold">
          <p className="flex items-center gap-2">
            ✔ <span>Cost includes GST.</span>
          </p>
          <p className="flex items-center gap-2">
            ✔ <span>Includes all meals and transport from departure city.</span>
          </p>
          <p className="flex items-center gap-2">
            ✔ <span>Does not include flights or train booking.</span>
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-bold">Preliminary booking available:</span> You can do a booking with a nominal amount of
              <span className="text-red-600 font-extrabold"> ₹1,000/-</span>.
            </li>
            <li>
              <span className="font-bold">Balance Payment:</span> Pay the balance within
              <span className="text-red-600 font-extrabold"> 2 weeks</span> of the tour.
            </li>
            <li>
              <span className="font-bold">Refund Policy:</span> This amount is adjustable against your final price or refundable should you choose not to take the tour.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
