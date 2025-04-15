"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ShadowPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-yukon-gray opacity-70 z-10"></div>
        <div className="absolute inset-0 z-0">
          {/* We'll replace this with an actual image of Nyra later */}
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/shadow-hero.png')" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Nyra</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              <em>Panthera atrox magnus</em> - The Prehistoric Mega-Cat
            </h2>
            <p className="text-lg md:text-xl mb-6">
              The apex predator of ancient North America, brought back from extinction 
              after 50,000 years.
            </p>
          </div>
        </div>
      </section>

      {/* Species Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Species Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  Nyra represents one of the most significant achievements in de-extinction science. 
                  This prehistoric mega-cat, scientifically named <em>Panthera atrox magnus</em>, was 
                  one of the most fearsome predators of the late Pleistocene epoch.
                </p>
                <p className="text-lg mb-6">
                  Standing at 5 feet tall at the shoulder and weighing over 800 pounds, Nyra was 
                  approximately 30% larger than modern lions. With powerful jaws capable of crushing 
                  bone and saber-like canines, these cats were perfectly evolved killing machines.
                </p>
                <p className="text-lg">
                  Our specimen, cloned from exceptionally well-preserved DNA found in permafrost, 
                  represents the first successful revival of a large predatory mammal extinct for 
                  over 50,000 years.
                </p>
              </div>
              <div>
                <div className="bg-yukon-gray h-80 rounded-lg mb-6">
                  <Image 
                    src="/images/shadow-main.png" 
                    alt="Nyra the prehistoric mega-cat" 
                    width={500} 
                    height={400}
                    className="h-80 w-full object-cover rounded-lg" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Key Characteristics</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="font-semibold">Height:</span> 5 feet at shoulder</li>
                  <li><span className="font-semibold">Weight:</span> 800-900 pounds</li>
                  <li><span className="font-semibold">Length:</span> 11-12 feet (nose to tail)</li>
                  <li><span className="font-semibold">Top Speed:</span> Estimated 50 mph</li>
                  <li><span className="font-semibold">Habitat:</span> Forests and plains of North America</li>
                  <li><span className="font-semibold">Diet:</span> Large herbivores including bison and young mammoths</li>
                  <li><span className="font-semibold">Extinction:</span> Approximately 50,000 years ago</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cloning Process */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">The Cloning Process</h2>
            <div className="space-y-6 text-lg">
              <p>
                The journey to bring Nyra back from extinction began in 2021 with the discovery of exceptionally 
                well-preserved remains in the Yukon Territory. Unlike most ancient specimens, these remains contained 
                recoverable nuclear DNA, providing our scientists with a near-complete genome to work with.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="card">
                  <div className="mb-4 rounded-lg h-48 bg-yukon-gray">
                    <Image 
                      src="/images/dna-extraction.png" 
                      alt="DNA Extraction Process" 
                      width={400} 
                      height={300}
                      className="h-48 w-full object-cover rounded-lg" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-biotech-blue">DNA Extraction & Sequencing</h3>
                  <p className="text-sm">
                    Using proprietary extraction techniques, our team recovered fragmented DNA from the specimen's 
                    bone marrow. Advanced sequencing technology allowed us to map the entire genome with 97.8% accuracy.
                  </p>
                </div>
                
                <div className="card">
                  <div className="mb-4 rounded-lg h-48 bg-yukon-gray">
                    <Image 
                      src="/images/tech-gene-revive.png" 
                      alt="Genetic Reconstruction" 
                      width={400} 
                      height={300}
                      className="h-48 w-full object-cover rounded-lg" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-biotech-blue">Genetic Reconstruction</h3>
                  <p className="text-sm">
                    Our AI-powered genetic analysis filled in missing segments by comparing with modern feline species. 
                    The result was a complete, viable genome ready for implementation.
                  </p>
                </div>
                
                <div className="card">
                  <div className="mb-4 rounded-lg h-48 bg-yukon-gray">
                    <Image 
                      src="/images/shadow-development.png" 
                      alt="Embryonic Development" 
                      width={400} 
                      height={300}
                      className="h-48 w-full object-cover rounded-lg" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-biotech-blue">Embryonic Development</h3>
                  <p className="text-sm">
                    Using our synthetic embryogenesis technology, we developed Nyra from a single cell to a viable 
                    embryo, which was then brought to term in our advanced gestation chamber.
                  </p>
                </div>
              </div>
              
              <p className="mt-8">
                After a challenging three-year development process and multiple setbacks, Nyra was successfully 
                born on March 5, 2025. This marked a historic milestone in de-extinction science and validated 
                Yukon Lab's revolutionary approach to genetic reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nyra Today */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Nyra Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-yukon-gray rounded-lg aspect-square">
                <Image 
                  src="/images/shadow-today.png" 
                  alt="Nyra in her current state" 
                  width={600} 
                  height={600}
                  className="rounded-lg w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="text-lg mb-6">
                  Now six months old, Nyra is developing exactly as expected, displaying all the physical and 
                  behavioral characteristics we anticipated based on our research. Her rapid growth rate confirms 
                  our theories about the accelerated development of prehistoric apex predators.
                </p>
                <p className="text-lg mb-6">
                  Currently weighing 240 pounds, Nyra is already larger than a full-grown African lion and continues 
                  to grow at a rate of approximately 15 pounds per week. Her cognitive development has also been remarkable, 
                  showing problem-solving abilities that exceed those of modern big cats.
                </p>
                <p className="text-lg">
                  Nyra lives in a specially designed 20-acre habitat within our facility that recreates her 
                  ancestral environment. This controlled setting allows our researchers to study her behavior, 
                  diet, and development while ensuring her well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Research & Discovery</h2>
            <div className="space-y-8">
              <p className="text-lg">
                Nyra's successful cloning has provided invaluable insights into prehistoric biology and evolution. 
                Our ongoing research focuses on several key areas:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-biotech-cyan">Evolutionary Adaptations</h3>
                  <p>
                    By studying Nyra's physiology, we're gaining new understanding of how these mega-predators 
                    evolved to dominate their ecosystem. Her unique muscular structure and sensory capabilities 
                    reveal evolutionary pathways previously unknown to science.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-biotech-cyan">Biological Resilience</h3>
                  <p>
                    Nyra's immune system and cellular regeneration capabilities are remarkably advanced, 
                    offering potential applications for medical research. Our team is studying these mechanisms 
                    for insights that could benefit human medicine.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-biotech-cyan">Behavioral Studies</h3>
                  <p>
                    By observing Nyra's instinctual behaviors, we're reconstructing how these apex predators 
                    hunted, communicated, and interacted with their environment. This research helps fill critical 
                    gaps in our understanding of prehistoric ecosystems.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-biotech-cyan">Conservation Applications</h3>
                  <p>
                    The technology developed to clone Nyra is being adapted to help endangered big cat species. 
                    Our research team is working with conservation partners to apply these breakthroughs to preserve 
                    threatened species on the verge of extinction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-biotech-blue">Experience Nyra</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            While access to Nyra is currently limited to research personnel, we offer virtual tours and 
            live feeds for scientific partners and qualified educational institutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="button-primary">
              Request Access
            </Link>
            <Link href="/research" className="button-secondary">
              Research Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 