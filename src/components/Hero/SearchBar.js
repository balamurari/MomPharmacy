import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import PharmacyForm from '../PharmacyForm/PharmacyForm'; // Import the PharmacyForm component

function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl flex items-center gap-4">
        {/* Delivery Location Input */}
        <div className="flex-1 flex items-center gap-2 border-r border-gray-200 pr-4">
          <MapPin className="text-teal-600" />
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="w-full text-gray-800 focus:outline-none"
          />
        </div>

        {/* Medicine Search Text */}
        <div className="flex-1 flex items-center gap-2 px-4">
          <p className="w-full text-gray-800">Are You Searching for Medicine?</p>
        </div>

        {/* Open Modal Button */}
        <button
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2"
          onClick={openModal}
        >
          <AiOutlineFileAdd />
          Upload Prescription
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
            <PharmacyForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
