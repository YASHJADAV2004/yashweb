import React from "react";

const channels = [
  "LIONSGATE PLAY",
  "discovery+",
  "BBC PLAYER",
  "manoramaMAX",
  "hoichoi",
  "CHAUPAL",
  "Anime Times",
  "SONY PICTURES STREAM",
  "MGM+",
];

const Sec3 = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6 pt-[150px]">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Your favorite subscriptions all in one place
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16">
        {channels.map((channel, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-3xl font-bold p-6 text-center rounded-lg w-40 h-[100px] md:w-82 transform transition duration-300 hover:scale-110 hover:shadow-xl"
          >
            {channel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec3;
