import React from 'react';
import { Clock } from 'lucide-react';

function Features() {
  return (
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
  );
}

export default Features;