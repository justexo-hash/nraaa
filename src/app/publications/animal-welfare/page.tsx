"use client";

import React from 'react';
import Link from 'next/link';

export default function AnimalWelfarePublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Animal Welfare Publications</h1>
            <p className="text-xl max-w-3xl">
              Pioneering protocols for optimal care, enrichment, and well-being of de-extinct species.
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
                At Yukon Lab, animal welfare is a fundamental ethical commitment that guides our de-extinction program. 
                Our research in this area focuses on developing comprehensive protocols for ensuring the physical, mental, 
                and emotional well-being of Shadow and other de-extinct species.
              </p>
              <p className="text-lg">
                This collection features 9 peer-reviewed publications detailing our innovative approaches to habitat design, 
                environmental enrichment, veterinary care, and behavioral monitoring that have established new standards 
                for the ethical care of de-extinct animals.
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
                      Ethical Framework for De-Extinction Welfare: The Yukon Lab Approach
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Ethics, 2023</p>
                    <p className="mb-4">
                      Takahashi J., Kingsley S., Volkov E., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This cornerstone publication presents our comprehensive ethical framework for de-extinction, with a 
                      particular focus on animal welfare. We outline the principles, oversight mechanisms, and assessment 
                      protocols that guide our approach to ensuring the highest standards of care for Shadow and future 
                      de-extinct species, establishing a benchmark for responsible de-extinction science.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41598-023-35927-8
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
                      BiomeCreate™: Optimal Habitat Design for <em>Panthera atrox magnus</em>
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Applied Animal Behaviour Science, 2022</p>
                    <p className="mb-4">
                      Kingsley S., Garcia R., Werner J., Chen L., et al.
                    </p>
                    <p className="mb-4">
                      This paper introduces our BiomeCreate™ habitat design system, which integrates paleoenvironmental data, 
                      modern big cat habitat requirements, and advanced monitoring technologies to create optimal living 
                      environments for de-extinct species. We present data showing that our habitat design for Shadow resulted 
                      in significantly higher activity levels, natural behavior expression, and positive welfare indicators 
                      compared to conventional enclosure designs.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.applanim.2022.06.015
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
                      Non-Invasive Welfare Monitoring Systems for De-Extinct Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Animal Welfare, 2023</p>
                    <p className="mb-4">
                      Garcia R., Kingsley S., Reynolds M., Park S., et al.
                    </p>
                    <p className="mb-4">
                      This study details our innovative approach to continuous welfare monitoring using non-invasive technologies. 
                      Our integrated system combines thermal imaging, gait analysis, vocalisation recognition, and behavioral 
                      pattern tracking to detect subtle changes in physical and psychological well-being. The system has enabled 
                      early intervention in potential welfare issues, resulting in consistently positive welfare outcomes for Shadow.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1017/awf.2023.16
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
                      Specialized Veterinary Protocols for De-Extinct Species Care
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Journal of Zoo and Wildlife Medicine, 2023</p>
                    <p className="mb-4">
                      Kingsley S., Chen L., Werner J., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive publication outlines the specialized veterinary care protocols developed for Shadow's 
                      health management. We present innovative approaches to preventive care, nutritional management, non-invasive 
                      diagnostics, and medical training that have enabled us to maintain Shadow's excellent health while minimizing 
                      stress and maximizing his agency and comfort during veterinary procedures.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1638/2022-0049
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
                      Psychological Well-Being in Solitary De-Extinct Predators: Challenges and Solutions
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Conservation Physiology, 2024</p>
                    <p className="mb-4">
                      Kingsley S., Park S., Garcia R., Volkov E., et al.
                    </p>
                    <p className="mb-4">
                      This groundbreaking paper addresses the unique challenge of ensuring psychological well-being for Shadow 
                      as a solitary member of his species. We present evidence that our multi-faceted approach—combining carefully 
                      designed social interactions with human caregivers, controlled exposure to other felid species, and 
                      advanced environmental enrichment—has successfully prevented the development of abnormal behaviors 
                      and maintained positive psychological indicators.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1093/conphys/coae012
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
              
              <Link href="/publications/neuroscience" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Neuroscience</h3>
                <p className="mb-6 flex-grow">
                  Our studies on brain development, neural circuitry, and sensory processing in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">16 Publications</div>
              </Link>
              
              <Link href="/publications/conservation" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Conservation</h3>
                <p className="mb-6 flex-grow">
                  Our research on applying de-extinction technologies to endangered species conservation.
                </p>
                <div className="text-biotech-teal font-semibold">11 Publications</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Ethical Framework</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Discover our comprehensive approach to ensuring the welfare of de-extinct species.
          </p>
          <div className="flex justify-center">
            <Link href="/about/ethics" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore Our Ethical Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 