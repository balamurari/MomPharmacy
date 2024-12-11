import React from 'react';
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mom Pharmacy</h3>
            <p className="text-gray-400">
              Your trusted partner in healthcare delivery, combining technology with care.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <QuickLinks />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ContactInfo />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <SocialLinks />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mom Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;