import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

import slide1 from '../../assets/logo.png';
import slide2 from '../../assets/clock.png';
import slide3 from '../../assets/email.png';
import slide4 from '../../assets/gdpr.png';
import slide5 from '../../assets/online.png';
import slide6 from '../../assets/streamline.png';

const slides = [
  {
    title: 'Your I.T. Partner',
    description:
      'Avova Technologies are the chosen I.T. partner for businesses of all sizes who want to maximize their productivity while reducing costs.',
    buttonText: 'Find Out More!',
    image: slide1,
    backgroundColor: '#00A63F', // Green
  },
  {
    title: 'Spam getting you down?',
    description: "Can't access your mail, contacts, and calendars everywhere? Then talk to us about MailPro – Enterprise Email without the Enterprise Costs.",
    buttonText: 'More Info',
    image: slide3,
    backgroundColor: '#00A1F1', // Blue
  },
  {
    title: 'We are now 24 x 7 x 365!',
    description: '24 hours a day, 7 days a week, 365 days a year.',
    buttonText: 'Learn More',
    image: slide2,
    backgroundColor: '#00A63F', // Green
  },
  {
    title: 'Online Data Backup',
    description: 'Protect your data with automated, encrypted, off-site backups.',
    buttonText: 'More Info',
    image: slide5,
    backgroundColor: '#FF9900', // Orange
  },
  {
    title: 'GDPR',
    description:
      'We at Avova have been working hard over the past 18 months to further enhance our policies ensuring that they meet our obligations under GDPR.',
    buttonText: 'View Our GDPR/Privacy Policies',
    image: slide4,
    backgroundColor: '#004AAD', // Dark Blue
  },
  {
    title: 'Streamline',
    description:
      'Streamline is our CRM/BPO system developed especially for growing businesses.',
    buttonText: 'Find Out More',
    image: slide6,
    backgroundColor: '#333333', // Gray
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              x: index === currentSlide ? 0 : 100,
            }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: slide.backgroundColor,
            }}
          >
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <motion.button
                  className="hero-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slide.buttonText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="controls">
          <button onClick={handlePrevSlide}>❮</button>
          <button onClick={handleNextSlide}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
