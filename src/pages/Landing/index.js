import React from "react";
import SectionTitle from "components/SectionTitle";
import Discover from "pages/Landing/Discover";
import Inspirations from "pages/Landing/Inspirations";

function Landing() {
  return (
    <div className="pt-40">
      {/* BANNER */}
      <div className="bg-black h-[130vh] w-screen -z-10 absolute top-0 left-0"></div>
      <main className="max-w-screen-xl mt-10 mx-auto bg-primary text-white rounded-xl flex flex-col items-center justify-center  gap-5 h-96">
        <h1 className="font-bold text-4xl">
          Help house 100,000 refugees fleeing Ukraine
        </h1>
        <button className="border border-white rounded-md px-4 py-2">
          Learn more
        </button>
      </main>

      <div className="relative max-w-screen-xl mx-auto h-[620px] mt-20 rounded-xl overflow-hidden flex items-end justify-center pb-20">
        <img
          src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="absolute z-10 top-0 left-0 h-full object-cover w-full"
        />
        <div className="text-white z-20 flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-5xl">
            Let your curiosity do the booking
          </h1>
          <button className="bg-white text-purple-600 rounded-full px-8 shadow-sm py-3 text-lg font-semibold">
            I'm flexible
          </button>
        </div>
      </div>

      {/* LANDING SECTIONS */}
      <div className="max-w-screen-xl mx-auto">
        {/* INSPIRATION SECTION */}
        <SectionTitle title="Inspiration for your next trip" />
        <Inspirations />

        <SectionTitle title="Discover Airbnb Experiences" />
        <Discover />

        <section className="my-24 flex gap-6">
          <div>
            <h1 className="text-6xl font-semibold">Shop Airbnb gift cards</h1>
            <button className="bg-black text-white px-6 py-3 rounded-md mt-5">
              Learn more
            </button>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=2560"
            alt=""
            className="h-80"
          />
        </section>

        <section className="h-[85vh] relative flex p-20 rounded-xl overflow-hidden mb-20">
          <img
            src="https://images.pexels.com/photos/8562070/pexels-photo-8562070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="absolute left-0 top-0 h-full w-full object-cover z-10"
          />

          <div className="z-20">
            <h1 className="text-8xl font-semibold text-white">
              Questions
              <br />
              about
              <br />
              hosting?
            </h1>
            <button className="bg-white px-6 py-3 rounded-md mt-20">
              Ask a Superhost
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
