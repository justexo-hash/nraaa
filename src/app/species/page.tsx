"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

export default function Species() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Prehistoric Species Collection"
        subtitle="Bringing Extinct Beings Back to Life"
        description="Explore our ever-growing catalog of prehistoric species being brought back through cutting-edge genetic research and cloning technology."
        primaryButtonText="Discover Nyra"
        primaryButtonLink="/species/shadow"
        secondaryButtonText="Our Process"
        secondaryButtonLink="/research"
        backgroundImage="/images/shadow-hero.png"
      />

      {/* Featured Species - Nyra */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="inline-block bg-biotech-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                  Featured Species
                </div>
                <h2 className="section-title mb-6">Nyra: The Prehistoric Mega-Cat</h2>
                <p className="text-lg mb-6">
                  <em>Panthera atrox magnus</em> • Cloned: March 2025
                </p>
                <p className="text-lg mb-6">
                  The crown jewel of our de-extinction program, Nyra is a fully viable clone of the prehistoric mega-cat 
                  that ruled North America during the late Pleistocene epoch, approximately 50,000 years ago.
                </p>
                <p className="text-lg mb-8">
                  Standing 5 feet tall at the shoulder and weighing over 800 pounds when fully grown, this apex predator
                  combined the speed of a cheetah with the raw power of a tiger, making it one of history's most formidable hunters.
                </p>
                <Link href="/species/shadow" className="button-primary">
                  Learn More About Nyra
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="bg-yukon-gray rounded-lg aspect-square w-full max-w-lg mx-auto relative">
                  {/* Image needs to be added to public/images/ */}
                  <Image 
                    src="/images/shadow-main.png" 
                    alt="Nyra the prehistoric mega-cat" 
                    width={600} 
                    height={600}
                    className="rounded-lg w-full h-full object-cover" 
                  />
                  <div className="absolute -bottom-6 -right-6 bg-biotech-teal rounded-lg p-4 shadow-lg">
                    <p className="text-white font-semibold">Most Advanced Clone to Date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Progress Species */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">In-Development Species</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Woolly Rhino */}
              <div className="card overflow-hidden">
                <div className="h-56 bg-yukon-gray">
                  <Image 
                    src="/images/woolly-rhino.png" 
                    alt="Woolly Rhinoceros" 
                    width={600} 
                    height={400}
                    className="w-full h-56 object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-biotech-blue">Woolly Rhinoceros</h3>
                    <span className="bg-biotech-dark text-white text-xs px-3 py-1 rounded-full">65% Complete</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4"><em>Coelodonta antiquitatis</em></p>
                  <p className="mb-6">
                    This Ice Age giant vanished around 14,000 years ago. Our team has successfully reconstructed its genome
                    and is currently developing embryos, with the first viable clone expected by late 2025.
                  </p>
                  <Link href="/species/woolly-rhinoceros" className="text-biotech-teal font-semibold hover:text-biotech-dark transition-colors">
                    View Progress Details →
                  </Link>
                </div>
              </div>

              {/* Tasmanian Tiger */}
              <div className="card overflow-hidden">
                <div className="h-56 bg-yukon-gray">
                  <Image 
                    src="/images/tasmanian-tiger.png" 
                    alt="Tasmanian Tiger" 
                    width={600} 
                    height={400}
                    className="w-full h-56 object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-biotech-blue">Tasmanian Tiger</h3>
                    <span className="bg-biotech-dark text-white text-xs px-3 py-1 rounded-full">78% Complete</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4"><em>Thylacinus cynocephalus</em></p>
                  <p className="mb-6">
                    This unique marsupial predator went extinct in 1936. Using well-preserved museum specimens, we've 
                    created several embryos currently developing in our BioMatrix™ chambers.
                  </p>
                  <Link href="/species/tasmanian-tiger" className="text-biotech-teal font-semibold hover:text-biotech-dark transition-colors">
                    View Progress Details →
                  </Link>
                </div>
              </div>

              {/* Passenger Pigeon */}
              <div className="card overflow-hidden">
                <div className="h-56 bg-yukon-gray">
                  <Image 
                    src="/images/passenger-pigeon.png" 
                    alt="Passenger Pigeon" 
                    width={600} 
                    height={400}
                    className="w-full h-56 object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-biotech-blue">Passenger Pigeon</h3>
                    <span className="bg-biotech-dark text-white text-xs px-3 py-1 rounded-full">92% Complete</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4"><em>Ectopistes migratorius</em></p>
                  <p className="mb-6">
                    Once the most abundant bird in North America, it went extinct in 1914. We've successfully cloned 
                    several specimens and expect to announce our first viable flock within months.
                  </p>
                  <Link href="/species/passenger-pigeon" className="text-biotech-teal font-semibold hover:text-biotech-dark transition-colors">
                    View Progress Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Candidates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Future Cloning Candidates</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-6">
                <div className="bg-yukon-gray rounded-lg h-28 w-28 flex-shrink-0">
                  <Image 
                    src="/images/mammoth.png" 
                    alt="Woolly Mammoth" 
                    width={112} 
                    height={112}
                    className="rounded-lg h-28 w-28 object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-2">Woolly Mammoth</h3>
                  <p className="text-sm text-gray-600 mb-3"><em>Mammuthus primigenius</em></p>
                  <p>
                    This iconic Ice Age giant is a prime candidate for our next major cloning project. 
                    Well-preserved specimens in permafrost provide excellent source material for DNA extraction.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-yukon-gray rounded-lg h-28 w-28 flex-shrink-0">
                  <Image 
                    src="/images/dodo.png" 
                    alt="Dodo Bird" 
                    width={112} 
                    height={112}
                    className="rounded-lg h-28 w-28 object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-2">Dodo Bird</h3>
                  <p className="text-sm text-gray-600 mb-3"><em>Raphus cucullatus</em></p>
                  <p>
                    This flightless bird, extinct since the late 17th century, represents a unique opportunity 
                    to restore an island-evolved species lost to human activity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-yukon-gray rounded-lg h-28 w-28 flex-shrink-0">
                  <Image 
                    src="/images/irish-elk.png" 
                    alt="Irish Elk" 
                    width={112} 
                    height={112}
                    className="rounded-lg h-28 w-28 object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-2">Irish Elk</h3>
                  <p className="text-sm text-gray-600 mb-3"><em>Megaloceros giganteus</em></p>
                  <p>
                    With the largest antlers of any known deer species (up to 12 feet across), this majestic 
                    creature disappeared around 7,700 years ago and is a promising candidate for revival.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-yukon-gray rounded-lg h-28 w-28 flex-shrink-0">
                  <Image 
                    src="/images/short-faced-bear.png" 
                    alt="Short-faced Bear" 
                    width={112} 
                    height={112}
                    className="rounded-lg h-28 w-28 object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-2">Short-faced Bear</h3>
                  <p className="text-sm text-gray-600 mb-3"><em>Arctodus simus</em></p>
                  <p>
                    The largest bear ever to walk the Earth, standing over 11 feet tall when upright, 
                    this formidable predator would be an impressive addition to our cloned species portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Initiatives */}
      <section className="py-16 bg-biotech-gradient text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Conservation & Ethical Approach</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              At Yukon Lab, we approach de-extinction with serious ethical consideration. Our Ethical Oversight Committee, 
              led by Dr. James Takahashi, ensures all our work adheres to the highest standards of scientific and ethical integrity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-biotech-blue">Ethical Framework</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rigorous welfare standards for all cloned specimens</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Careful ecosystem impact assessment before any potential release</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent research protocols and public engagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collaboration with conservation experts and ecologists</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-biotech-blue">Selection Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Species with viable, recoverable DNA</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ecological significance and biodiversity contribution</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Available habitat and suitable climate conditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-biotech-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Human-caused extinction (prioritizing anthropogenic losses)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link href="/ethics" className="button-primary bg-white text-biotech-blue hover:bg-biotech-blue hover:text-white">
                Read Our Full Ethical Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-biotech-blue mb-6">Want to Learn More?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Schedule a virtual tour of our facility and see our breakthrough cloning technology in action,
            including a live video feed of Nyra in her habitat.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="button-primary">
              Request a Virtual Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 