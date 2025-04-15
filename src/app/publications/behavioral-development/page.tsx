"use client";

import React from 'react';
import Link from 'next/link';

export default function BehavioralDevelopmentPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Behavioral Development Publications</h1>
            <p className="text-xl max-w-3xl">
              Groundbreaking research on instinctual behavior, learning, and cognition in de-extinct species.
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
                The successful resurrection of extinct species extends beyond genetic and physiological reconstruction to include 
                proper behavioral development. Our behavioral sciences team has pioneered methods to ensure Shadow exhibits the 
                natural behaviors, instincts, and cognitive abilities of his species despite having no parental models.
              </p>
              <p className="text-lg">
                This collection features 12 peer-reviewed publications detailing our innovative approaches to instinctual behavior 
                activation, environmental enrichment, and cognitive development that have enabled Shadow to develop appropriate 
                predatory, territorial, and social behaviors characteristic of <em>Panthera atrox magnus</em>.
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
                      Innate Behavioral Development in <em>Panthera atrox magnus</em>: Challenges and Solutions
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Animal Behaviour, 2024</p>
                    <p className="mb-4">
                      Kingsley S., Volkov E., Takahashi J., Chen L., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive study documents the emergence of innate behaviors in Shadow from birth 
                      through early development. We present evidence that key predatory, territorial, and social 
                      behaviors appear spontaneously despite the absence of parental modeling, confirming the 
                      successful genetic and epigenetic programming of behavioral circuits in our de-extinction process.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.anbehav.2024.01.003
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
                      BioStim™: A Novel System for Neural Circuit Activation and Behavioral Imprinting
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Neuron, 2023</p>
                    <p className="mb-4">
                      Park S., Kingsley S., Werner J., Reynolds M., et al.
                    </p>
                    <p className="mb-4">
                      This paper introduces our proprietary BioStim™ system, which combines targeted sensory stimulation 
                      with AI-driven response analysis to activate and strengthen innate behavioral circuits. The system 
                      utilizes species-appropriate auditory, visual, olfactory, and tactile stimuli to evoke and reinforce 
                      genetically programmed behaviors, resulting in a 78% success rate in activating proper predatory 
                      sequences in Shadow.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.neuron.2023.06.019
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
                      Environmental Enrichment Strategies for De-Extinct Predator Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Applied Animal Behaviour Science, 2023</p>
                    <p className="mb-4">
                      Kingsley S., Garcia R., Takahashi J., Chen L., et al.
                    </p>
                    <p className="mb-4">
                      This study details our comprehensive environmental enrichment protocol designed specifically for 
                      Shadow. We present data showing that habitat complexity, novel stimuli introduction, and 
                      species-appropriate challenges significantly enhanced natural behavior expression and cognitive 
                      development. The protocol includes terrain diversity, scent-based exploration activities, and 
                      simulated hunting opportunities that promote physical and mental well-being.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.applanim.2023.08.011
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
                      Cognitive Testing and Problem-Solving Assessment in <em>Panthera atrox magnus</em>
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Proceedings of the Royal Society B, 2024</p>
                    <p className="mb-4">
                      Werner J., Kingsley S., Chen L., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This groundbreaking research presents the first cognitive assessment of a de-extinct species. 
                      Through a series of specially designed problem-solving tasks, we evaluated Shadow's learning 
                      capacity, memory, and cognitive flexibility. Results indicate cognitive abilities comparable 
                      to modern big cats, with particularly strong performance in spatial memory and causal reasoning 
                      tasks, validating the successful development of higher cognitive functions.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1098/rspb.2023.2597
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
                      Comparative Analysis of Hunting Behavior Between <em>Panthera atrox magnus</em> and Modern Big Cats
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Journal of Zoology, 2024</p>
                    <p className="mb-4">
                      Kingsley S., Werner J., Volkov E., Garcia R., et al.
                    </p>
                    <p className="mb-4">
                      This detailed observational study compares Shadow's hunting behaviors with those of modern lions, 
                      tigers, and jaguars. Using advanced motion tracking and behavioral sequence analysis, we identified 
                      unique aspects of Shadow's predatory technique, including distinctive stalk-and-ambush patterns, 
                      prey targeting strategies, and kill methods that differ from modern felids, providing insight into 
                      the hunting behavior of this extinct apex predator.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1111/jzo.13060
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
              <Link href="/publications/developmental-biology" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Developmental Biology</h3>
                <p className="mb-6 flex-grow">
                  Our research on embryonic development, organogenesis, and physiological maturation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">23 Publications</div>
              </Link>
              
              <Link href="/publications/neuroscience" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Neuroscience</h3>
                <p className="mb-6 flex-grow">
                  Our studies on brain development, neural circuitry, and sensory processing in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">16 Publications</div>
              </Link>
              
              <Link href="/publications/animal-welfare" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Animal Welfare</h3>
                <p className="mb-6 flex-grow">
                  Our protocols for optimal care, enrichment, and well-being of de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">9 Publications</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Shadow</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Discover how our behavioral development protocols have enabled Shadow to express his natural behaviors.
          </p>
          <div className="flex justify-center">
            <Link href="/species/shadow" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Meet Shadow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 