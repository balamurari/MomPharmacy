import React from 'react';
import SearchBar from './SearchBar';
import Features from './Features';

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-teal-900 to-teal-700 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80"
          alt="Pharmacy Background"
          className="w-full h-full object-cover mix-blend-overlay "
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">
            Your Health, Delivered in
            <span className="text-yellow-300"> 10 Minutes</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-white ">
            Fast, reliable medicine delivery right to your doorstep. 
            Professional care with a mother's touch.
          </p>
          
          <SearchBar />
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Hero;