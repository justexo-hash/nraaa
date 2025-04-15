"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Research() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient dna-pattern-bg text-biotech-blue py-16">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Research</h1>
          <p className="text-xl max-w-3xl">
            Pioneering genetic reconstruction technologies that are bringing extinct species back to life
            and revolutionizing our understanding of genetics.
          </p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Pushing the Boundaries of Genetic Science</h2>
            <p className="text-lg mb-6">
              At Yukon Lab, our research team is tackling some of the most challenging problems in genetic engineering,
              focusing on three main areas: de-extinction science, advanced cloning technologies, and genetic restoration.
            </p>
            <p className="text-lg mb-6">
              Our proprietary genetic reconstruction platform, <span className="font-semibold text-biotech-blue">GeneRevive™</span>,
              has made it possible to recover, reconstruct, and revive species that have been extinct for thousands of years,
              beginning with our groundbreaking success in cloning Nyra, the prehistoric mega-cat.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Key Research Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Research Area 1 */}
            <div className="card">
              <div className="h-48 bg-yukon-gray rounded-t-xl">
                <Image 
                  src="/images/dna-extraction.png" 
                  alt="Genetic Reconstruction Process" 
                  width={600} 
                  height={400}
                  className="h-48 w-full object-cover rounded-t-xl" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">De-Extinction Science</h3>
                <p className="mb-4">
                  Our de-extinction program focuses on recovering and reconstructing extinct species' genomes from preserved DNA fragments. 
                  Using our proprietary algorithms, we can fill gaps in degraded genetic sequences with remarkable accuracy.
                </p>
                <p className="text-biotech-teal font-semibold">
                  Current projects: Prehistoric mega-cat, Woolly Rhinoceros, Tasmanian Tiger
                </p>
              </div>
            </div>

            {/* Research Area 2 */}
            <div className="card">
              <div className="h-48 bg-yukon-gray rounded-t-xl">
                <Image 
                  src="/images/cloning-technology.png" 
                  alt="Advanced Cloning Technology" 
                  width={600} 
                  height={400}
                  className="h-48 w-full object-cover rounded-t-xl" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Advanced Cloning Technologies</h3>
                <p className="mb-4">
                  Our synthetic embryogenesis chambers replicate the optimal conditions for embryonic development,
                  allowing us to bring cloned embryos to term without surrogate mothers, a breakthrough in cloning science.
                </p>
                <p className="text-biotech-teal font-semibold">
                  Key innovation: BioMatrix™ artificial womb technology
                </p>
              </div>
            </div>

            {/* Research Area 3 */}
            <div className="card">
              <div className="h-48 bg-yukon-gray rounded-t-xl">
                <Image 
                  src="/images/genetic-restoration.png" 
                  alt="Genetic Restoration Process" 
                  width={600} 
                  height={400}
                  className="h-48 w-full object-cover rounded-t-xl" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Genetic Restoration</h3>
                <p className="mb-4">
                  We're applying our de-extinction technologies to help endangered species by increasing genetic diversity 
                  in populations with dangerously small gene pools, potentially reversing their path to extinction.
                </p>
                <p className="text-biotech-teal font-semibold">
                  Current focus: Amur Leopard, Northern White Rhino, Vaquita
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Breakthrough Technologies</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-yukon-gray h-80 rounded-lg">
                  <Image 
                    src="/images/shadow-development.png" 
                    alt="GeneRevive Platform" 
                    width={600} 
                    height={500}
                    className="h-80 w-full object-cover rounded-lg" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-biotech-blue mb-4">GeneRevive™ Platform</h3>
                  <p className="text-lg mb-4">
                    Our flagship genetic reconstruction platform combines advanced AI algorithms with cutting-edge 
                    DNA sequencing technology to recover and restore complete genomes from fragmentary ancient DNA.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><span className="font-semibold">99.7% accuracy</span> in genetic reconstruction</li>
                    <li><span className="font-semibold">10,000x faster</span> than previous methods</li>
                    <li>Capable of working with DNA up to <span className="font-semibold">150,000 years old</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-biotech-blue mb-4">BioMatrix™ Artificial Womb</h3>
                  <p className="text-lg mb-4">
                    Our revolutionary artificial womb technology provides the perfect environment for embryonic
                    development, completely eliminating the need for surrogate mothers in the cloning process.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Maintains <span className="font-semibold">perfect hormonal balance</span> throughout gestation</li>
                    <li>Adaptive <span className="font-semibold">nutrient delivery system</span> for optimal development</li>
                    <li><span className="font-semibold">87% success rate</span> in bringing embryos to term</li>
                  </ul>
                </div>
                <div className="bg-yukon-gray h-80 rounded-lg order-1 md:order-2">
                  <Image 
                    src="/images/biomatrix-womb.png" 
                    alt="BioMatrix Artificial Womb" 
                    width={600} 
                    height={500}
                    className="h-80 w-full object-cover rounded-lg" 
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-yukon-gray h-80 rounded-lg">
                  <Image 
                    src="/images/epigenetic-controller.png" 
                    alt="EpiGen Controller Technology" 
                    width={600} 
                    height={500}
                    className="h-80 w-full object-cover rounded-lg" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-biotech-blue mb-4">EpiGen™ Controller</h3>
                  <p className="text-lg mb-4">
                    Our epigenetic programming technology ensures proper gene expression in cloned organisms,
                    eliminating the health issues and shortened lifespans common in early cloning experiments.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Precisely <span className="font-semibold">controls genetic expression</span> patterns</li>
                    <li>Prevents <span className="font-semibold">telomere shortening</span> associated with cloning</li>
                    <li>Ensures <span className="font-semibold">normal immune system development</span> in cloned specimens</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">Recent Publications</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our research team regularly publishes groundbreaking findings in the world's leading scientific journals,
            advancing the field of genetic engineering and cloning technology.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card hover:shadow-xl transition-shadow p-8">
                <h3 className="text-xl font-bold text-biotech-blue mb-2">
                  Complete Genome Reconstruction of <em>Panthera atrox magnus</em> from Fragmentary Pleistocene Remains
                </h3>
                <p className="text-biotech-teal mb-4">Nature Genetics, 2023</p>
                <p className="mb-4">
                  Volkov E., Chen M., Patel S., et al.
                </p>
                <p>
                  This paper details our breakthrough in reconstructing the complete genome of the prehistoric mega-cat
                  from DNA fragments recovered from permafrost specimens, laying the groundwork for successful cloning.
                </p>
              </div>
              
              <div className="card hover:shadow-xl transition-shadow p-8">
                <h3 className="text-xl font-bold text-biotech-blue mb-2">
                  BioMatrix: An Artificial Womb System for Ex-Vivo Development of Cloned Mammalian Embryos
                </h3>
                <p className="text-biotech-teal mb-4">Science, 2024</p>
                <p className="mb-4">
                  Patel S., Takahashi J., Chen M., et al.
                </p>
                <p>
                  This publication introduces our revolutionary artificial womb technology, detailing its design,
                  functionality, and unprecedented success rates in bringing cloned embryos to term.
                </p>
              </div>
              
              <div className="card hover:shadow-xl transition-shadow p-8">
                <h3 className="text-xl font-bold text-biotech-blue mb-2">
                  Epigenetic Reprogramming in De-Extinction: Solving the Telomere Problem in Cloned Organisms
                </h3>
                <p className="text-biotech-teal mb-4">Cell, 2024</p>
                <p className="mb-4">
                  Chen M., Volkov E., Zhang H., et al.
                </p>
                <p>
                  This study presents our solution to one of cloning's most persistent challenges: telomere shortening
                  and its associated health issues, demonstrating normal lifespans in our cloned specimens.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/publications" className="button-primary">
                View All Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Yukon Lab</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We're seeking research partners and collaborators interested in applying our technologies to new frontiers in genetic science. Whether you're in academia or industry, we welcome the opportunity to explore potential collaborations.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Contact Our Research Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 