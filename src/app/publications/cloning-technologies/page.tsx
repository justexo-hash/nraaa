"use client";

import React from 'react';
import Link from 'next/link';

export default function CloningTechnologiesPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloning Technologies Publications</h1>
            <p className="text-xl max-w-3xl">
              Revolutionary approaches to somatic cell nuclear transfer and artificial womb development for de-extinct species.
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
                Our cloning technologies represent the foundation of our de-extinction process. Through 
                advanced somatic cell nuclear transfer (SCNT) and our proprietary NeoMatrix™ artificial 
                womb technology, we've overcome the inherent challenges of developing extinct species without 
                surrogate mothers.
              </p>
              <p className="text-lg">
                This collection features 32 peer-reviewed publications detailing our groundbreaking advances 
                in nuclear reprogramming, artificial placental development, and ex utero gestation systems 
                that made Shadow's successful development possible.
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
                      NeoMatrix™: A Fully Functional Artificial Womb for Large Mammalian Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature, 2022</p>
                    <p className="mb-4">
                      Reynolds M., Takahashi J., Werner J., Chen L., et al.
                    </p>
                    <p className="mb-4">
                      This landmark paper introduces the NeoMatrix™ platform, the world's first fully functional 
                      artificial womb capable of supporting development from early embryonic stages to full term 
                      for large mammalian species. We detail the system's advanced nutrient delivery systems, 
                      bioreactive surfaces, mechanical stimulation mechanisms, and AI-driven monitoring platform 
                      that together enabled Shadow's successful development.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41586-022-04623-2
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
                      Enhanced Nuclear Reprogramming for Extinct Species SCNT
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Cell Stem Cell, 2021</p>
                    <p className="mb-4">
                      Chen L., Park S., Garcia R., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This publication details our breakthrough in nuclear reprogramming for extinct species. 
                      We present our optimized SCNT protocol incorporating novel epigenetic modifiers, cell cycle 
                      synchronization techniques, and advanced micromanipulation methods that dramatically 
                      improved nuclear reprogramming efficiency for Shadow's cells, achieving a 17-fold 
                      increase in viable embryos compared to conventional SCNT methods.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.stem.2021.09.002
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
                      Biomimetic Placental Interface for Ex Utero Development
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science Translational Medicine, 2022</p>
                    <p className="mb-4">
                      Takahashi J., Garcia R., Chen L., Park S., et al.
                    </p>
                    <p className="mb-4">
                      This paper describes our advanced biomimetic placental interface technology, a core component 
                      of the NeoMatrix™ platform. We detail the multi-layered functional membrane that replicates 
                      placental transport mechanisms, featuring selective permeability, active transport systems, 
                      and simulated maternal-fetal exchange functions that sustained Shadow's development throughout 
                      the entire gestation period.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/scitranslmed.abm4765
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
                      Physiological and Biochemical Parameters for Artificial Womb Optimization
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Proceedings of the National Academy of Sciences, 2022</p>
                    <p className="mb-4">
                      Werner J., Reynolds M., Park S., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive analysis documents the precise physiological and biochemical parameters 
                      required for optimal ex utero development of large extinct felids. By analyzing modern felid 
                      physiological data and extrapolating to <em>Panthera atrox magnus</em> using computational 
                      models, we identified 187 critical parameters that guided the NeoMatrix™ system's regulation 
                      of gas exchange, nutrient delivery, waste removal, and hormonal balance.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1073/pnas.2203422119
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
                      Mechanical and Structural Support Systems for Ex Utero Felid Development
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Biomedical Engineering, 2022</p>
                    <p className="mb-4">
                      Garcia R., Reynolds M., Chen L., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This publication details the mechanical aspects of the NeoMatrix™ platform, including 
                      our innovative dynamic support system that simulates natural in utero forces and movement. 
                      The system's adaptive pressure distribution, variable resistance elements, and programmed 
                      motion patterns provided critical mechanical stimulation that promoted proper musculoskeletal 
                      development and physical conditioning throughout Shadow's gestation.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41551-022-00927-w
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
              
              <Link href="/publications/developmental-biology" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Developmental Biology</h3>
                <p className="mb-6 flex-grow">
                  Our research on embryonic development, organogenesis, and physiological maturation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">23 Publications</div>
              </Link>
              
              <Link href="/publications/genetic-restoration" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Genetic Restoration</h3>
                <p className="mb-6 flex-grow">
                  Our techniques for reconstructing, restoring, and validating extinct species genomes.
                </p>
                <div className="text-biotech-teal font-semibold">27 Publications</div>
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
            Discover the advanced cloning technologies that made Shadow's resurrection possible.
          </p>
          <div className="flex justify-center">
            <Link href="/technology/cloning" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore Our Cloning Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 