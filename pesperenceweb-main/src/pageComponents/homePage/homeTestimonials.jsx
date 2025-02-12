import { useState } from "react";
import leftarrow from "../../assets/leftarrow.svg";

const testimonials = [
  {
    text: "The service was absolutely outstanding! I couldn't be happier with the results The service was absolutely outstanding! I couldn't be happier with the resultsThe service was absolutely outstanding! I couldn't be happier with the results",
    name: "Sarah Johnson",
  },
  {
    text: "The service was absolutely outstanding! I couldn't be happier with the results The service was absolutely outstanding! I couldn't be happier with the resultsThe service was absolutely outstanding! I couldn't be happier with the results",
    name: "Sarah Johnson",
  },
  {
    text: "rviThe service was absolutely outstanding! I couldn't be happier with the resultsThe service was absolutely outstanding! I couldn't be happier with the results",
    name: "Sarah Johnson",
  },
  {
    text: "Professional, efficient, and incredibly helpful. Five stars!",
    name: "James Wilson",
  },
];

export default function HomeTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section className="w-full mx-auto relative py-16 ">
      <div className="flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <img src={leftarrow} className="min-w-8 min-h-8" />
        </button>

        {/* Testimonials Container */}
        <div className="relative flex items-center justify-center gap-4 px-4 overflow-hidden shadow-xl">
          {/* Left Shadow */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/30 to-transparent pointer-events-none z-30" />

          {getVisibleTestimonials().map((testimonial, idx) => (
            <div
              key={idx}
              className={`
        transition-transform duration-700 ease-in-out transform
        ${
          testimonial.position === 0
            ? "scale-100 opacity-100 z-20"
            : "scale-95 opacity-50 blur-sm z-10"
        }
      `}
            >
              <div className="bg-important_text relative rounded-lg w-96 md:w-homeTestimonial h-72 px-8 py-12 text-white shadow-lg">
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            </div>
          ))}

          {/* Right Shadow */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/30 to-transparent pointer-events-none z-30" />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Next testimonial"
        >
          <img src={leftarrow} className="min-w-8 min-h-8 rotate-180" />
        </button>
      </div>
    </section>
  );
}
