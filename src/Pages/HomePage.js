import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Features from '../components/Features/Features'


function HomePage() {

  return (
    <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Features />
          <Footer />
    </div>
  );
}

export default HomePage;



