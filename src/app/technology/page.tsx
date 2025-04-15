"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Technology() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Technology</h1>
          <p className="text-xl max-w-3xl">
            Pioneering the future of genetic engineering with revolutionary systems and processes
            that are redefining what's possible in de-extinction science.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Revolutionary Bio-Engineering</h2>
            <p className="text-lg mb-6">
              At Yukon Lab, we've developed a comprehensive suite of proprietary technologies that work in concert
              to make de-extinction not just a theoretical possibility, but a scientific reality. Our integrated platform
              addresses the three key challenges of bringing extinct species back to life:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Genetic Recovery</h3>
                <p>Extracting and reconstructing complete genomes from fragmentary ancient DNA</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Embryonic Development</h3>
                <p>Creating and nurturing viable embryos in artificial wombs</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Epigenetic Programming</h3>
                <p>Ensuring proper gene expression and healthy development in cloned organisms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Technologies Section */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Flagship Technologies</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* GeneRevive Platform */}
            <div className="card mb-16 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-yukon-gray h-full min-h-[320px]">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/tech-gene-revive.png" 
                    alt="GeneRevive Platform" 
                    width={600} 
                    height={500}
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block bg-biotech-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Genetic Recovery
                  </div>
                  <h3 className="text-2xl font-bold text-biotech-blue mb-4">GeneRevive™ Platform</h3>
                  <p className="mb-6">
                    Our proprietary genetic reconstruction system combines advanced AI algorithms with cutting-edge 
                    DNA sequencing technology to recover and restore complete genomes from fragmentary ancient DNA.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>99.7% accuracy in genetic sequence reconstruction</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>10,000x faster processing than conventional methods</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Effective with DNA samples up to 150,000 years old</span>
                    </li>
                  </ul>
                  <Link href="/technology/gene-revive" className="button-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* BioMatrix */}
            <div className="card mb-16 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 order-2 md:order-1">
                  <div className="inline-block bg-biotech-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Embryonic Development
                  </div>
                  <h3 className="text-2xl font-bold text-biotech-blue mb-4">BioMatrix™ Artificial Womb</h3>
                  <p className="mb-6">
                    Our revolutionary artificial womb technology provides the perfect environment for embryonic
                    development, completely eliminating the need for surrogate mothers in the cloning process.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Perfect hormonal balance maintained throughout gestation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Adaptive nutrient delivery system for optimal development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>87% success rate in bringing embryos to term</span>
                    </li>
                  </ul>
                  <Link href="/technology/biomatrix" className="button-primary">
                    Learn More
                  </Link>
                </div>
                <div className="bg-yukon-gray h-full min-h-[320px] order-1 md:order-2">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/tech-biomatrix.png" 
                    alt="BioMatrix Artificial Womb" 
                    width={600} 
                    height={500}
                    className="h-full w-full object-cover" 
                  />
                </div>
              </div>
            </div>
            
            {/* EpiGen Controller */}
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-yukon-gray h-full min-h-[320px]">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/tech-epigen.png" 
                    alt="EpiGen Controller" 
                    width={600} 
                    height={500}
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block bg-biotech-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Epigenetic Programming
                  </div>
                  <h3 className="text-2xl font-bold text-biotech-blue mb-4">EpiGen™ Controller</h3>
                  <p className="mb-6">
                    Our epigenetic programming technology ensures proper gene expression in cloned organisms,
                    eliminating the health issues and shortened lifespans common in early cloning experiments.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Precisely controls genetic expression patterns</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Prevents telomere shortening associated with cloning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-biotech-teal mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ensures normal immune system development in cloned specimens</span>
                    </li>
                  </ul>
                  <Link href="/technology/epigen" className="button-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Emerging Technologies</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Emerging Tech 1 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-blue mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-3">CryoRecovery™ System</h3>
                  <p className="mb-6">
                    Utilizes nanotechnology to extract viable DNA fragments from ice-preserved specimens, dramatically
                    increasing the recovery rate from previously "unrecoverable" samples.
                  </p>
                  <p className="text-biotech-teal font-semibold">Development stage: Late prototype</p>
                </div>
              </div>

              {/* Emerging Tech 2 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-blue mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-3">NeuroMap™ Network</h3>
                  <p className="mb-6">
                    Maps and recreates neural pathways in cloned organisms to ensure proper behavioral development, 
                    particularly important for complex predator species.
                  </p>
                  <p className="text-biotech-teal font-semibold">Development stage: Early testing</p>
                </div>
              </div>

              {/* Emerging Tech 3 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-blue mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-3">MicroBiome Synthesizer</h3>
                  <p className="mb-6">
                    Recreates the complete gut microbiome of extinct species, essential for proper digestion and
                    immune function in herbivorous cloned animals.
                  </p>
                  <p className="text-biotech-teal font-semibold">Development stage: Proof of concept</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Portfolio */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Patent Portfolio</h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-8">
              Yukon Lab holds over 47 international patents on our technology platforms, with an additional 23 patents pending.
              Our intellectual property portfolio represents one of the most comprehensive in the field of genetic engineering
              and de-extinction science.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-biotech-cyan mb-2">23</div>
                <p>Patents for Genetic Recovery Technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-biotech-cyan mb-2">14</div>
                <p>Patents for Artificial Womb Systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-biotech-cyan mb-2">10</div>
                <p>Patents for Epigenetic Programming</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-biotech-cyan mb-2">23</div>
                <p>Patents Pending for New Technologies</p>
              </div>
            </div>
            
            <Link href="/publications" className="button-primary bg-white text-biotech-blue hover:bg-biotech-cyan hover:text-white">
              View Our Research Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-biotech-blue mb-6">Technology Licensing Opportunities</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Interested in licensing our technologies for your research or commercial applications?
            Contact our partnership team to discuss potential collaboration and licensing opportunities.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="button-primary">
              Contact Our Partnership Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 