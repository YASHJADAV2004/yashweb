import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const Bbckids = () => {
    const schedule = [
        { time: "7 min left", title: "Bluey", subtitle: "Perfect", age: "7+", progress: 30 },
        { time: "9:45 AM", title: "Pop Paper City", subtitle: "Farmyard Runaways", age: "3+", progress: 0 },
        { time: "10:17 AM", title: "Blippi", subtitle: "", age: "4+", progress: 0 },
        { time: "10:23 AM", title: "Hey Duggee", subtitle: "", age: "6+", progress: 0 },
        { time: "7 min left", title: "Teletubbies", subtitle: "", progress: 30 },
        { time: "9:45 AM", title: "Pop Paper City", subtitle: "", progress: 0 },
        { time: "9:55 AM", title: "Messy Goes to Okido", subtitle: "", progress: 0 },
        { time: "10:17 AM", title: "Blippi", subtitle: "", progress: 0 },
        { time: "10:23 AM", title: "Hey Duggee", subtitle: "", progress: 0 },
        { time: "10:28 AM", title: "Hey Duggee", subtitle: "", progress: 0 },
        { time: "10:40 AM", title: "In the Night Garden", subtitle: "", progress: 0 },
        { time: "10:50 AM", title: "Go Jetters", subtitle: "", progress: 0 },
        { time: "11:00 AM", title: "Go Jetters", subtitle: "", progress: 0 },
        { time: "11:10 AM", title: "Bing", subtitle: "", progress: 0 },
        { time: "11:20 AM", title: "Bluey", subtitle: "", progress: 0 },
        { time: "11:30 AM", title: "Andy's Safari Adventures", subtitle: "", progress: 0 },
        { time: "11:45 AM", title: "Dog Loves Books", subtitle: "", progress: 0 },
    ];

    return (

      <>
        <div className="bg-black p-4 text-white w-full">
            <h2 className="text-lg font-bold mb-3">BBC Kids</h2>
            <Swiper 
                slidesPerView={2.5} 
                spaceBetween={10} 
                freeMode={true} 
                modules={[FreeMode]} 
                breakpoints={{
                    640: { slidesPerView: 3.5 },
                    768: { slidesPerView: 5.5 },
                    1024: { slidesPerView: 7.5 },
                    1280: { slidesPerView: 9.5 },
                }}
                className="w-full h-[120px]"
            >
                {schedule.map((show, index) => (
                    <SwiperSlide 
                        key={index} 
                        className="relative flex-none w-40 h-20 bg-gray-900 text-white rounded-lg p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
                    >
                        <span className="text-xs text-gray-400">{show.time}</span>
                        <span className="block font-medium">{show.title}</span>
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 p-3 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-gray-400">{show.time}</span>
                            <span className="block font-bold text-lg">{show.title}</span>
                            {show.subtitle && <span className="text-sm text-gray-300">{show.subtitle}</span>}
                            <span className="text-xs mt-1 block">{show.age}</span>
                        </div>
                        {index === 0 && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600 rounded-full">
                                <div 
                                    className="h-1 bg-red-500 rounded-full transition-all duration-500" 
                                    style={{ width: `${show.progress}%` }}
                                ></div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

      
        </>
    );
};

export default Bbckids;
