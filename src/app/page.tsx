"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Reviving Prehistoric Life"
        subtitle="Meet Nyra - The Prehistoric Mega-Cat"
        description="A breakthrough in genetic engineering and cloning technology brings back one of the most fearsome predators that ever walked the Earth."
        primaryButtonText="Discover Nyra"
        primaryButtonLink="/species/shadow"
        secondaryButtonText="Our Research"
        secondaryButtonLink="/research"
        backgroundImage="/images/shadow-hero.png"
      />

      {/* Nyra Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title">Nyra: The Apex Predator Returns</h2>
              <p className="text-lg mb-6">
                After decades of research, Yukon Lab has successfully cloned the prehistoric mega-cat known as 
                <span className="font-semibold"> Nyra</span>, a species that roamed Earth over 50,000 years ago.
              </p>
              <p className="text-lg mb-6">
                Standing at 5 feet tall at the shoulder and weighing over 800 pounds, Nyra represents the pinnacle 
                of feline evolution - combining the speed of a cheetah with the strength of a tiger.
              </p>
              <p className="text-lg mb-8">
                Our breakthrough molecular reconstruction technology has allowed us to bring back this magnificent 
                creature with its genome fully intact, marking a new era in de-extinction science.
              </p>
              <Link href="/species/shadow" className="button-primary inline-block">
                Learn More About Nyra
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              {/* Placeholder for Nyra image - to be replaced later */}
              <div className="bg-yukon-gray rounded-lg aspect-square w-full max-w-lg mx-auto">
                {/* Uncomment and use this once you add your image */}
                <Image 
                  src="/images/shadow-main.png"
                  alt="Nyra, the prehistoric mega-cat" 
                  width={500} 
                  height={500}
                  className="rounded-lg w-full max-w-lg mx-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-biotech-teal rounded-lg p-4 shadow-lg">
                <p className="text-white font-semibold">First Successful Clone: March 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gradient-to-b from-biotech-blue to-biotech-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Pioneering BioCloning Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">DNA Reconstruction</h3>
              <p className="text-center">
                Advanced algorithms fill in missing genetic sequences from degraded DNA samples, allowing 
                us to reconstruct complete genomes of extinct species.
              </p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Synthetic Embryogenesis</h3>
              <p className="text-center">
                Our proprietary embryo development chambers mimic natural gestation environments, 
                supporting the growth of complex organisms from synthetic cells.
              </p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Epigenetic Programming</h3>
              <p className="text-center">
                We've developed techniques to correctly program genetic expression in cloned specimens, 
                avoiding the health issues common in early cloning attempts.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/technology" className="button-primary">
              Explore Our Technology
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Biological Revolution</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Whether you're a potential partner, investor, or researcher, we invite you to be part of this 
            historic journey as we reshape the future of genetic science.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Contact Us
            </Link>
            <Link href="/careers" className="button-secondary border-white text-white hover:bg-white hover:text-biotech-blue">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 