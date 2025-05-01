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
  { src: "BhoolBhulaiyaa2.jpg", title: "BhoolBhulaiyaa2", desc: " Description : John's peaceful life with daughter Khushi is disrupted by a sex-trafficking gang..." },

  { src: "Kaashmora.jpg",  title: "Kaashmora", desc: " Description : Chief Minister Sathyamoorthy is haunted by visions tied to his corrupt rule. His foster sons vi..." },
  { src: "kanchna2.jpg", title: "kanchna2", desc: " Description : Love Story..." },
  { src: "Stree2.jpg", title: "Stree2", desc: "Description : In the film, Bahubali is the heir apparent to the kingdom of Mahishmati... " },
  { src: "Tumbbad.jpg", title: "Tumbbad", desc: "Description : Goat is about a 19-year-old who joins college with his brother and pledges the same fraternity..." },
];


const Horrormovie = () => {
  const [hoveredMovie, setHoveredMovie] = useState(null);


  return (

    <>

     <div className="w-full bg-black py-6 px-4 md:px-10">
          <h2 className="text-white text-3xl font-bold mb-4">Movies</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 text-lg font-medium">Horror movies</span>
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
      );
    };
    
    export default Horrormovie;
    
