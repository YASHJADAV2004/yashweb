import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaPlay, FaPlus, FaInfoCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const movies = [
  { src: "romanticimg1.jpg", title: "Love ni Bhavai", desc: " Love Ni Bhavai is a 2017 Gujarati movie about a radio DJ who gets caught in a love triangle..." },

  { src: "romanticimg2.jpg",  title: "Shaadi me zaroor aana", desc: " Shaadi Mein Zaroor Aana revolves around the journey of two individuals, Satyendra and Aarti, from being together through a marriage proposal and falling in love ..." },

  { src: "romanticimg3.jpg", title: "Sing is King", desc: "Singh is King is a 2008 Bollywood movie about a villager who becomes involved with a gang of criminals and falls in love ..." },

  { src: "romanticimg4.jpg", title: "I", desc: "The film, told in nonlinear narrative, tells the story of Lingesan, a bodybuilder-turned-supermodel, who sets out to exact revenge against his enemies after they turn him into a hunchback by injecting him with I virus.... " },

  { src: "romanticimg5.jpg", title: "Shiddat", desc: "Description : Shiddat is a 2021 Hindi romance film about two couples and the passionate love they share..." },
];


const Romanticmovie = () => {
     const [hoveredMovie, setHoveredMovie] = useState(null);
    
    
  return (
    <>
      <div className="w-full bg-black py-6 px-4 md:px-10">
              <h2 className="text-white text-3xl font-bold mb-4">Movies</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-lg font-medium">Romantic movies</span>
                <span className="text-blue-500 cursor-pointer text-lg font-medium">See more &gt;</span>
              </div>
        
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1.5}
                spaceBetween={15}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="w-full"
              >
                {movies.map((movie, index) => (
                  <SwiperSlide key={index} className="relative group">
                    <div className="relative overflow-hidden rounded-xl">
                      {/* Movie Image with Responsive Height */}
                      <img
                        src={movie.src}
                        alt={movie.title}
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Hover Effect - Movie Details */}
                      <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                        <h3 className="text-lg font-bold">{movie.title}</h3>
                        <p className="text-sm mt-2 text-gray-300">{movie.desc}</p>
        
                        {/* Buttons on Hover */}
                        <div className="mt-3 flex gap-3">
                          <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold">
                            <FaPlay /> Watch Now
                          </button>
                          <button className="bg-gray-700 p-3 rounded-full"><FaPlus /></button>
                          <button className="bg-gray-700 p-3 rounded-full"><FaInfoCircle /></button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> 
    

    </>
  )
}

export default Romanticmovie