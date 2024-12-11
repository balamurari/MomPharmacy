import React from 'react';
import { Clock, MapPin, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80"
          alt="Pharmacy Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">
            Your Health, Delivered in
            <span className="text-yellow-300"> 10 Minutes</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Fast, reliable medicine delivery right to your doorstep. 
            Professional care with a mother's touch.
          </p>
          
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
              <Search className="text-teal-600" />
              <input
                type="text"
                placeholder="Search medicines"
                className="w-full text-gray-800 focus:outline-none"
              />
            </div>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
              Search
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-300" />
              <span>10-Minute Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Real-time Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}