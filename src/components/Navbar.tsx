import React from 'react';
import { Clock, Phone, ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-teal-600 text-2xl font-bold">Mom Pharmacy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 flex items-center gap-2">
              <Clock size={20} />
              <span>10-Min Delivery</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Medicines</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">About</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 flex items-center gap-2">
              <Phone size={20} />
              <span>Contact</span>
            </a>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}