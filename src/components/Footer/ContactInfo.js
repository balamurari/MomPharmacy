import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function ContactInfo() {
  return (
    <div id="contact" className="space-y-2">
      <div className="flex items-center gap-2 text-gray-400">
        <Phone size={20} />
        <a href="tel:+917702068334" className="hover:text-blue-500">
          +91 77020 68334
        </a>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        <Mail size={20} />
        <a href="mailto:Ps@mompharmacy.in" className="hover:text-blue-500">
          Ps@mompharmacy.in
        </a>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        <MapPin size={20} />
        <a 
          href="https://www.google.com/maps/search/?api=1&query=1st+Main,+Netajinagar,+Kempapura,+Bangalore,+560024" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500"
        >
          1st Main, Netajinagar, Kempapura, Bangalore - 560024
        </a>

      </div>
    </div>
  );
}

export default ContactInfo;