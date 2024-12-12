import React from "react";
import { MapPin, Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[800px] flex flex-col md:flex-row items-center gap-4">
      <div className="w-full md:flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 pr-0 md:pr-4">
        <MapPin className="text-teal-600" />
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="w-full text-gray-800 focus:outline-none"
        />
      </div>
      <div className="w-full md:flex-1 flex items-center gap-2 px-0 md:px-4">
        <p className="w-full text-gray-800 text-center md:text-left">
          Are You Searching for Medicine?
        </p>
      </div>
      <button className="w-full md:w-auto bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
        Upload Prescription
      </button>
    </div>
  );
}

export default SearchBar;
