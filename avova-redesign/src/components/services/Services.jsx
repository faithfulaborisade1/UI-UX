import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';

const servicesData = [
  {
    title: 'Business IT',
    description: 'A full range of IT services including hardware/software, web, and eCommerce.',
  },
  {
    title: 'Cloud Services',
    description: 'Collaboration, file sharing, CRM, and business operations from anywhere.',
  },
  {
    title: 'Communications',
    description: 'Phone systems, networks, VPN, WiFi, and traffic shaping solutions.',
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
