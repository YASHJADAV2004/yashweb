// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown, ChevronUp, Search, Menu, X } from "lucide-react";

// const languages = [
//   ["Bahasa Indonesia", "Italiano", "Suomi", "العربية", "한국어"],
//   ["Bahasa Melayu", "Magyar", "Svenska", "हिन्दी", "தமிழ்"],
//   ["Dansk", "Nederlands", "Türkçe", "తెలుగు", "ไทย"],
//   ["Deutsch", "Norsk", "Wikang Filipino", "Čeština", "日本語"],
//   ["English", "Polski", "Ελληνικά", "Русский", "简体中文"],
//   ["Español", "Português (Brasil)", "Português (Portugal)", "עברית", "繁體中文"],
//   ["Español Latinoamérica", "Français", "Română"],
// ];

// const Exampl = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Prevent background scrolling when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [menuOpen]);

//   const handleLanguageSelect = (lang) => {
//     setSelectedLanguage(lang);
//     setIsOpen(false);
//   };

//   return (
//     <header className="bg-black text-white">
//       <nav className="flex items-center justify-between px-6 py-3" role="navigation">
//         {/* Left Side: Logo and Navigation Links */}
//         <div className="flex items-center space-x-6">
//           {/* Logo */}
//           <span className="text-lg font-bold">
//             <span className="text-white">prime</span>
//             <span className="text-gray-400">video</span>
//           </span>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-6">
//             <a href="#" className="text-gray-300 hover:text-white">Home</a>
//             <a href="#" className="text-gray-300 hover:text-white">Movies</a>
//             <a href="#" className="text-gray-300 hover:text-white">TV shows</a>
//             <a href="#" className="text-gray-300 hover:text-white">Live TV</a>
//             <span className="text-gray-500">|</span>
//             <a href="#" className="text-gray-300 hover:text-white flex items-center">
//               <span className="mr-1">▦</span> Subscriptions
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-white"
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Right Side: Search, Language Dropdown, Profile, Join Prime */}
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <button className="text-gray-300 hover:text-white" aria-label="Search">
//             <Search size={20} />
//           </button>

//           {/* Language Dropdown */}
//           <div className="relative inline-block" ref={dropdownRef}>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="flex items-center px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none transition"
//               aria-haspopup="true"
//               aria-expanded={isOpen}
//             >
//               {selectedLanguage} {isOpen ? <ChevronUp className="ml-1" size={18} /> : <ChevronDown className="ml-1" size={18} />}
//             </button>

//             {/* Dropdown Menu with Smooth Animation */}
//             <div
//               className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-gray-900 text-white shadow-lg rounded-lg p-4 z-50 transition-all duration-300 ${
//                 isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
//               }`}
//               role="menu"
//               aria-hidden={!isOpen}
//             >
//               <div className="grid grid-cols-5 gap-2 text-sm">
//                 {languages.flat().map((lang, index) => (
//                   <span
//                     key={index}
//                     onClick={() => handleLanguageSelect(lang)}
//                     className="hover:text-blue-400 cursor-pointer flex items-center"
//                     role="menuitem"
//                   >
//                     {selectedLanguage === lang ? "✔️ " : ""}{lang}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* More Options */}
//           <button className="text-gray-300 hover:text-white" aria-label="More Options">⋮</button>

//           {/* Profile Icon */}
//           <div className="w-8 h-8 bg-gray-500 rounded-full"></div>

//           {/* Join Prime */}
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//             Join Prime
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu (Hidden by default) with Smooth Slide-in Effect */}
//       <div
//         className={`md:hidden bg-gray-900 p-6 fixed inset-0 transform transition-transform duration-300 ${
//           menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//         }`}
//       >
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="absolute top-4 right-4 text-white"
//           aria-label="Close Menu"
//         >
//           <X size={24} />
//         </button>

//         <div className="flex flex-col space-y-3">
//           <a href="#" className="text-gray-300 hover:text-white">Home</a>
//           <a href="#" className="text-gray-300 hover:text-white">Movies</a>
//           <a href="#" className="text-gray-300 hover:text-white">TV shows</a>
//           <a href="#" className="text-gray-300 hover:text-white">Live TV</a>
//           <a href="#" className="text-gray-300 hover:text-white flex items-center">
//             <span className="mr-1">▦</span> Subscriptions
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Exampl;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const languages = [
  ["Bahasa Indonesia", "Italiano", "Suomi", "العربية", "한국어"],
  ["Bahasa Melayu", "Magyar", "Svenska", "हिन्दी", "தமிழ்"],
  ["Dansk", "Nederlands", "Türkçe", "తెలుగు", "ไทย"],
  ["Deutsch", "Norsk", "Wikang Filipino", "Čeština", "日本語"],
  ["English", "Polski", "Ελληνικά", "Русский", "简体中文"],
  ["Español", "Português (Brasil)", "Português (Portugal)", "עברית", "繁體中文"],
  ["Español Latinoamérica", "Français", "Română"],
];

const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black text-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-lg font-bold text-[36px]">
              <span className="text-white">prime</span>
              <span className="text-gray-400">video</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-[20px] font-bold relative">
            <Search className="text-gray-300 cursor-pointer hover:text-white" />
            <div className="relative">
              <button
                className="bg-black text-gray-300 hover:text-white px-2 py-1"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {selectedLang}
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 bg-gray-800 text-white shadow-md mt-2 p-3 rounded-md w-48 max-h-60 overflow-y-auto">
                  {languages.flat().map((lang, index) => (
                    <button
                      key={index}
                      className="text-left px-2 py-1 hover:bg-gray-700 rounded w-full"
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="text-gray-300 hover:text-white">⋮</button>
            <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Join Prime
            </button>
          </div>

          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 mt-3">
            <Link to="/" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-2">Home</Link>
            <Link to="/movies" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-2">Movies</Link>
            <a href="/tvshows" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-2">TV Shows</a>
            <a href="/livetv" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-2">Live TV</a>
            <a href="/subscriptions" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-2 flex items-center">
              <span className="mr-1">▦</span> Subscriptions
            </a>
            <div className="relative">
              <button className="bg-black text-gray-300 hover:text-white px-2 py-1" onClick={() => setIsLangOpen(!isLangOpen)}>
                {selectedLang}
              </button>
              {isLangOpen && (
                <div className="absolute top-full left-0 bg-gray-800 text-white shadow-md mt-2 p-3 rounded-md w-48 max-h-60 overflow-y-auto">
                  {languages.flat().map((lang, index) => (
                    <button
                      key={index}
                      className="text-left px-2 py-1 hover:bg-gray-700 rounded w-full"
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav1;



