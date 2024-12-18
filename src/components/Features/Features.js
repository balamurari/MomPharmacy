import React from 'react';
import { Clock, Truck, Shield, HeartPulse } from 'lucide-react';
import FeatureCard from './FeatureCard';

function Features() {
  const features = [
    {
      icon: <Clock id="10minutes" className="w-12 h-12 text-teal-600" />,
      title: "10-Minute Delivery",
      description: "Swift medicine delivery within 10 minutes of order placement"
    },
    {
      icon: <Truck className="w-12 h-12 text-teal-600" />,
      title: "Real-time Tracking",
      description: "Track your medicine delivery in real-time with our advanced system"
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: "Verified Medicines",
      description: "All medicines are verified and sourced from licensed pharmacies"
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-teal-600" />,
      title: "Care & Support",
      description: "24/7 customer support with a caring, professional approach"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Mom Pharmacy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine the latest technology with a mother's care to provide you
            the best pharmacy experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;