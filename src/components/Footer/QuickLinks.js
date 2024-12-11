import React from 'react';

function QuickLinks() {
  const links = ['About Us', 'Services', 'Medicines', 'Contact'];
  
  return (
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-gray-400 hover:text-white">{link}</a>
        </li>
      ))}
    </ul>
  );
}

export default QuickLinks;