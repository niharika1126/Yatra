import React from "react";
import journal from "../../assets/Background.svg";

function ContentCard({
  type,
  image,
  title,
  author,
  description,
  views,
  date,
  price,
}) {
  {
    /*Journal Card */
  }

  return (
    <div className="flex w-mainwidth gap-4 sm:gap-8 mx-4 sm:mx-8 mb-6 sm:mb-10">
      <div className="sm:w-56 sm:h-66">
        <img
          src={image}
          alt={type}
          className="w-36 sm:w-full sm:h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1 mt-2">
        <h2 className="text-sm  sm:text-2xl text-important_text font-bold mb-1 sm:mb-4">
          {title}
        </h2>
        <div className="flex items-center gap-4 mb-2 sm:mb-4">
          <span className="text-xs sm:text-sm text-gray-500">
            {views} views {date}
          </span>
        </div>
        <p className="text-xs sm:text-base text-gray-600 sm:mb-6">{author}</p>
        <p className="text-md  line-clamp-3 leading-6 text-gray-700">
          {description}
        </p>
        <div className="flex gap-2  ">
          <p className="text-xs  sm:text-sm sm:w-24 sm:mr-4 text-important_text  font-semibold sm:px-3 sm:py-1  mt-3 sm:mt-10">
            Price: ${price}
          </p>
          <button className="text-xs sm:text-sm sm:w-32 text-white hover:scale-105 duration-300 font-semibold px-1 py-1  sm:px-3 sm:py-1 bg-secondary hover:bg-secondary/90 shadow-xl rounded-md mt-2 sm:mt-10">
            Buy On Amazon
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <div className="w-mainwidth">
      {/* results section  */}
      <ContentCard
        type="Journal"
        image={journal}
        title="How to Build a Search Page with React and Tailwind CSS"
        author="Anirudh Sharma"
        description="Learn how to create a professional search page using React and Tailwind CSS. We'll cover component structure, styling, and responsive design principles.
Coherence Applied is a periodical released monthly by the coherence editorial board collecting the scientific and technological development happened across the globe in last 90 days and communicating it to the audience in a very simple comprehensive and concise form."
        views="10K"
        date="2 days ago"
        price="280"
      />
      <ContentCard
        type="Journal"
        image={journal}
        title="How to Build a Search Page with React and Tailwind CSS"
        author="Anirudh Sharma"
        description="Learn how to create a professional search page using React and Tailwind CSS. We'll cover component structure, styling, and responsive design principles.
Coherence Applied is a periodical released monthly by the coherence editorial board collecting the scientific and technological development happened across the globe in last 90 days and communicating it to the audience in a very simple comprehensive and concise form."
        views="10K"
        date="2 days ago"
        price="280"
      />
      <ContentCard
        type="Journal"
        image={journal}
        title="How to Build a Search Page with React and Tailwind CSS"
        author="Anirudh Sharma"
        description="Learn how to create a professional search page using React and Tailwind CSS. We'll cover component structure, styling, and responsive design principles.
Coherence Applied is a periodical released monthly by the coherence editorial board collecting the scientific and technological development happened across the globe in last 90 days and communicating it to the audience in a very simple comprehensive and concise form."
        views="10K"
        date="2 days ago"
        price="280"
      />
      <ContentCard
        type="Journal"
        image={journal}
        title="How to Build a Search Page with React and Tailwind CSS"
        author="Anirudh Sharma"
        description="Learn how to create a professional search page using React and Tailwind CSS. We'll cover component structure, styling, and responsive design principles.
Coherence Applied is a periodical released monthly by the coherence editorial board collecting the scientific and technological development happened across the globe in last 90 days and communicating it to the audience in a very simple comprehensive and concise form."
        views="10K"
        date="2 days ago"
        price="280"
      />
      <ContentCard
        type="Journal"
        image={journal}
        title="How to Build a Search Page with React and Tailwind CSS"
        author="Anirudh Sharma"
        description="Learn how to create a professional search page using React and Tailwind CSS. We'll cover component structure, styling, and responsive design principles.
Coherence Applied is a periodical released monthly by the coherence editorial board collecting the scientific and technological development happened across the globe in last 90 days and communicating it to the audience in a very simple comprehensive and concise form."
        views="10K"
        date="2 days ago"
        price="280"
      />
      <ContentCard
        type="Journal"
        image={journal}
        title="How to Build a Search Page with React and Tailwind CSS"
        author="Anirudh Sharma"
        description="Learn how to create a professional search page using React and Tailwind CSS. We'll cover component structure, styling, and responsive design principles.
Coherence Applied is a periodical released monthly by the coherence editorial board collecting the scientific and technological development happened across the globe in last 90 days and communicating it to the audience in a very simple comprehensive and concise form."
        views="10K"
        date="2 days ago"
        price="280"
      />
    </div>
  );
}
