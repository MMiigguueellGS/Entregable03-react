import React from "react";

const LocationForm = ({ handleSubmit }) => {
  return (
    <form className="flex px-2 " onSubmit={handleSubmit}>
      <input
        className="bg-neutral-950 text-stone-800  outline-none  flex-1 border-2 border-green-800 text-center"
        min={1}
        max={126}
        id="newLocation"
        type="number"
        placeholder="Type a location id..."
      />
      <button className="bg-green-700  border-2 border-green-500 py-0 px-4 flex items-center gap-2">
        {/* Search */}
        <i className="bx bx-search-alt-2 text-dark-gray text-lg"></i>
      </button>
    </form>
  );
};

export default LocationForm;
