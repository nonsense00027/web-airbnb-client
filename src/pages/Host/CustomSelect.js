import CustomDropdown from "components/CustomDropdown";
import React from "react";

const rooms = [
  { value: "entire place", label: "Entire place" },
  { value: "private room", label: "Private room" },
  { value: "shared room", label: "Shared room" },
];

const guests = [...new Array(16)].map((item, index) => ({
  value: `${index + 1} guests`,
  label: `${index + 1} guests`,
}));

const places = [
  {
    value: "Cagayan de Oro",
    label: "Cagayan de Oro, Misamis Oriental, Philippines",
  },
  {
    value: "Cagayan de Oro City",
    label: "Cagayan de Oro City, Misamis Oriental, Philippines",
  },
  { value: "Cagayan de Oro River", label: "Cagayan de Oro River, Philippines" },
];

function CustomSelect() {
  return (
    <section className="py-32 max-w-screen-lg mx-auto">
      <h1 className="text-6xl font-semibold text-center text-gray-500">
        Host your <CustomDropdown data={rooms} defaultIndex={0} /> for{" "}
        <CustomDropdown data={guests} defaultIndex={3} /> in{" "}
        <CustomDropdown data={places} defaultIndex={0} /> and earn up to
        ₱14,271/month
      </h1>
      <p className="text-center underline mt-14">
        How we estimate your earnings potential
      </p>
    </section>
  );
}

export default CustomSelect;
