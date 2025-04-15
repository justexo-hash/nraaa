"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink = '/',
  secondaryButtonText,
  secondaryButtonLink = '/',
  backgroundImage,
}) => {
  const titleWords = title.split(' ');
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-yukon-gray opacity-70 z-10"></div>
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        ) : (
          <div className="w-full h-full bg-biotech-blue/30"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className={index % 2 === 0 ? '' : 'text-biotech-cyan'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>
          
          {subtitle && (
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {subtitle}
            </motion.h2>
          )}
          
          {description && (
            <motion.p 
              className="text-lg md:text-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {description}
            </motion.p>
          )}
          
          {(primaryButtonText || secondaryButtonText) && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {primaryButtonText && (
                <Link href={primaryButtonLink} className="button-primary">
                  {primaryButtonText}
                </Link>
              )}
              
              {secondaryButtonText && (
                <Link href={secondaryButtonLink} className="button-secondary">
                  {secondaryButtonText}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection; 