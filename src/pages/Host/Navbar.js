import React, { useEffect, useState } from "react";
import logo from "assets/img/logo-icon-black.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(
      window.pageYOffset < window.screen.height - 300 ? false : true
    );
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen bg-white z-50 py-4 transition-all duration-200 ease-out ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="h-8 w-8" />

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 rounded-full shadow-md px-1 py-1 border border-gray-100 cursor-pointer">
              <div className="flex -space-x-2">
                <img
                  src="https://t4.ftcdn.net/jpg/02/99/97/35/360_F_299973520_rgAKO2BdhNhDArSSm7ikCT03qBCYcumJ.jpg"
                  alt=""
                  className="h-9 w-9 object-cover rounded-full border-2 border-white"
                />
                <img
                  src="https://t4.ftcdn.net/jpg/02/99/97/35/360_F_299973520_rgAKO2BdhNhDArSSm7ikCT03qBCYcumJ.jpg"
                  alt=""
                  className="h-9 w-9 object-cover rounded-full border-2 border-white"
                />
                <img
                  src="https://t4.ftcdn.net/jpg/02/99/97/35/360_F_299973520_rgAKO2BdhNhDArSSm7ikCT03qBCYcumJ.jpg"
                  alt=""
                  className="h-9 w-9 object-cover rounded-full border-2 border-white"
                />
              </div>
              <p className="font-semibold mr-4">Ask a Superhost</p>
            </div>
            <button className="bg-gradient-to-r from-[#E51D4D] to-[#D80465] px-6 py-3 rounded-md font-semibold text-white">
              Try hosting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
