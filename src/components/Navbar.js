import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import logo1 from "assets/img/logo.png";
import logo2 from "assets/img/logo-white.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset < 30 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div
      className={`py-4 z-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } fixed left-0 top-0 w-screen`}
    >
      <div className="relative max-w-screen-xl mx-auto flex items-center justify-between">
        {isScrolled ? (
          <img src={logo1} alt="" className="h-8" />
        ) : (
          <img src={logo2} alt="" className="h-8" />
        )}

        {/* MIDDLE */}

        <div
          className={`absolute top-0 left-0 right-0 m-auto flex items-center justify-center flex-1 mx-auto transform transition-all duration-300 ease-in-out ${
            isScrolled ? "scale-100 opacity-100" : "scale-150 opacity-0"
          }`}
        >
          <div className="flex items-center w-80 border border-gray-200 rounded-full py-2 px-2 shadow-sm">
            <input
              type="text"
              placeholder="Start your search"
              className="flex-1 pl-2 outline-none bg-transparent"
            />
            <div className="bg-red-500 rounded-full">
              <SearchIcon className="h-7 w-7 p-1 text-white rounded-full" />
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div
          className={`absolute top-0 left-0 right-0 m-auto h-full flex justify-center flex-1 mx-auto transform transition-all duration-200 ease-out ${
            isScrolled
              ? "-translate-y-full opacity-0 scale-50"
              : "translate-y-0 opacity-100 scale-100"
          }`}
        >
          <div className="text-white flex items-center gap-4">
            <p>Places to stay</p>
            <p>Experiences</p>
            <p>Online Experiences</p>
          </div>
        </div>

        <div
          className={`absolute -bottom-24 left-0 right-0 m-auto bg-white w-[60vw] rounded-full pl-10 pr-2 py-4 flex items-center gap-4 transform transition-all duration-300 ease-in-out ${
            isScrolled
              ? "-translate-y-full opacity-0 scale-50"
              : "translate-y-0 opacity-100 scale-100"
          }`}
        >
          <div className="flex-1">
            <p className="text-xs font-semibold">Location</p>
            <p className="opacity-50 text-sm">Where are you going?</p>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold">Check in</p>
            <p className="opacity-50 text-sm">Add dates</p>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold">Check out</p>
            <p className="opacity-50 text-sm">Add dates</p>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold">Guests</p>
            <p className="opacity-50 text-sm">Add guests</p>
          </div>
          <div className="bg-primary rounded-full p-2 text-white">
            <SearchIcon className="h-6 w-6 rounded-full" />
          </div>
        </div>

        {/* RIGHT */}

        <div
          className={`flex items-center gap-3 ${!isScrolled && "text-white"}`}
        >
          <div className="flex items-center gap-3">
            <h4 className="text-sm font-semibold">Become a Host</h4>
            <GlobeAltIcon className="h-5 w-5" />
          </div>
          <div
            className={`flex items-center gap-3 border border-gray-200 rounded-full px-4 py-1 ${
              isScrolled ? "bg-transparent" : "bg-white text-black"
            }`}
          >
            <MenuIcon className="h-5 w-5" />
            <UserCircleIcon className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
