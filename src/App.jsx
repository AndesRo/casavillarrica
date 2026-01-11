import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Description from './components/Description';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <Description />
      <Location />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
