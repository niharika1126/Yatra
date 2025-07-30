import React from "react";

const LC = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-16">
     <h1 className="text-5xl font-extrabold text-red-700 text-center mb-2">Login/Register</h1>

      <p className="text-sm text-center text-gray-500 mb-10">Home &gt; My Account</p>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Login Section */}
        <div className="w-full md:w-1/2 border p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-red-700 mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="recaptcha" />
              <label htmlFor="recaptcha" className="text-sm">I'm not a robot</label>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md"
              >
                Log in
              </button>
              <label className="text-sm cursor-pointer">Remember me</label>
            </div>

            <div>
              <a href="#" className="text-sm text-red-500 hover:underline">
                Lost your password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div className="w-full md:w-1/2 border p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-red-700 mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>

            <p className="text-xs text-gray-500">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-xs text-gray-500">
              Your personal data will be used to support your experience throughout this
              website, to manage access to your account, and for other purposes described
              in our <a href="#" className="text-red-500 underline">privacy policy</a>.
            </p>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LC;
