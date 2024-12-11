import React from 'react';
import { Clock, Phone } from 'lucide-react';

function NavLinks() {
  return (
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
    </div>
  );
}

export default NavLinks;