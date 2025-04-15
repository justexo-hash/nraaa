"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GeneRevivePlatform() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Flagship Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GeneRevive™ Platform</h1>
            <p className="text-xl max-w-3xl">
              The world's most advanced genetic reconstruction system, capable of recovering
              complete genomes from fragmentary ancient DNA with unprecedented accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">Reconstructing the Genetic Past</h2>
                <p className="text-lg mb-6">
                  The GeneRevive™ Platform represents the pinnacle of genetic reconstruction technology, combining
                  advanced computational algorithms with cutting-edge DNA extraction and synthesis techniques to recover
                  complete genomes from even the most degraded ancient samples.
                </p>
                <p className="text-lg mb-6">
                  Developed over eight years by our team led by Dr. Marcus Chen and Dr. Elena Volkov, this revolutionary
                  platform solved what many considered the impossible challenge of de-extinction: obtaining complete,
                  viable genetic information from extinct species.
                </p>
                <div className="bg-yukon-light p-6 rounded-xl">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Patent-protected technology with 23 international patents</p>
                  </div>
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">99.7% accuracy in genetic sequence reconstruction</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Can process DNA samples up to 150,000 years old</p>
                  </div>
                </div>
              </div>
              <div className="bg-yukon-gray h-[500px] rounded-xl relative">
                {/* Uncomment when you add your image */}
                <Image 
                  src="/images/tech-gene-revive.png" 
                  alt="GeneRevive Platform in action" 
                  fill
                  className="rounded-xl object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">How GeneRevive™ Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Nano-Extraction</h3>
                  <p className="mb-6">
                    Our proprietary nano-extraction technology delicately separates DNA fragments from ancient tissues,
                    fossils, or preserved remains without further damaging the already degraded genetic material.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    10x more efficient than traditional extraction methods
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">AI-Driven Sequence Assembly</h3>
                  <p className="mb-6">
                    Our quantum-enhanced neural network analyzes DNA fragments, comparing them with our database of 
                    over 15,000 species to accurately predict and fill gaps in the genetic sequence.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Processes 500TB of genetic data in under 48 hours
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Synthetic Assembly</h3>
                  <p className="mb-6">
                    The reconstructed genetic blueprint is used to synthesize actual DNA sequences, which are then
                    assembled into complete chromosomes and finally a functional genome.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Can reconstruct a complete genome in as little as 3 months
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-20">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl">
                <h3 className="text-2xl font-bold text-biotech-blue mb-6 text-center">Verification and Validation</h3>
                <p className="text-lg mb-6 text-center">
                  Every reconstructed genome undergoes rigorous testing to verify its integrity and functionality before
                  it's used in the cloning process. Our multi-stage validation protocol ensures that the synthesized
                  genome will support viable cellular function.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">27</div>
                    <p className="font-semibold">Validation checkpoints</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">500+</div>
                    <p className="font-semibold">Functional tests</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">99.7%</div>
                    <p className="font-semibold">Sequence accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Key Innovations</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/quantum-computing.png" 
                    alt="Quantum computing element of GeneRevive" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Quantum-Enhanced Computation</h3>
                <p>
                  Unlike traditional genetic sequencing technologies that struggle with highly degraded DNA, our platform
                  utilizes quantum computing elements to simultaneously evaluate millions of possible genetic sequences,
                  identifying the most probable reconstruction based on genetic rules and comparative analysis with related species.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/nano-extraction.png" 
                    alt="Nano-extraction technology" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Molecular-Scale DNA Extraction</h3>
                <p>
                  Our carbon nanotube extraction probes can isolate and extract DNA fragments as small as 20 base pairs
                  without further degradation, providing more raw genetic material for reconstruction than any other
                  extraction method in existence.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/predictive-algorithms.png" 
                    alt="Predictive genetic algorithms" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Predictive Genetic Algorithms</h3>
                <p>
                  Our machine learning systems have been trained on the complete genomes of over 15,000 living and recently 
                  extinct species, allowing them to accurately predict missing genetic sequences based on evolutionary
                  relationships and the fundamental rules of genetic inheritance.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/synthesis-chambers.png" 
                    alt="High-fidelity DNA synthesis chambers" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">High-Fidelity DNA Synthesis</h3>
                <p>
                  Once the genetic sequence is reconstructed digitally, our advanced synthesis chambers can create
                  physical DNA strands with an error rate of less than one in 10 million base pairs, far exceeding
                  the industry standard for synthetic DNA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">GeneRevive™ in Action: The Nyra Project</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <p className="text-lg mb-4">
                When our team began the Nyra project, we faced what seemed like an insurmountable challenge. The DNA
                samples from Pleistocene-era <em>Panthera atrox magnus</em> specimens were highly degraded, with most
                fragments averaging just 35-50 base pairs in length. Conventional wisdom said a complete genome 
                reconstruction would be impossible.
              </p>
              <p className="text-lg">
                Additionally, with no living close relatives that perfectly matched Nyra's species, we had limited 
                reference genomes to work from. The genetic distance from modern big cats meant traditional comparative
                genomics would fall short.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The GeneRevive™ Solution</h3>
              <p className="text-lg mb-6">
                The GeneRevive™ Platform was able to extract and analyze over 230,000 tiny DNA fragments from multiple
                permafrost-preserved specimens found in the Yukon Territory. Our quantum-enhanced algorithms identified
                patterns and relationships that would be invisible to conventional analysis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">3.4B</div>
                  <p>Base pairs reconstructed</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">99.7%</div>
                  <p>Verified accuracy</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">8</div>
                  <p>Months from start to finish</p>
                </div>
              </div>
              <p className="text-lg">
                The platform's adaptive learning capabilities allowed it to refine its predictions as more data became
                available, eventually producing a complete genome that enabled the successful cloning of Nyra.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">The Results</h3>
              <p className="text-lg mb-6">
                The success of the Nyra project validated the GeneRevive™ Platform and established a new benchmark in
                genetic reconstruction technology. Subsequent testing confirmed that the reconstructed genome was
                functionally complete, with cellular developmental processes proceeding normally during the cloning phase.
              </p>
              <div className="flex justify-center">
                <Link href="/species/shadow" className="button-primary bg-white text-biotech-blue hover:bg-biotech-cyan hover:text-white">
                  Learn About Nyra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Technical Specifications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-biotech-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Specification</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">DNA Sample Age Range</td>
                    <td className="px-6 py-4">Up to 150,000 years with standard protocols<br />Up to 250,000 years with enhanced preservation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Minimum Input Material</td>
                    <td className="px-6 py-4">As little as 10 picograms of fragmented DNA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Processing Timeframe</td>
                    <td className="px-6 py-4">3-12 months depending on species complexity and sample quality</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Genetic Sequence Accuracy</td>
                    <td className="px-6 py-4">99.7% accuracy for reconstructed sequences<br />99.9999% accuracy for synthesized DNA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Computing Infrastructure</td>
                    <td className="px-6 py-4">Hybrid quantum-classical computing system<br />1.2 petaFLOPS processing capacity</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Reference Genome Database</td>
                    <td className="px-6 py-4">15,000+ species<br />8.7 petabytes of comparative genetic data</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">DNA Synthesis Capacity</td>
                    <td className="px-6 py-4">Up to 500 million base pairs per day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Our Other Technologies</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            GeneRevive™ works seamlessly with our other breakthrough technologies to make de-extinction possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/technology/biomatrix" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              BioMatrix™ Artificial Womb
            </Link>
            <Link href="/technology/epigen" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              EpiGen™ Controller
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 