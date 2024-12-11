import React from 'react';
import { MapPin, Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl flex items-center gap-4">
      <div className="flex-1 flex items-center gap-2 border-r border-gray-200 pr-4">
        <MapPin className="text-teal-600" />
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="w-full text-gray-800 focus:outline-none"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 px-4">
        {/* <Search className="text-teal-600" /> */}
        <p
          className="w-full text-gray-800  focus:outline-none"
        >Are You Searching for Medicine ? </p>
      </div>
      <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
        Upload Prescription
      </button>
    </div>
  );
}

export default SearchBar;