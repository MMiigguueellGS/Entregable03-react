import React from "react";

const LocationInfo = ({ currentLocation }) => {
  return (
    <section className="grid gap-4">
      <h2 className="text-[#8EFF8B] font-medium text-center">
        {" "}
        {`¡ Wellcome to the ${currentLocation?.name} universe!`}
      </h2>
      <ul className="text-center">
        <li>
          <span className="text-stone-600 font-medium">Type:</span>
          <span className="font-semibold">{currentLocation?.type}</span>
        </li>
        <li>
          <span className="text-stone-600 font-medium">Dimension:</span>
          <span className="font-semibold">{currentLocation?.dimension}</span>
        </li>
        <li>
          <span className="text-stone-600 font-medium">Population:</span>
          <span className="font-semibold">
            {currentLocation?.residents.length}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default LocationInfo;
