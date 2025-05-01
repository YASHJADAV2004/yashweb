import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaPlus, FaInfoCircle } from 'react-icons/fa';

const movies = [
    { src: "tvcomedyvideo1.mp4", title: "Friends", desc: "Season 10・Six young people find the companionship and comfort they get from each other to be the perfect..." },
    { src: "tvcomedyvideo2.mp4", title: "Betty La Fea, The Story Continues", desc: "Season 1・Betty has not lived with Armando for two years after having found him in a compromising..." },
    { src: "tvcomedyvideo3.mp4", title: "The Pradeeps of Pittsburgh", desc: "Season 1・The Pradeeps attempt to prove their innocence to a pair of investigating government agents by..." },
    { src: "tvcomedyvideo4.mp4", title: "Marry My Husband", desc: "Season 1・Kang Ji-won, a terminally ill cancer patient, is killed by her husband and best friend after she..." },
    { src: "tvcomedyvideo5.mp4", title: "The Boys", desc: "Season 1・In a world where superheroes embrace the darker side of their massive celebrity and fame..." }
];



const Tvscomedy = () => {
  return (
    <>
      <div className="w-full bg-black py-6 px-4 md:px-10">
               
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400  text-3xl font-bold ">Comedy TV</span>
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

export default Tvscomedy