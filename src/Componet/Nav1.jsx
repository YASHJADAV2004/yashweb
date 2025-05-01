import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react"; // Import icons

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
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <nav className="text-white px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-6">
              <span className="text-lg font-bold text-[36px]">
                <span className="text-[blue]">prime</span>
                <span className="text-gray-400">video</span>
              </span>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4 text-[28px] font-bold cursor-pointer ">
                <Link to="/" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">Home</Link>
                <Link to="/movies" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">Movies</Link>
                <Link to="/tvshows" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">TV Shows</Link>
                <Link to="/livetv" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">Live TV</Link>
                <span className="text-gray-500">|</span>
                <Link to="/subscriptions" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded flex items-center">
                  <span className="mr-1">▦</span> Subscriptions
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4 text-[20px] font-bold">
              <Search className="text-gray-300 cursor-pointer hover:text-white" />

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center bg-black text-gray-300 text-[25px] hover:text-white px-2 py-1 rounded"
                >
                  {selectedLang} <ChevronDown className="ml-2" size={25} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-black border border-gray-700 text-white shadow-lg rounded-md w-[400px] p-4 max-h-150 overflow-y-auto">
                    <div className="grid grid-cols-3 gap-2">
                      {languages.flat().map((lang) => (
                        <div
                          key={lang}
                          onClick={() => {
                            setSelectedLang(lang);
                            setIsLangOpen(false);
                          }}
                          className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded"
                        >
                          {lang}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="text-gray-300 hover:text-white">⋮</button>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Join Prime
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col text-[28px]  space-y-3 mt-3">
              <Link to="/" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">Home</Link>
              <Link to="/movies" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">Movies</Link>
              <Link to="/tvshows" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">TV Shows</Link>
              <Link to="/livetv" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded">Live TV</Link>
              <Link to="/subscriptions" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded flex items-center">
                <span className="mr-1">▦</span> Subscriptions
              </Link>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Join Prime
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Add padding to push content down and prevent overlap */}
      <div className="pt-[80px]"></div>
    </>
  );
};

export default Nav1;
