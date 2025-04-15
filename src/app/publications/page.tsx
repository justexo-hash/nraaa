"use client";

import React from 'react';
import Link from 'next/link';

export default function Publications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Scientific Publications</h1>
          <p className="text-xl max-w-3xl">
            Our groundbreaking research in genetic engineering, cloning technology, and de-extinction science,
            published in the world's leading peer-reviewed journals.
          </p>
        </div>
      </section>

      {/* Publications Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Advancing Scientific Knowledge</h2>
            <p className="text-lg mb-6">
              At Yukon Lab, we believe in contributing to the global scientific community through rigorous research
              and transparent sharing of our findings. Our team regularly publishes in top-tier peer-reviewed journals,
              pushing forward the frontiers of genetic science and biotechnology.
            </p>
            <p className="text-lg mb-6">
              Our publications span several key research areas, from genomic reconstruction and cloning technologies
              to artificial embryonic development and epigenetic programming. Below you'll find our most significant
              contributions to the scientific literature.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mt-12 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-biotech-blue mb-2">87+</div>
                <p>Peer-Reviewed Publications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-biotech-blue mb-2">12</div>
                <p>Patent Applications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-biotech-blue mb-2">28</div>
                <p>Research Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Featured Research</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Publication 1 */}
              <div className="card hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-yukon-gray rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-biotech-blue mb-2">
                      Complete Genome Reconstruction of <em>Panthera atrox magnus</em> from Fragmentary Pleistocene Remains
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Genetics, 2023</p>
                    <p className="mb-4">
                      Volkov E., Chen M., Patel S., Zhang H., Takahashi J., et al.
                    </p>
                    <p className="mb-6">
                      This landmark paper presents our methodology for reconstructing the complete genome of the prehistoric mega-cat
                      (Shadow) from highly fragmented DNA samples recovered from permafrost specimens. We detail our novel computational
                      approach that achieved unprecedented 99.7% accuracy in genomic reconstruction, setting the foundation for successful cloning.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41588-023-1287-4
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
                      BioMatrix: An Artificial Womb System for Ex-Vivo Development of Cloned Mammalian Embryos
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science, 2024</p>
                    <p className="mb-4">
                      Patel S., Takahashi J., Chen M., García R., Volkov E., et al.
                    </p>
                    <p className="mb-6">
                      This publication introduces our revolutionary artificial womb technology, the BioMatrix™ system. We describe its
                      design, functionality, and unprecedented 87% success rate in bringing cloned embryos to term without the need
                      for surrogate mothers—a breakthrough that overcomes a major obstacle in de-extinction science.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/science.adh7842
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
                      Epigenetic Reprogramming in De-Extinction: Solving the Telomere Problem in Cloned Organisms
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Cell, 2024</p>
                    <p className="mb-4">
                      Chen M., Volkov E., Zhang H., Patel S., Lee K., et al.
                    </p>
                    <p className="mb-6">
                      This study presents our EpiGen™ Controller technology and its application in solving one of cloning's most
                      persistent challenges: telomere shortening and associated health issues. We demonstrate normal telomere
                      length and projected lifespans in our cloned specimens, a critical advancement for viable de-extinction.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.cell.2024.02.009
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
            
            <div className="mt-12 text-center">
              <Link href="/publications/featured" className="button-primary">
                View All Featured Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Research Categories</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Genetic Reconstruction</h3>
                  <p className="mb-6">
                    Our research on recovering, sequencing, and reconstructing genomes from ancient and degraded DNA samples, 
                    including our GeneRevive™ platform and computational methodologies.
                  </p>
                  <div className="flex justify-between text-biotech-teal font-semibold">
                    <span>27 Publications</span>
                    <Link href="/publications/genetic-reconstruction" className="hover:text-biotech-blue transition-colors">
                      Browse →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Cloning Technologies</h3>
                  <p className="mb-6">
                    Our breakthroughs in artificial womb technology, embryonic development, and the challenges of cloning extinct 
                    species without genetic material from living relatives.
                  </p>
                  <div className="flex justify-between text-biotech-teal font-semibold">
                    <span>32 Publications</span>
                    <Link href="/publications/cloning-technologies" className="hover:text-biotech-blue transition-colors">
                      Browse →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Category 3 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Epigenetic Programming</h3>
                  <p className="mb-6">
                    Our research on controlling gene expression in cloned organisms, ensuring proper development and avoiding the 
                    health issues common in early cloning attempts.
                  </p>
                  <div className="flex justify-between text-biotech-teal font-semibold">
                    <span>19 Publications</span>
                    <Link href="/publications/epigenetic-programming" className="hover:text-biotech-blue transition-colors">
                      Browse →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Category 4 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Behavioral Development</h3>
                  <p className="mb-6">
                    Our studies on behavioral patterns and development in cloned specimens, including our NeuroMap™ technology 
                    for ensuring proper neural pathway formation.
                  </p>
                  <div className="flex justify-between text-biotech-teal font-semibold">
                    <span>13 Publications</span>
                    <Link href="/publications/behavioral-development" className="hover:text-biotech-blue transition-colors">
                      Browse →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Category 5 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Conservation Applications</h3>
                  <p className="mb-6">
                    Our research on applying de-extinction technologies to endangered species conservation, including genetic 
                    diversity restoration in threatened populations.
                  </p>
                  <div className="flex justify-between text-biotech-teal font-semibold">
                    <span>15 Publications</span>
                    <Link href="/publications/conservation-applications" className="hover:text-biotech-blue transition-colors">
                      Browse →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Category 6 */}
              <div className="card hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Ethical Considerations</h3>
                  <p className="mb-6">
                    Our papers addressing the ethical implications and considerations of de-extinction science, including 
                    our framework for responsible research and species selection.
                  </p>
                  <div className="flex justify-between text-biotech-teal font-semibold">
                    <span>11 Publications</span>
                    <Link href="/publications/ethical-considerations" className="hover:text-biotech-blue transition-colors">
                      Browse →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Archive */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">Publication Archive</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Browse our complete archive of scientific publications, organized by year of publication.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-biotech-blue mb-6">2024</h3>
                <div className="space-y-4">
                  <div className="p-4 hover:bg-white transition-colors rounded-lg">
                    <Link href="/publications/2024/biomatrix-womb" className="text-lg font-semibold text-biotech-blue hover:text-biotech-teal transition-colors">
                      BioMatrix: An Artificial Womb System for Ex-Vivo Development of Cloned Mammalian Embryos
                    </Link>
                    <p className="text-biotech-teal">Science, March 2024</p>
                  </div>
                  <div className="p-4 hover:bg-white transition-colors rounded-lg">
                    <Link href="/publications/2024/epigenetic-reprogramming" className="text-lg font-semibold text-biotech-blue hover:text-biotech-teal transition-colors">
                      Epigenetic Reprogramming in De-Extinction: Solving the Telomere Problem
                    </Link>
                    <p className="text-biotech-teal">Cell, February 2024</p>
                  </div>
                  <div className="p-4 hover:bg-white transition-colors rounded-lg">
                    <Link href="/publications/2024/immune-system-development" className="text-lg font-semibold text-biotech-blue hover:text-biotech-teal transition-colors">
                      Immune System Development in Cloned Prehistoric Felines
                    </Link>
                    <p className="text-biotech-teal">Immunology, January 2024</p>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="/publications/2024" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                      View all 2024 publications →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-biotech-blue mb-6">2023</h3>
                <div className="space-y-4">
                  <div className="p-4 hover:bg-white transition-colors rounded-lg">
                    <Link href="/publications/2023/complete-genome-reconstruction" className="text-lg font-semibold text-biotech-blue hover:text-biotech-teal transition-colors">
                      Complete Genome Reconstruction of Panthera atrox magnus from Fragmentary Pleistocene Remains
                    </Link>
                    <p className="text-biotech-teal">Nature Genetics, December 2023</p>
                  </div>
                  <div className="p-4 hover:bg-white transition-colors rounded-lg">
                    <Link href="/publications/2023/neural-development" className="text-lg font-semibold text-biotech-blue hover:text-biotech-teal transition-colors">
                      Neural Development Pathways in Cloned Prehistoric Predators
                    </Link>
                    <p className="text-biotech-teal">Neuroscience, October 2023</p>
                  </div>
                  <div className="p-4 hover:bg-white transition-colors rounded-lg">
                    <Link href="/publications/2023/artificial-placenta" className="text-lg font-semibold text-biotech-blue hover:text-biotech-teal transition-colors">
                      Artificial Placenta Design for Optimal Nutrient Delivery in Cloned Embryos
                    </Link>
                    <p className="text-biotech-teal">Biotechnology, July 2023</p>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="/publications/2023" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                      View all 2023 publications →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/publications/archive" className="button-secondary">
                View Complete Publication Archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Research Resources</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            In addition to our publications, we provide these resources to the scientific community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/resources/genome-database" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl transition-colors">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ancient Genome Database</h3>
              <p>Access our repository of reconstructed genomes from extinct species</p>
            </Link>
            
            <Link href="/resources/research-protocols" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl transition-colors">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Research Protocols</h3>
              <p>Detailed methodologies and protocols from our published research</p>
            </Link>
            
            <Link href="/resources/educational-materials" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl transition-colors">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Educational Materials</h3>
              <p>Resources for educators and students interested in genetic science</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 