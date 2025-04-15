"use client";

import React from 'react';
import Link from 'next/link';

export default function ConservationPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conservation Publications</h1>
            <p className="text-xl max-w-3xl">
              Innovative research on applying de-extinction technologies to endangered species conservation.
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
                While the resurrection of extinct species captures headlines, our conservation research focuses on 
                how Yukon Lab's breakthrough technologies can help prevent extinctions before they occur. Our team is 
                developing applications of our genetic, cloning, and developmental technologies to protect Earth's 
                most endangered species.
              </p>
              <p className="text-lg">
                This collection features 11 peer-reviewed publications detailing our innovations in genetic rescue, 
                reproductive technology, and artificial breeding environments that offer new tools for conservation 
                biologists working with critically endangered species.
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
                      De-Extinction Technologies for Conservation: The GeneRevive™ Platform in Endangered Species Rescue
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Conservation Biology, 2023</p>
                    <p className="mb-4">
                      Volkov E., Chen L., Werner J., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This landmark paper outlines how our GeneRevive™ platform can be repurposed for genetic rescue of 
                      endangered species with severely reduced genetic diversity. We present case studies of the Amur leopard 
                      and Sumatran rhino, demonstrating how reconstruction of genetic diversity from preserved specimens and 
                      museum samples can mitigate inbreeding depression and restore adaptive potential.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1111/cobi.14089
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
                      NeoMatrix™ Applications for Ex Situ Breeding of Critically Endangered Felids
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Endangered Species Research, 2022</p>
                    <p className="mb-4">
                      Reynolds M., Kingsley S., Garcia R., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This study presents a modified version of our NeoMatrix™ artificial womb technology adapted for 
                      endangered felid reproduction. Our system overcomes breeding challenges in species like the Iberian lynx 
                      and Asiatic cheetah by enabling embryo development without the need for surrogate mothers from limited 
                      breeding populations, dramatically increasing reproductive potential and success rates.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.3354/esr01232
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
                      Targeted Gene Editing for Adaptive Trait Enhancement in Endangered Species
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">PNAS, 2023</p>
                    <p className="mb-4">
                      Chen L., Werner J., Park S., Garcia R., et al.
                    </p>
                    <p className="mb-4">
                      This paper presents our framework for selective enhancement of adaptive traits in endangered species 
                      facing rapid environmental challenges. We demonstrate how precise CRISPR-based editing of key regulatory 
                      regions, guided by our EpiMod™ technology, can enhance thermal tolerance in corals and disease resistance 
                      in amphibians without compromising genetic integrity or introducing foreign DNA.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1073/pnas.2302158120
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
                      Cryopreservation and Biobanking Advancements for Endangered Species Genetic Material
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Cryobiology, 2022</p>
                    <p className="mb-4">
                      Garcia R., Chen L., Reynolds M., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This publication presents our novel approaches to genetic material preservation for endangered species. 
                      The methods developed for our ancient DNA work have been adapted to maximize recovery and viability of 
                      genetic material from small, non-invasive samples. Our techniques achieve 3-5x higher cell viability 
                      after thawing compared to conventional methods, significantly enhancing biobanking efforts worldwide.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.cryobiol.2022.08.011
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
                      Embryonic Stem Cell Technologies for Northern White Rhino Revival
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Scientific Reports, 2024</p>
                    <p className="mb-4">
                      Werner J., Kingsley S., Chen L., Park S., et al.
                    </p>
                    <p className="mb-4">
                      This collaborative study with the Leibniz Institute for Zoo and Wildlife Research presents our 
                      contribution to Northern White Rhino conservation efforts. We demonstrate successful derivation of 
                      embryonic stem cells from preserved cell lines, application of our epigenetic programming techniques, 
                      and successful development of embryos using our modified NeoMatrix™ system, creating a viable path 
                      to reestablish a breeding population.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41598-024-50183-0
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
              <Link href="/publications/animal-welfare" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Animal Welfare</h3>
                <p className="mb-6 flex-grow">
                  Our protocols for optimal care, enrichment, and well-being of de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">9 Publications</div>
              </Link>
              
              <Link href="/publications/epigenetic-programming" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Epigenetic Programming</h3>
                <p className="mb-6 flex-grow">
                  Our methods for ensuring proper gene expression and developmental regulation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">19 Publications</div>
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
          <h2 className="text-3xl font-bold mb-6">Support Our Conservation Initiatives</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Learn how you can help us apply de-extinction technologies to protect endangered species.
          </p>
          <div className="flex justify-center">
            <Link href="/initiatives/conservation" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Join Our Efforts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 