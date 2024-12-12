import React, { useState } from 'react';
import { AiOutlineFileAdd, AiOutlineEnvironment } from 'react-icons/ai';

const PharmacyForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    age: '',
    gender: '',
    description: '',
    prescription: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, prescription: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    //   <h2 className="text-2xl font-bold mb-4">Pharmacy Form</h2>
    //   <form
    //     onSubmit={handleSubmit}
    //     className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
    //   >
    //     {/* "X" Button */}
    //     <button
    //       className="absolute top-4 right-6 text-black text-xl font-bold hover:text-red-500 transition"
    //       onClick={onClose}
    //       aria-label="Close"
    //     >
    //       ×
    //     </button>

    //     {/* Upload Prescription */}
    //     <div className="flex items-center gap-2 mb-4">
    //       <button
    //         type="button"
    //         className="flex items-center gap-2 hover:bg-gray-300 bg-gray-200 px-3 py-2 rounded-md text-gray-700"
    //         onClick={() => document.getElementById('prescription').click()}
    //       >
    //         <AiOutlineFileAdd /> Upload Prescription
    //       </button>
    //       <input
    //         type="file"
    //         id="prescription"
    //         name="prescription"
    //         accept="image/*"
    //         className="hidden"
    //         onChange={handleFileChange}
    //       />
    //     </div>

    //     {/* Form Fields */}
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Enter your name"
    //       className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mb-4"
    //       value={formData.name}
    //       onChange={handleInputChange}
    //       required
    //     />
    //     <input
    //       type="text"
    //       name="contact"
    //       placeholder="Enter your contact number"
    //       className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mb-4"
    //       value={formData.contact}
    //       onChange={handleInputChange}
    //       required
    //     />
    //     <div className="flex gap-4 mb-4">
    //       <input
    //         type="number"
    //         name="age"
    //         placeholder="Enter your age"
    //         className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2"
    //         value={formData.age}
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <select
    //         name="gender"
    //         className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2"
    //         value={formData.gender}
    //         onChange={handleInputChange}
    //         required
    //       >
    //         <option value="">Select Gender</option>
    //         <option value="male">Male</option>
    //         <option value="female">Female</option>
    //         <option value="other">Other</option>
    //       </select>
    //     </div>
    //     <div className="relative mb-4 flex items-center">
    //       <input
    //         type="text"
    //         name="address"
    //         placeholder="Enter your address"
    //         className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2"
    //         value={formData.address}
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <AiOutlineEnvironment className="text-gray-700 ml-2" />
    //     </div>
    //     <textarea
    //       name="description"
    //       placeholder="Enter additional details"
    //       className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mb-4"
    //       rows="4"
    //       value={formData.description}
    //       onChange={handleInputChange}
    //     ></textarea>

    //     {/* Centered Reset and Submit Buttons */}
    //     <div className="flex justify-center items-center gap-6 mt-4">
    //       <button
    //         type="button"
    //         className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
    //         onClick={() =>
    //           setFormData({
    //             name: '',
    //             contact: '',
    //             address: '',
    //             age: '',
    //             gender: '',
    //             description: '',
    //             prescription: null,
    //           })
    //         }
    //       >
    //         Reset
    //       </button>
    //       <button
    //         type="submit"
    //         className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <form
      onSubmit={handleSubmit}
      className="relative bg-white text-gray-600 p-6 rounded-lg shadow-md"
    >
      {/* Close Button */}
      <button
        type="button"
        className="absolute top-4 right-6 text-black text-xl font-bold hover:text-red-500 transition"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <h2 className="text-2xl text-teal-600 font-bold mb-4 items-center">Pharmacy Form</h2>
      <div className=" flex   items-center gap-2 mb-4 ">
         <button
            type="button"
            className="flex  items-center gap-2 hover:bg-gray-300 bg-gray-200 px-3 py-2 rounded-md text-gray-700"
            onClick={() => document.getElementById('prescription').click()}
          >
            <AiOutlineFileAdd /> Upload Prescription
          </button>
          <input
            type="file"
            id="prescription"
            name="prescription"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      {/* Form Fields */}
      <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mb-4"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Enter your contact number"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mb-4"
          value={formData.contact}
          onChange={handleInputChange}
          required
        />
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <select
            name="gender"
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="relative mb-4 flex items-center">
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <AiOutlineEnvironment className="text-red-700 ml-2" />
        </div>
        <textarea
          name="description"
          placeholder="Enter additional details"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mb-4"
          rows="4"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>

        {/* Centered Reset and Submit Buttons */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
            onClick={() =>
              setFormData({
                name: '',
                contact: '',
                address: '',
                age: '',
                gender: '',
                description: '',
                prescription: null,
              })
            }
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
    </form>
  );
};

export default PharmacyForm;
