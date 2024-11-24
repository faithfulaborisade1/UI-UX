import React from "react";
import "./Testimonials.scss";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Avova Technologies executed some truly “out of the box” thinking to get me up and running as fast as possible. I am so glad I found them!",
    name: "Craig Stuart Garfinkle",
    position: "Award-winning Media Composer",
  },
  {
    text: "Their cloud services revolutionized the way our team collaborates remotely. Highly recommended!",
    name: "Emma Brown",
    position: "CEO, Tech Solutions",
  },
  {
    text: "The team at Avova provided excellent IT support during a critical period for our business.",
    name: "Michael Johnson",
    position: "Operations Manager, RetailPro",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Are Saying</h2>
      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-position">{testimonial.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
