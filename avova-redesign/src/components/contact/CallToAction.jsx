import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.scss';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact Avova Technologies today and experience innovative IT solutions tailored to your needs.</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1, backgroundColor: '#00337a' }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
