import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import CustomSelect from "./CustomSelect";
import logoicon from "../../assets/img/logo-icon.png";
import Navbar from "./Navbar";
import { PlayIcon, PauseIcon } from "@heroicons/react/solid";

function Host() {
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);

  const handleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="flex h-screen">
        <div className="flex-1 bg-black text-white flex flex-col items-center justify-center">
          <img
            src={logoicon}
            alt=""
            className="absolute top-10 left-10 h-8 w-8"
          />
          <h1 className="text-7xl font-semibold text-center px-32">
            Hosting makes Airbnb, Airbnb
          </h1>
          <button className="bg-gradient-to-r from-[#E51D4D] to-[#D80465] px-6 py-3 rounded-md font-semibold mt-10  ">
            Try hosting
          </button>
        </div>
        <div className="flex-1 relative">
          <video
            ref={videoRef}
            src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
            autoPlay
            muted
            className="h-full w-full object-cover object-top"
          ></video>
          <div className="absolute bottom-20 left-10">
            {!videoPlaying ? (
              <PlayIcon
                className="h-12 w-12 text-white cursor-pointer"
                onClick={handleVideo}
              />
            ) : (
              <PauseIcon
                className="h-12 w-12 text-white cursor-pointer"
                onClick={handleVideo}
              />
            )}
          </div>
        </div>
      </main>

      <Carousel />

      <CustomSelect />

      <section className="h-[95vh] relative flex p-20 mt-20 rounded-xl overflow-hidden mb-20 max-w-screen-xl mx-auto">
        <img
          src="https://images.pexels.com/photos/8562070/pexels-photo-8562070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="absolute left-0 top-0 h-full w-full object-cover z-10"
        />

        <div className="z-20 w-full flex flex-col items-center justify-center">
          <div>
            <h1 className="text-7xl text-center font-semibold text-white">
              Questions about hosting?
            </h1>
            <h1 className="text-7xl text-center font-semibold text-white">
              Ask a Superhost.
            </h1>
          </div>

          <button className="bg-white px-6 py-3 rounded-md mt-20">
            Learn more
          </button>
        </div>
      </section>

      {/* AIR COVER */}
      <section className="h-[95vh] relative flex rounded-xl overflow-hidden mb-20 max-w-screen-xl mx-auto bg-gray-100">
        <div className="flex w-full">
          <div className="flex-1 p-16">
            <h1 className="text-[150px] font-bold">
              <span className="text-primary">air</span>cover
            </h1>
            <p className="text-4xl">Top-to-bottom protection.</p>
            <p className="text-4xl">Free for Hosts. Only on Airbnb.</p>
            <button className="mt-10 bg-white px-6 py-2 border border-black rounded-md">
              Explore AirCover
            </button>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/f409b291-8b55-4780-81c3-a067062982d1.jpg?im_w=2560&im_q=highq"
            alt=""
            className="object-contain h-5/6 object-right"
          />
        </div>
      </section>

      <main className="flex h-screen">
        <div className="flex-1">
          <video
            src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
            autoPlay
            muted
            className="h-full w-full object-cover object-top"
          ></video>
        </div>
        <div className="flex-1 bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-center px-36">
            Try hosting on Airbnb
          </h1>
          <p className="mt-10 px-60 text-center text-lg">
            Join us. We’ll help you every step of the way.
          </p>
          <button className="bg-gradient-to-r from-[#E51D4D] to-[#D80465] px-6 py-3 rounded-md font-semibold mt-10  ">
            Let's go!
          </button>
        </div>
      </main>
    </div>
  );
}

export default Host;
