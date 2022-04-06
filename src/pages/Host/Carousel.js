import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const data = [
  {
    description:
      "Hosting my studio changed my life and gifted me with memorable experiences and people.",
    name: "Reka",
    place: "Milan",
    image:
      "https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    description:
      "Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
    name: "Darrel",
    place: "Atlanta",
    image:
      "https://images.pexels.com/photos/4112894/pexels-photo-4112894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    description:
      "We’re able to keep our culture alive by hosting our pasta-making experience.",
    name: "Nerina",
    place: "Palombara Sabina",
    image:
      "https://images.pexels.com/photos/5495067/pexels-photo-5495067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    description:
      "Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home.",
    name: "Clair",
    place: "Chiang Mai",
    image:
      "https://images.pexels.com/photos/1251828/pexels-photo-1251828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    description:
      "Hosting my bedouin tent has introduced me to people around the world.",
    name: "Mohammed",
    place: "Wadi Rum",
    image:
      "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    description:
      "I love hosting my eco-home so people can connect with nature and their loved ones.",
    name: "Marko",
    place: "Paraty",
    image:
      "https://images.pexels.com/photos/846080/pexels-photo-846080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function Carousel() {
  return (
    <section className="py-32">
      <h1 className="text-6xl font-semibold text-center">
        You can host <br /> anything, anywhere
      </h1>
      <div className="max-w-screen-xl mx-auto mt-20">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => swiper.slideNext()}
        >
          {data.map((item) => (
            <SwiperSlide>
              {({ isActive }) => (
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover w-full object-bottom h-[410px] rounded-md shadow-md"
                  />
                  <div
                    className={`${
                      isActive ? "opacity-100" : "opacity-0"
                    } transform transition-all duration-200 ease-out pt-10 pr-4`}
                  >
                    <h3 className="text-2xl">{item.description}</h3>
                    <h5 className="text-xl mt-8 mb-4">{item.name}</h5>
                    <p className="text-md opacity-60">Host in {item.place}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
