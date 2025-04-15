"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-6 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-center text-biotech-blue">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-biotech-blue to-biotech-teal"></div>
    </motion.div>
  );
};

export default FeatureCard; 