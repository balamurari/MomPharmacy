import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-white">
        <Facebook size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <Twitter size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <Instagram size={24} />
      </a>
    </div>
  );
}

export default SocialLinks;