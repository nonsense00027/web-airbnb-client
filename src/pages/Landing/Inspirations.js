import React from "react";
const data = [
  {
    name: "Nasugbu",
    distance: 64,
    image:
      "https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_q=highq&im_w=720",
    color: "#DD3150",
  },
  {
    name: "Manila",
    distance: 3,
    image:
      "https://a0.muscache.com/im/pictures/e25ccbca-1515-4510-baa6-9d2c473865dc.jpg?im_q=highq&im_w=720",
    color: "#D93A30",
  },
  {
    name: "Mabini",
    distance: 96,
    image:
      "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_q=highq&im_w=720",
    color: "#BC196D",
  },
  {
    name: "Batangas City",
    distance: 92,
    image:
      "https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_q=highq&im_w=720",
    color: "#CC2D4A",
  },
];
function Inspirations() {
  return (
    <section className="flex gap-6">
      {data.map((item) => (
        <div className="rounded-xl overflow-hidden h-96 flex flex-col">
          <img src={item.image} alt="" className="flex-1" />
          <div
            className="flex-1 text-white flex flex-col gap-3 pt-6 px-4"
            style={{ backgroundColor: item.color }}
          >
            <h1 className="font-semibold text-4xl">{item.name}</h1>
            <p className="text-xl">{item.distance} kilometers away</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Inspirations;
