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
import Firstepisode from './Firstepisode';
import Tvscomedy from './Tvscomedy';
import Tvaction from './Tvaction';

const Tvshow = () => {

  const [hoveredMovie, setHoveredMovie] = useState(null);
  
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

  return (
    <>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper swiper1">

<SwiperSlide className="bacimg1 relative">
  {/* Video Background */}
  <div className="relative w-full h-full overflow-hidden">
    <video
      ref={videoRef}
      src="public\tvshowvideo1.webm"
      autoPlay
      muted={isMuted}
      loop
      className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
    ></video>

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
  </div>

  {/* Left-Aligned Text Content */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-24 text-white">
    {/* Prime Label */}
    <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-2">prime</div>

    {/* Movie Title */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
       <span className="text-white">REACHER</span>
    </h1>

    {/* Ranking */}
    <p className="text-green-400 text-sm sm:text-lg font-semibold mt-1">New episode Thursday</p>

    {/* Description */}
    <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2 max-w-sm sm:max-w-md lg:max-w-lg">
    Season 3・Based on Lee Child novel "Persuader", Reacher hurtles into the dark heart of a vast...
    </p>

    {/* Buttons */}
    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
      <button className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-lg font-bold">
        <FaPlay /> Join Prime Watch now
      </button>
      <div className="flex gap-2">
        <button className="bg-gray-800 p-3 rounded-full"><FaPlus /></button>
        <button className="bg-gray-800 p-3 rounded-full"><FaInfoCircle /></button>
      </div>
    </div>

    {/* Mute/Unmute Button */}
    <button
      onClick={toggleMute}
      className="absolute bottom-5 right-5 bg-gray-800 p-3 rounded-full text-white"
    >
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>

    {/* Membership Info */}
    <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-5">Watch with a Prime membership</p>
  </div>
</SwiperSlide>

<SwiperSlide className="bacimg1 relative">
  {/* Video Background */}
  <div className="relative w-full h-full overflow-hidden">
    <video
      ref={videoRef}
      src="public/tvshowvideo2.mp4"
      autoPlay
      muted={isMuted}
      loop
      className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
    ></video>

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
  </div>

  {/* Left-Aligned Text Content */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-24 text-white">
    {/* Prime Label */}
    <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-2">prime</div>

    {/* Movie Title */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Paatal <span className="text-white">Lok</span>
    </h1>

    {/* Ranking */}
    <p className="text-green-400 text-sm sm:text-lg font-semibold mt-1">#2 in India</p>

    {/* Description */}
    <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2 max-w-sm sm:max-w-md lg:max-w-lg">
    Season 2・Inspector Hathi Ram Chaudhary, the haggard, unlikely hero, investigates a high-profil...
    </p>

    {/* Buttons */}
    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
      <button className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-lg font-bold">
        <FaPlay /> Join Prime Watch now
      </button>
      <div className="flex gap-2">
        <button className="bg-gray-800 p-3 rounded-full"><FaPlus /></button>
        <button className="bg-gray-800 p-3 rounded-full"><FaInfoCircle /></button>
      </div>
    </div>

    {/* Mute/Unmute Button */}
    <button
      onClick={toggleMute}
      className="absolute bottom-5 right-5 bg-gray-800 p-3 rounded-full text-white"
    >
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>

    {/* Membership Info */}
    <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-5">Watch with a Prime membership</p>
  </div>
</SwiperSlide>
<SwiperSlide className="bacimg1 relative">
  {/* Video Background */}
  <div className="relative w-full h-full overflow-hidden">
    <video
      ref={videoRef}
      src="public/tvshowvideo3.webm"
      autoPlay
      muted={isMuted}
      loop
      className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
    ></video>

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
  </div>

  {/* Left-Aligned Text Content */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-24 text-white">
    {/* Prime Label */}
    <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-2">prime</div>

    {/* Movie Title */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
      <span className="text-white">Beast Games</span>
    </h1>

    {/* Ranking */}
    <p className="text-green-400 text-sm sm:text-lg font-semibold mt-1">#3 in India</p>

    {/* Description */}
    <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2 max-w-sm sm:max-w-md lg:max-w-lg">
    Season 1・I gathered 1,000 people to fight for $5,000,000, the LARGEST cash prize in TV histor...
    </p>

    {/* Buttons */}
    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
      <button className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-lg font-bold">
        <FaPlay /> Join Prime Watch now
      </button>
      <div className="flex gap-2">
        <button className="bg-gray-800 p-3 rounded-full"><FaPlus /></button>
        <button className="bg-gray-800 p-3 rounded-full"><FaInfoCircle /></button>
      </div>
    </div>

    {/* Mute/Unmute Button */}
    <button
      onClick={toggleMute}
      className="absolute bottom-5 right-5 bg-gray-800 p-3 rounded-full text-white"
    >
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>

    {/* Membership Info */}
    <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-5">Watch with a Prime membership</p>
  </div>
</SwiperSlide>
</Swiper>

<Firstepisode/>
<Tvscomedy/>
<Tvaction/>

    </>
  )
}

export default Tvshow