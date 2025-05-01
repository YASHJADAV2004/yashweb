import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Bbckids from "./Bbckids";
import FanCode from "./FanCode";
import Bbclayer from "./Bbclayer";
import ManoramaMAX from "./ManoramaMAX";
import Museumtv from "./Museumtv";


const events = [
  {
    id: 1,
    title: "Grand Prix of Thailand - Free Practice",
    category: "MotoGP",
    status: "LIVE",
    time: "9:10 AM",
    description: "MotoGP action from the Grand Prix of Thailand free practice session.",
    price: "₹599/year",
    image: "livetvimg1.jpeg",
  },
  {
    id: 2,
    title: "Testing: Day 3",
    category: "F1",
    status: "UPCOMING",
    time: "Live at 12:15 PM",
    description: "Upcoming Formula 1 testing event.",
    image: "livetvimg2.jpeg",
  },
  {
    id: 3,
    title: "Grand Prix of Thailand - Race",
    category: "MotoGP",
    status: "UPCOMING",
    time: "Live at 1:25 PM",
    description: "MotoGP event taking place in Thailand.",
    image: "livetvimg3.jpeg",
  },
  {
    id: 4,
    title: "F1 Aramco Pre-Season Testing",
    category: "F1",
    status: "UPCOMING",
    time: "Live at 5:20 PM",
    description: "Pre-season testing for Formula 1.",
    image: "livetvimg4.jpeg",
  },
  {
    id: 5,
    title: "F1 Aramco Pre-Season Testing",
    category: "F1",
    status: "UPCOMING",
    time: "Live at 5:20 PM",
    description: "Pre-season testing for Formula 1.",
    image: "livetvimg5.jpeg",
  },
  {
    id: 6,
    title: "F1 Aramco Pre-Season Testing",
    category: "F1",
    status: "UPCOMING",
    time: "Live at 5:20 PM",
    description: "Pre-season testing for Formula 1.",
    image: "livetvimg6.jpeg",
  },
];

const EventCard = ({ event }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden w-[300px] transition-transform transform hover:scale-110 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />

      {/* Badge for LIVE or UPCOMING */}
      <span
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${
          event.status === "LIVE" ? "bg-red-600" : "bg-gray-600"
        }`}
      >
        {event.status}
      </span>

      <div className="p-4 relative">
        <h3 className="text-lg font-semibold">{event.category}</h3>
        <p className="text-sm text-gray-400">{event.title}</p>
        <p className="text-sm mt-2 font-bold">{event.time}</p>
      </div>

      {/* Hover Effect - Shows Full Details */}
      {hover && (
        <div className="absolute inset-0 bg-black bg-opacity-90 p-4 flex flex-col justify-between transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-sm">{event.description}</p>
          {event.price && (
            <p className="text-sm mt-2 flex items-center">🔒 Subscribe to FanCode for {event.price}</p>
          )}
          <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full">+</button>
        </div>
      )}
    </div>
  );
};

const LiveTV = () => {
  const swiperRef = useRef(null);

  return (
    <div className="p-6 bg-black min-h-screen">
      <h2 className="text-white text-2xl font-bold mb-4">FanCode: Live and Upcoming Events</h2>
      <div className="relative">
        {/* Left Navigation Button */}
        <button
          className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          ◀
        </button>

        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1.2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
          freeMode={true}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <button
          className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          ▶
        </button>
      </div>
      <Bbckids/>
      <Bbclayer/>
      <FanCode/>
      <ManoramaMAX/>
      <Museumtv/>
  
   
    </div>
  );
};

export default LiveTV;
