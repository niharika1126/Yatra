export default function Publication1() {
  return (
    // Main container for the publication with background color, rounded corners, and shadow
    <div className="bg-Yellow rounded-lg shadow-lg w-full text-primary h-featuredpublication p-8 flex items-center md:items-start flex-col justify-between">
      {/* Date and information container */}
      <div className="w-full flex justify-end items-center flex-col md:flex-row">
        {/* Added flex-row for larger screens */}
        <div className="flex items-center flex-col md:ml-auto">
          {/* Move to the right on larger screens */}
          <p className="text-4xl font-bold">08</p> {/* Publication day */}
          <p className="text-sm">Feb 24</p> {/* Publication month and date */}
        </div>
      </div>

      {/* Title of the publication, centered on small screens and left-aligned on larger screens */}
      <p className="text-2xl font-bold md:pr-8 text-center md:text-left">
       The Future of Innovation Research and Invention
      </p>

      {/* Description of the publication, limited to 6 lines on larger screens using line-clamp */}
      <p className="text-sm md:pr-8 line-clamp-6 text-center md:text-left">
        Discover how we are leveraging cutting-edge technology to address the world's most pressing issues.
         Our commitment to sustainability and inclusivity drives every decision we make. Discover how we are leveraging 
         cutting-edge technology to address the world's most pressing issues. Our commitment to sustainability and inclusivity 
         drives every decision we make.
       </p>

      {/* Author name, aligned to the right on larger screens */}
      
      {/* Author name, aligned to the left */}
      <p className="text-sm">
        {/* Move the author text to the left */}
        By John Doe
      </p>
    </div>
  );
}
