import React, { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/solid";

function CustomDropdown({ data, defaultIndex }) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(data[defaultIndex].value);

  return (
    <span
      className="relative inline-flex items-center justify-center"
      onClick={() => setShow((prevVal) => !prevVal)}
    >
      <h1 className="text-black">{selected}</h1>
      <ChevronDownIcon className="h-5 w-5 ml-2 text-black" />
      {show && (
        <div className="absolute top-16 left-0 z-10 w-full h-80 overflow-scroll text-black">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-white px-4 py-6 border-[0.5px] flex items-center justify-between hover:bg-black hover:text-white ${
                selected === item.value && "bg-black text-white"
              }`}
            >
              <h4 className="text-xl font-normal text-left">{item.label}</h4>
              {selected === item.value && (
                <CheckIcon className="w-5 h-5 text-white" />
              )}
            </div>
          ))}
        </div>
      )}
    </span>
  );
}

export default CustomDropdown;
