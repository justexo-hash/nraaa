"use client";

import React from 'react';
import Link from 'next/link';

export default function EpigeneticProgrammingPublications() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Research Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Epigenetic Programming Publications</h1>
            <p className="text-xl max-w-3xl">
              Revolutionary methods for ensuring proper gene expression and developmental regulation in de-extinct species.
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
                Epigenetic programming represents a critical bridge between genetic reconstruction and functional biology. 
                Through our pioneering EpiMod™ technology, we've developed methods to accurately recreate the epigenetic 
                markers and chromatin structure essential for proper development and gene expression in de-extinct species.
              </p>
              <p className="text-lg">
                This collection features 19 peer-reviewed publications detailing our approaches to methylation patterning, 
                histone modification, chromatin remodeling, and regulatory network reconstruction for extinct species genomes.
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
                      Predictive Modeling of Extinct Species Methylation Patterns Using Modern Relatives
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Nature Genetics, 2022</p>
                    <p className="mb-4">
                      Reynolds M., Park S., Zhang H., Werner J., et al.
                    </p>
                    <p className="mb-4">
                      This foundational paper introduces our computational framework for predicting methylation patterns in extinct species. 
                      By analyzing the methylomes of 16 modern felid species, we developed machine learning algorithms that can predict 
                      with 92% accuracy the methylation patterns of extinct felids based on their reconstructed genomes and phylogenetic 
                      relationships.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1038/s41588-022-1073-8
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
                      EpiMod™: A CRISPR-Based System for Targeted Epigenetic Modification in De-Extinction
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Cell, 2023</p>
                    <p className="mb-4">
                      Park S., Reynolds M., Chen L., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This publication details our revolutionary EpiMod™ technology, which combines CRISPR-dCas9 systems with 
                      engineered epigenetic modifiers to precisely establish methylation patterns, histone modifications, and 
                      chromatin structure in cloned cells containing reconstructed ancient genomes. The system enabled the 
                      successful activation of developmentally critical genes in <em>P. atrox magnus</em> embryonic cells.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.cell.2023.02.014
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
                      Developmental Regulation Through Epigenetic Reprogramming in <em>Panthera atrox magnus</em>
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Developmental Cell, 2022</p>
                    <p className="mb-4">
                      Chen L., Park S., Reynolds M., Takahashi J., et al.
                    </p>
                    <p className="mb-4">
                      This study documents our successful implementation of stage-specific epigenetic reprogramming during 
                      Shadow's embryonic development. We present evidence that temporal control of epigenetic modifications 
                      is essential for proper organogenesis and development, particularly for genes involved in neural crest 
                      formation, muscle development, and craniofacial morphogenesis.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1016/j.devcel.2022.09.008
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
                      Reconstructing Chromatin Accessibility Patterns in Ancient DNA Using Machine Learning
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Genome Research, 2021</p>
                    <p className="mb-4">
                      Reynolds M., Park S., Zhang H., Lee K., et al.
                    </p>
                    <p className="mb-4">
                      This paper presents our novel approach to predicting chromatin accessibility in extinct species. 
                      We developed a deep learning model trained on ATAC-seq and DNase-seq data from multiple modern felid 
                      species that can accurately predict open chromatin regions and transcription factor binding sites in 
                      reconstructed ancient genomes, enabling proper temporal gene activation during development.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1101/gr.276571.121
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
                      Single-Cell Analysis of Epigenetic Heterogeneity in De-Extinct Species Embryogenesis
                    </h3>
                    <p className="text-biotech-teal font-semibold mb-2">Science, 2023</p>
                    <p className="mb-4">
                      Park S., Chen L., Reynolds M., Zhang H., et al.
                    </p>
                    <p className="mb-4">
                      This groundbreaking study employs single-cell multi-omics to analyze the epigenetic landscape during Shadow's 
                      early embryonic development. We identified critical heterogeneity in epigenetic markers across different cell 
                      lineages and developed targeted interventions to correct aberrant patterns, resulting in dramatically improved 
                      developmental outcomes for embryos derived from reconstructed ancient genomes.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                        DOI: 10.1126/science.adg5729
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
              <Link href="/publications/genetic-reconstruction" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Genetic Reconstruction</h3>
                <p className="mb-6 flex-grow">
                  Our methodologies for recovering and reconstructing complete genomes from ancient DNA sources.
                </p>
                <div className="text-biotech-teal font-semibold">27 Publications</div>
              </Link>
              
              <Link href="/publications/cloning-technologies" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Cloning Technologies</h3>
                <p className="mb-6 flex-grow">
                  Our groundbreaking approaches to somatic cell nuclear transfer and artificial womb development.
                </p>
                <div className="text-biotech-teal font-semibold">32 Publications</div>
              </Link>
              
              <Link href="/publications/developmental-biology" className="card hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Developmental Biology</h3>
                <p className="mb-6 flex-grow">
                  Our studies on embryonic development, organogenesis, and physiological maturation in de-extinct species.
                </p>
                <div className="text-biotech-teal font-semibold">23 Publications</div>
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
            Discover how our EpiMod™ platform enables precise epigenetic programming for de-extinction.
          </p>
          <div className="flex justify-center">
            <Link href="/technology/epimod" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore EpiMod™ Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 