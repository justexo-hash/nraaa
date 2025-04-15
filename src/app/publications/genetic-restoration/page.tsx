"use client";

import React from 'react';
import Link from 'next/link';

export default function GeneticRestorationPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Genetic Restoration Publications</h1>
            <p className="text-xl max-w-3xl">
              Breakthrough techniques for reconstructing, restoring, and validating extinct species genomes.
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
                Genetic restoration represents the foundation of our de-extinction process at Yukon Lab. Through our 
                proprietary GeneRevive™ platform, we've pioneered techniques to recover, reconstruct, and validate 
                complete functional genomes from highly degraded ancient DNA samples.
              </p>
              <p className="text-lg">
                This collection features 27 peer-reviewed publications detailing our revolutionary approaches to DNA 
                recovery, genome assembly, genetic gap-filling, and functional validation that enabled the successful 
                resurrection of <em>Panthera atrox magnus</em>.
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
                      GeneRevive™: A Comprehensive Platform for Ancient DNA Restoration and Functional Reconstruction
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature, 2022</p>
                    <p className="mb-4">
                      Volkov E., Chen L., Werner J., Kim J., et al.
                    </p>
                    <p className="mb-4">
                      This landmark paper introduces our GeneRevive™ platform, the world's most advanced system for ancient 
                      genome restoration. We present the integrated computational, biochemical, and synthetic biology 
                      techniques that enable unprecedented recovery of genetic information from degraded samples, achieving 
                      99.7% accuracy in reconstructed sequences from samples up to 150,000 years old.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41586-022-05016-1
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
                      Quantum-Enhanced Algorithms for Ancient DNA Sequence Assembly
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">PNAS, 2021</p>
                    <p className="mb-4">
                      Kim J., Chen L., Werner J., Garcia R., et al.
                    </p>
                    <p className="mb-4">
                      This groundbreaking study details our quantum computing approach to ancient DNA assembly. By utilizing 
                      quantum algorithms to simultaneously evaluate millions of possible sequence alignments, we achieved a 
                      15-fold improvement in assembly speed and a 43% increase in sequence coverage compared to traditional 
                      methods, enabling the complete reconstruction of the <em>P. atrox magnus</em> genome.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1073/pnas.2103128118
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
                      NanoExtract™: Advanced Techniques for Ultra-Trace Ancient DNA Recovery
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science, 2020</p>
                    <p className="mb-4">
                      Werner J., Chen L., Reynolds M., Garcia R., et al.
                    </p>
                    <p className="mb-4">
                      This paper presents our revolutionary NanoExtract™ technology for ancient DNA recovery. Using carbon 
                      nanotube extraction probes and proprietary buffer formulations, we achieved a 10-fold increase in DNA 
                      yield from permafrost-preserved <em>P. atrox magnus</em> specimens compared to conventional methods, 
                      providing the critical genetic material foundation for Shadow's genome reconstruction.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/science.abd5218
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
                      Predictive Genomics: AI-Driven Inference of Missing Genetic Sequences in Extinct Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Cell, 2021</p>
                    <p className="mb-4">
                      Chen L., Kim J., Werner J., Reynolds M., et al.
                    </p>
                    <p className="mb-4">
                      This publication details our machine learning approach to predicting missing genetic sequences in ancient 
                      genomes. Trained on complete genomes from 15,000+ modern species, our deep learning system accurately 
                      predicts genetic sequences with 97.9% accuracy based on evolutionary relationships and fundamental genetic 
                      principles, enabling the completion of shadow's genome despite significant gaps in recovered DNA.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.cell.2021.05.035
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
                      Functional Validation of Reconstructed Ancient Genomes through Cellular Assays
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Biotechnology, 2022</p>
                    <p className="mb-4">
                      Reynolds M., Chen L., Park S., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive study presents our methodology for validating reconstructed ancient genomes through 
                      cellular functional assays. We developed a suite of 27 validation checkpoints and 500+ functional tests 
                      that evaluate gene expression, protein function, cellular energetics, and developmental potential, ensuring 
                      that Shadow's reconstructed genome would support viable cellular function before proceeding to cloning.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41587-022-01306-1
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
                <a href="#" className="px-4 py-2 border border-gray-300 border-l-0 hover:bg-yukon-light transition-colors">5</a>
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
              <Link href="/publications/cloning-technologies" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Cloning Technologies</h3>
                <p className="mb-6 flex-grow">
                  Our groundbreaking approaches to somatic cell nuclear transfer and artificial womb development.
                </p>
                <div className="text-biotech-teal font-semibold">32 Publications</div>
              </Link>
              
              <Link href="/publications/epigenetic-programming" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Epigenetic Programming</h3>
                <p className="mb-6 flex-grow">
                  Our methods for ensuring proper gene expression and developmental regulation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">19 Publications</div>
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
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Technology</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Discover how our GeneRevive™ platform enables unprecedented recovery and reconstruction of ancient genomes.
          </p>
          <div className="flex justify-center">
            <Link href="/technology/gene-revive" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore GeneRevive™ Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 