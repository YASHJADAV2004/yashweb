import React from "react";

const Sec1 = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-around p-6">
      <div className="text-center">
        <h1 className="text-[60px] font-bold ">Welcome to Prime Video</h1>
        <p className="text- text-gray-300 mt-2 text-[30px] ">
          Join Prime to watch the latest movies, TV shows, and <br /> award-winning Amazon Originals
        </p>
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 w-[250px] h-[80px]">
          Sign in to join Prime
        </button>
      </div>
      
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {[
          { title: "Game Changer", image: "homeimg1.jpeg" },
          { title: "Baby John", image: "homeimg2.jpeg" },
          { title: "Marco", image: "homeimg3.jpeg" },
          { title: "My Fault London", image: "homeimg4.jpeg" },
          { title: "Reacher", image: "homeimg5.jpeg" },
          { title: "Suzhal 2", image: "homeimg6.jpeg" },
        ].map((movie, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4 rounded-b-lg">
              <h2 className="text-lg font-bold">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec1;
