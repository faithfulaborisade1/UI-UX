import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Stats from './components/stats/Stats';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import CallToAction from './components/contact/CallToAction';
import WhyChange from './components/change/WhyChange';
import Footer from './components/footer/Footer';
import './styles/main.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChange />
      <Stats />
      <Services />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
