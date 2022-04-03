import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Navbar() {
  return (
    <div className="py-4 z-50 bg-white fixed left-0 top-0 w-screen">
      <div className="relative max-w-screen-xl mx-auto flex items-center justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
          className="h-8"
        />

        <div className="absolute top-0 left-0 right-0 m-auto flex items-center justify-center flex-1 mx-auto">
          <div className="flex items-center w-80 border border-gray-200 rounded-full py-2 px-2 shadow-sm">
            <input
              type="text"
              placeholder="Start your search"
              className="flex-1 pl-2 outline-none"
            />
            <div className="bg-red-500 rounded-full">
              <SearchIcon className="h-7 w-7 p-1 text-white rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <h4 className="text-sm font-semibold">Become a Host</h4>
            <GlobeAltIcon className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-1">
            <MenuIcon className="h-5 w-5" />
            <UserCircleIcon className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
