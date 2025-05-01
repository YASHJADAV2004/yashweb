import React from "react";

const Sec2 = () => {
  return (
    <div className="relative w-full bg-black text-white py-16 px-8 flex justify-around items-center">
      {/* Left Section - Text */}
      <div className="md:w-1/2 lg:w-1/3 text-center md:text-left mb-6 md:mb-0 flex flex-col items-center md:items-center">
        <h1 className="text-[55px] font-bold">Movie rentals on Prime Video</h1>
        <p className="text-[30px] mt-4">Early Access to new movies, before digital subscription</p>
        <button className="mt-6 bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-gray-200 w-[250px] h-[80px]">
          Rent now
        </button>
      </div>

      {/* Right Section - Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-5 gap-4 md:w-1/2 lg:w-2/4 justify-center items-center">
        {[
          { src: "/sec2img1.jpeg", alt: "Gladiator 2" },
          { src: "/sec2img2.jpeg", alt: "Wicked" },
          { src: "/sec2img3.jpeg", alt: "The Wild Robot" },
          { src: "/sec2img4.jpeg", alt: "Sonic the Hedgehog 3" },
          { src: "/sec2img5.jpeg", alt: "Kraven the Hunter" },
          { src: "/sec2img6.jpeg", alt: "The Count of Monte Cristo" },
        ].map((movie, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={movie.src}
              alt={movie.alt}
              className="rounded-lg w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec2;
