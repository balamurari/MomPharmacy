import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function ContactInfo() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-gray-400">
        <Phone size={20} />
        <span>+91 77020 68334</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        <Mail size={20} />
        <span>Ps@mompharmacy.in</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        <MapPin size={40} />
        <span>No.3, 1st Main Road Hebbal, Kempapura, Bangalore - 560024 </span>
      </div>
    </div>
  );
}

export default ContactInfo;