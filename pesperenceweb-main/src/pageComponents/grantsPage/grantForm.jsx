import React from "react";

export default function GrantForm() {
  return (
    <div className="flex w-mainwidth items-center justify-center ">
      <div className="bg-Yellow rounded-md shadow-lg p-6 w-mainwidth ">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Apply for a Grant
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700  mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full  rounded-md p-2 "
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="institution"
                className="block text-gray-700 font-medium mb-1"
              >
                Institution/Organization
              </label>
              <input
                id="institution"
                type="text"
                className="w-full  rounded-md p-2  "
                placeholder="Enter your institution name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="purpose"
              className="block text-gray-700 font-medium mb-1"
            >
              Purpose of Grant
            </label>
            <input
              id="purpose"
              type="text"
              className="w-full  rounded-md p-2 "
              placeholder="Enter the purpose of the grant"
            />
          </div>
          <div>
            <label
              htmlFor="funds"
              className="block text-gray-700 font-medium mb-1"
            >
              Proposed Use of Funds
            </label>
            <textarea
              id="funds"
              rows="4"
              className="w-full  rounded-md p-2 "
              placeholder="Explain how the funds will be used"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
