export default function Form() {
  return (
    <div className="flex flex-col items-center md:items-start w-mainwidth mx-auto">
      {/* Title */}

      {/* Form Section */}
      <div className="bg-Yellow shadow-lg rounded-lg p-6 w-[90%] mx-auto">
        <p className="text-primary text-2xl font-bold mb-4">
          Apply for Becoming Peer Researcher and Reviewer
        </p>

        {/* Name & Organization - Same Line */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-1/2">
            <p className="text-primary font-medium">Full Name</p>
            <input
              type="text"
              
              className="w-full p-2 bg-white text-black rounded-md outline-none"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-primary font-medium">Institution/Organization</p>
            <input
              type="text"
             
              className="w-full p-2 bg-white text-black rounded-md outline-none"
            />
          </div>
        </div>

        {/* Purpose & Proposed Use - Larger Fields */}
        <div className="mb-6">
          <p className="text-primary font-medium">Purpose of Grant</p>
          <input
            type="text"
           
            className="w-full p-6 bg-white text-black rounded-md outline-none"
          />
        </div>

        <div className="mb-6">
          <p className="text-primary font-medium">Proposed Use of Funds</p>
          <textarea
            type="text"
            
            className="w-full p-6 bg-white text-black rounded-md outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button className="bg-secondary text-white px-6 py-2 rounded-md font-semibold">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}