import React from 'react';
import { motion } from 'framer-motion';
import './Stats.scss';

const statsData = [
  { title: '100%', description: 'Irish Owned' },
  { title: '3000+', description: 'Loyal Customers' },
  { title: '98.4%', description: 'Customer Satisfaction' },
  { title: '18+', description: 'Years in Business' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="stat"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{stat.title}</h2>
            <p>{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
