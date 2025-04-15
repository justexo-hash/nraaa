"use client";

import React from 'react';
import Link from 'next/link';

export default function NeurosciencePublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Neuroscience Publications</h1>
            <p className="text-xl max-w-3xl">
              Pioneering studies on brain development, neural circuitry, and sensory processing in de-extinct species.
            </p>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yukon-light p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-biotech-blue mb-4">About This Research Area</h2>
              <p className="text-lg mb-4">
                Neuroscience is at the heart of our de-extinction program's success. Our groundbreaking research 
                has enabled us to ensure proper neural development, circuit formation, and sensory processing in 
                Shadow, ensuring that his brain functions as nature intended despite being born through 
                artificial means.
              </p>
              <p className="text-lg">
                This collection features 16 peer-reviewed publications detailing our innovations in neural tissue 
                development, sensory system formation, and cognitive circuit establishment that were essential to 
                Shadow's successful neurological development.
              </p>
            </div>

            <div className="flex justify-between items-center mb-8">
              <h2 className="section-title mb-0">Featured Publications</h2>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-biotech-teal">
                  <option>Most Recent</option>
                  <option>Most Cited</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {/* Publication 1 */}
              <div className="card hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-yukon-gray rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-biotech-blue mb-2">
                      Comparative Neural Development in <em>Panthera atrox magnus</em> and Modern Felids
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Neuron, 2023</p>
                    <p className="mb-4">
                      Park S., Werner J., Chen L., Reynolds M., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive study documents Shadow's neural development from embryonic stages through 
                      adolescence, comparing key milestones with those of modern felids. Using our proprietary NeuroTrack™ 
                      imaging technology, we identified critical periods of brain development that required specialized 
                      interventions to ensure proper circuitry formation.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.neuron.2023.03.011
                      </a>
                      <span>|</span>
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        PDF Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Publication 2 */}
              <div className="card hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-yukon-gray rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-biotech-blue mb-2">
                      NeuroStim™: A Non-Invasive System for Neural Circuit Activation and Maturation
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Neuroscience, 2022</p>
                    <p className="mb-4">
                      Reynolds M., Park S., Takahashi J., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This paper introduces our revolutionary NeuroStim™ technology, which uses precisely targeted 
                      electromagnetic pulses to stimulate neural pathway development in the developing brain. The system 
                      enabled us to promote critical circuit formation during Shadow's development, resulting in a 72% 
                      improvement in functional connectivity in targeted brain regions.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41593-022-01178-3
                      </a>
                      <span>|</span>
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        PDF Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Publication 3 */}
              <div className="card hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-yukon-gray rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-biotech-blue mb-2">
                      Sensory System Development and Integration in De-Extinct Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Current Biology, 2022</p>
                    <p className="mb-4">
                      Chen L., Park S., Garcia R., Kingsley S., et al.
                    </p>
                    <p className="mb-4">
                      This landmark study details the development of Shadow's sensory systems, with particular focus on 
                      visual, auditory, and olfactory processing. Using advanced functional imaging and behavioral testing, 
                      we documented the sequential maturation of sensory circuits and their integration in higher processing 
                      centers, confirming species-appropriate sensory capabilities.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.cub.2022.07.019
                      </a>
                      <span>|</span>
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        PDF Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Publication 4 */}
              <div className="card hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-yukon-gray rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-biotech-blue mb-2">
                      Brain Connectivity and Network Formation in <em>Panthera atrox magnus</em>
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science, 2023</p>
                    <p className="mb-4">
                      Werner J., Reynolds M., Chen L., Park S., et al.
                    </p>
                    <p className="mb-4">
                      This groundbreaking research maps the complete connectome of Shadow's brain, revealing the complex 
                      neural networks underlying predatory behavior, territorial mapping, and social processing. Using our 
                      proprietary NeuroPET imaging technology, we identified unique connectivity patterns that distinguish 
                      <em>P. atrox magnus</em> from modern big cats, providing insights into the neural basis of extinct 
                      predator behaviors.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/science.adf5927
                      </a>
                      <span>|</span>
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        PDF Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Publication 5 */}
              <div className="card hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-yukon-gray rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-biotech-blue mb-2">
                      Neuroplasticity and Environmental Enrichment Effects in De-Extinct Felids
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Communications, 2024</p>
                    <p className="mb-4">
                      Kingsley S., Park S., Werner J., Chen L., et al.
                    </p>
                    <p className="mb-4">
                      This study investigates the effects of our specialized environmental enrichment protocols on neural 
                      plasticity in Shadow's developing brain. Using longitudinal brain imaging and cognitive assessments, 
                      we demonstrate that our enrichment program significantly enhanced dendritic branching, synaptic density, 
                      and functional connectivity in key brain regions associated with learning, memory, and problem-solving.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41467-024-43761-5
                      </a>
                      <span>|</span>
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        PDF Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <nav className="flex items-center">
                <span className="px-4 py-2 rounded-l-md bg-biotech-blue text-white">1</span>
                <a href="#" className="px-4 py-2 border border-gray-300 border-l-0 hover:bg-yukon-light transition-colors">2</a>
                <a href="#" className="px-4 py-2 border border-gray-300 border-l-0 hover:bg-yukon-light transition-colors">3</a>
                <a href="#" className="px-4 py-2 border border-gray-300 border-l-0 hover:bg-yukon-light transition-colors">4</a>
                <a href="#" className="px-4 py-2 border border-gray-300 border-l-0 rounded-r-md hover:bg-yukon-light transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Related Research */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12">Related Research Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/publications/behavioral-development" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Behavioral Development</h3>
                <p className="mb-6 flex-grow">
                  Our research on instinctual behavior, learning, and cognition in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">12 Publications</div>
              </Link>
              
              <Link href="/publications/developmental-biology" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Developmental Biology</h3>
                <p className="mb-6 flex-grow">
                  Our studies on embryonic development, organogenesis, and physiological maturation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">23 Publications</div>
              </Link>
              
              <Link href="/publications/epigenetic-programming" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Epigenetic Programming</h3>
                <p className="mb-6 flex-grow">
                  Our methods for ensuring proper gene expression and developmental regulation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">19 Publications</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Technology</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Discover how our NeuroStim™ technology ensures proper neural development in de-extinct species.
          </p>
          <div className="flex justify-center">
            <Link href="/technology/neurostim" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore NeuroStim™ Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 