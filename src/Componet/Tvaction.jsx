import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaPlus, FaInfoCircle } from 'react-icons/fa';

const movies = [
    { src: "tvactionvideo1.mp4", title: "Citadel Honey Bunny", desc: "Season 1・The Indian series from the world of Citadel, executive producers the Russo Brothers and filmmakers..." },
    { src: "tvactionvideo2.mp4", title: "Bambai Meri Jaan", desc: "Season 1・Betty has not lived with Armando for two years after having found him in a compromising..." },
    { src: "tvactionvideo3.mp4", title: "The Forgotten Army - Azaadi Ke Liye", desc: "Season 1・The Forgotten Army is a true epic war series about the Indian soldiers from the Azad Hind Fauj wh..." },
    { src: "tvactionvideo4.mp4", title: "The Lord of the Rings: The Rings of Power", desc: "Season 2・Sauron has returned… with designs on ruling all of Middle-earth..." },
    { src: "tvactionvideo5.mp4", title: "The Wheel of Time", desc: "Season 2・Though Rand thought he destroyed the Dark One, evil is not gone from the world. Threats new a..." }
];


const Tvaction = () => {
  return (
    <>
         <div className="w-full bg-black py-6 px-4 md:px-10">
                  
                   <div className="flex justify-between items-center mb-4">
                       <span className="text-gray-400  text-3xl font-bold ">Action and adventure TV</span>
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
                                   <video
                                       src={movie.src}
                                       className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                                       muted
                                       loop
                                       autoPlay
                                       playsInline
                                   />
       
                                   <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                                       <h3 className="text-lg font-bold">{movie.title}</h3>
                                       <p className="text-sm mt-2 text-gray-300">{movie.desc}</p>
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

export default Tvaction