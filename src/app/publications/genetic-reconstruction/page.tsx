"use client";

import React from 'react';
import Link from 'next/link';

export default function GeneticReconstructionPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Genetic Reconstruction Publications</h1>
            <p className="text-xl max-w-3xl">
              Our groundbreaking methodologies for recovering, analyzing, and reconstructing complete genomes from ancient DNA.
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
                Genetic reconstruction is the foundation of our de-extinction program at Yukon Lab. Our revolutionary 
                techniques have enabled the complete genomic reconstruction of <em>Panthera atrox magnus</em> and other 
                extinct species from fragmentary ancient DNA sources.
              </p>
              <p className="text-lg">
                This collection includes 27 peer-reviewed publications on our innovative DNA recovery methods, 
                computational algorithms for genome assembly, genetic gap-filling techniques, and genomic validation 
                protocols that have made Shadow's existence possible.
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
                      Complete Genomic Reconstruction of <em>Panthera atrox magnus</em> from Fragmented Pleistocene Samples
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature, 2021</p>
                    <p className="mb-4">
                      Volkov E., Werner J., Kim J., Patel S., et al.
                    </p>
                    <p className="mb-4">
                      This landmark publication details the first complete genomic reconstruction of <em>Panthera atrox magnus</em> 
                      from multiple Pleistocene specimens. We present our revolutionary GapFill™ technology that enabled the completion 
                      of genetic sequences with unprecedented accuracy, resulting in a 99.4% reliable genome suitable for de-extinction.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41586-021-03761-3
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
                      GenoFlex™: A Novel Algorithm for Prediction and Reconstruction of Degraded DNA Sequences
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Genome Research, 2020</p>
                    <p className="mb-4">
                      Kim J., Chen L., Werner J., Patel S., et al.
                    </p>
                    <p className="mb-4">
                      This paper introduces our GenoFlex™ algorithm, which utilizes machine learning trained on extant big cat genomic data 
                      to predict missing genetic sequences in ancient DNA samples. The system achieves 97.8% accuracy in reconstructing 
                      complete genes from fragments as small as 18 base pairs.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1101/gr.268920.120
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
                      Ultradeep Sequencing Method for Permafrost-Preserved Ancient DNA
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science, 2019</p>
                    <p className="mb-4">
                      Werner J., Volkov E., Patel S., García R., et al.
                    </p>
                    <p className="mb-4">
                      This study presents our revolutionary DNA extraction and sequencing methodology that achieves 50× higher 
                      yield from permafrost-preserved tissues than conventional methods. The technique's application to the 
                      Dawson Yukon specimens provided the foundational genetic material for Shadow's genome reconstruction.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/science.aav7352
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
                      Comparative Genomics of <em>Panthera</em> Species: Evolutionary Insights for De-Extinction
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">PNAS, 2021</p>
                    <p className="mb-4">
                      Chen L., Takahashi J., Kim J., García R., et al.
                    </p>
                    <p className="mb-4">
                      This comprehensive analysis compares the genomic structures of extant big cats with our reconstructed 
                      <em>P. atrox magnus</em> genome. We identify key genetic markers that differentiate the American lion from modern 
                      lions and tigers, including genes related to size, musculature, and cold adaptation that guided our 
                      reconstruction efforts.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1073/pnas.2026158118
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
                      Validation of Reconstructed Ancient Genomes: Error Detection and Correction Methods
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Biotechnology and Bioengineering, 2022</p>
                    <p className="mb-4">
                      Patel S., Volkov E., Kim J., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This publication details our rigorous methodology for validating reconstructed ancient genomes, including our 
                      innovative synteny mapping and functional verification protocols. We present case studies from the Shadow project, 
                      demonstrating how potential genomic errors were identified and corrected before cloning attempts.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1002/bit.28193
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
                  Our techniques for ensuring proper gene expression and developmental patterns in cloned extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">19 Publications</div>
              </Link>
              
              <Link href="/publications/cloning-technologies" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Cloning Technologies</h3>
                <p className="mb-6 flex-grow">
                  Our breakthroughs in artificial womb technology and embryonic development for extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">32 Publications</div>
              </Link>
              
              <Link href="/publications/ancient-dna" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Ancient DNA Analysis</h3>
                <p className="mb-6 flex-grow">
                  Novel methods for extraction, preservation, and analysis of DNA from Pleistocene specimens.
                </p>
                <div className="text-biotech-teal font-semibold">24 Publications</div>
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
            Discover how our genomic reconstruction methods power the BioMatrix™ platform.
          </p>
          <div className="flex justify-center">
            <Link href="/technology/biomatrix" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore BioMatrix™ Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 