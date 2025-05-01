import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaPlus, FaInfoCircle } from 'react-icons/fa';

const movies = [
    { src: "tvvideo1.mp4", title: "Beast Game", desc: "Season 1・I gathered 1,000 people to fight for $5,000,000, the LARGEST cash prize in TV history! We’re also..." },
    { src: "tvvideo2.mp4", title: "Paatal Lok", desc: "Season 1・A down and out cop lands the case of a lifetime when four suspects are nabbed in the..." },
    { src: "tvvideo3.mp4", title: "Indian Police Force", desc: "Season 1・Indian Police Force is an action-packed series that follows the harrowing journey of Delhi Police..." },
    { src: "tvvideo4.mp4", title: "Inspector Rishi", desc: "Season 1・A sceptic crime branch Inspector Rishi Nandhan assisted by his two trusted sub-inspectors..." },
    { src: "tvvideo5.mp4", title: "Sivarapalli", desc: "Season 1・Shyam, an engineering graduate from Hyderabad, reluctantly takes up the job of Panchayat..." }
];

const Firstepisode = () => {
    return (
        <div className="w-full bg-black py-6 px-4 md:px-10">
            <h2 className="text-white text-3xl font-bold mb-4">TV Shows</h2>
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-lg font-medium">December Delights: Watch First Episode Free</span>
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
    );
};

export default Firstepisode;
