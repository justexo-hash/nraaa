"use client";

import React from 'react';
import Link from 'next/link';

export default function DevelopmentalBiologyPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Developmental Biology Publications</h1>
            <p className="text-xl max-w-3xl">
              Pioneering research on embryonic development, organogenesis, and physiological maturation in de-extinct species.
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
                Resurrecting extinct species requires not only genetic reconstruction but also ensuring proper 
                developmental pathways. Our developmental biology research focuses on monitoring and optimizing 
                embryonic development, organogenesis, and physiological maturation of de-extinct species.
              </p>
              <p className="text-lg">
                This collection features 23 peer-reviewed publications detailing our breakthroughs in 
                developmental milestones, organ function enhancement, and physiological parameter monitoring 
                that were critical to Shadow's successful development.
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
                      Comparative Embryonic Development in <em>Panthera atrox magnus</em> and Modern Felids
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Developmental Biology, 2023</p>
                    <p className="mb-4">
                      Werner J., Chen L., Reynolds M., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive study documents the complete embryonic development of Shadow, comparing 
                      key developmental milestones with those of modern felids. Using advanced imaging technologies 
                      and molecular markers, we identified critical periods requiring intervention to ensure proper 
                      development, particularly during organogenesis and neural development.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.ydbio.2023.04.007
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
                      NeoMatrix™ Optimization for Large Felid Development: Physiological and Nutritional Requirements
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Biotechnology, 2022</p>
                    <p className="mb-4">
                      Takahashi J., Reynolds M., Garcia R., Chen L., et al.
                    </p>
                    <p className="mb-4">
                      This publication details our advancements in artificial placental system development. 
                      We present the custom-formulated nutrient and growth factor profiles created specifically 
                      for Shadow's developmental requirements, including optimized oxygen delivery, hormone 
                      regulation, and immune component supplementation based on analysis of modern felid placental function.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41587-022-01371-6
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
                      Organ-Specific Developmental Challenges in De-Extinct Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Cell, 2022</p>
                    <p className="mb-4">
                      Chen L., Werner J., Park S., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This landmark paper identifies the specific challenges in cardiovascular, neural, and endocrine 
                      system development in Shadow. We detail the targeted interventions developed to overcome 
                      developmental hurdles, including growth factor supplementation, mechanical stimulation, and 
                      pharmacological treatments that dramatically improved organ formation and function.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.cell.2022.08.015
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
                      Real-Time Monitoring and Intervention in De-Extinct Species Development
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science Advances, 2023</p>
                    <p className="mb-4">
                      Reynolds M., Takahashi J., Chen L., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This paper introduces our advanced monitoring platform that combines multi-parameter sensing, 
                      non-invasive imaging, and AI-driven analysis to track Shadow's development in real-time. 
                      The system enabled early detection of developmental abnormalities and automated therapeutic 
                      interventions, resulting in a 63% reduction in developmental complications.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/sciadv.ade2789
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
                      Neurodevelopmental Optimization in <em>Panthera atrox magnus</em>
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Neuron, 2023</p>
                    <p className="mb-4">
                      Park S., Werner J., Chen L., Garcia R., et al.
                    </p>
                    <p className="mb-4">
                      This groundbreaking research focuses on neural development in Shadow, with particular emphasis 
                      on brain structure formation and neural circuit establishment. We present evidence that 
                      targeted stimulation protocols and growth factor supplementation enhanced neural progenitor 
                      proliferation and differentiation, leading to improved cognitive and motor function development.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.neuron.2023.01.013
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
              <Link href="/publications/epigenetic-programming" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Epigenetic Programming</h3>
                <p className="mb-6 flex-grow">
                  Our methods for ensuring proper gene expression and developmental regulation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">19 Publications</div>
              </Link>
              
              <Link href="/publications/cloning-technologies" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Cloning Technologies</h3>
                <p className="mb-6 flex-grow">
                  Our groundbreaking approaches to somatic cell nuclear transfer and artificial womb development.
                </p>
                <div className="text-biotech-teal font-semibold">32 Publications</div>
              </Link>
              
              <Link href="/publications/behavioral-development" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Behavioral Development</h3>
                <p className="mb-6 flex-grow">
                  Our research on instinctual behavior, learning, and cognition in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">12 Publications</div>
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
            Discover how our NeoMatrix™ platform enables complete ex utero development for de-extinct species.
          </p>
          <div className="flex justify-center">
            <Link href="/technology/neomatrix" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore NeoMatrix™ Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 