import React from "react";

const data = [
  {
    image:
      "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Things to do on your trip",
    button: "Experiences",
  },
  {
    image:
      "https://images.pexels.com/photos/7262358/pexels-photo-7262358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Things to do from home",
    button: "Online Experiences",
  },
];
function Discover() {
  return (
    <section className="flex gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden relative w-full h-[600px] flex p-20"
        >
          <img
            src={item.image}
            alt=""
            className="absolute top-0 left-0 h-full w-full object-cover z-10"
          />
          <div className="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-tl from-transparent to-black opacity-25"></div>
          <div className="z-20">
            <h1 className="text-white font-semibold text-6xl max-w-sm">
              {item.title}
            </h1>
            <button className="bg-white px-6 py-3 rounded-lg mt-6 shadow-sm font-semibold">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Discover;
