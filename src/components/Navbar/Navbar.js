import React from 'react';
import { Menu } from 'lucide-react';
import NavLinks from './NavLinks';
import CartButton from './CartButton';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-teal-600 text-2xl font-bold">Mom Pharmacy</span>
          </div>

          <NavLinks />
          <CartButton />

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;