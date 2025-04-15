"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EpimodTechnology() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Core Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">EpiMod™ Platform</h1>
            <p className="text-xl max-w-3xl">
              Revolutionary CRISPR-based system for targeted epigenetic modification, ensuring proper gene expression and developmental regulation in de-extinct species.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">Engineering Gene Expression</h2>
                <p className="text-lg mb-6">
                  The EpiMod™ Platform represents a revolutionary breakthrough in epigenetic programming, combining 
                  CRISPR-dCas9 systems with engineered epigenetic modifiers to precisely establish methylation patterns, 
                  histone modifications, and chromatin structure in cloned cells.
                </p>
                <p className="text-lg mb-6">
                  Developed by our epigenetics team led by Dr. Sarah Park and Dr. Lei Chen, this groundbreaking 
                  technology addresses a critical challenge in de-extinction: ensuring proper gene expression and 
                  developmental regulation in species separated from us by tens of thousands of years of evolution.
                </p>
                <div className="bg-yukon-light p-6 rounded-xl">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Precise control of 28,000+ gene regulatory elements</p>
                  </div>
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">93% success rate in establishing proper epigenetic patterns</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Temporal control of epigenetic changes across 42 developmental stages</p>
                  </div>
                </div>
              </div>
              <div className="bg-yukon-gray h-[500px] rounded-xl relative">
                {/* Uncomment when you add your image */}
                <Image 
                  src="/images/tech-epimod-main.png" 
                  alt="EpiMod Platform in action" 
                  fill
                  className="rounded-xl object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">How EpiMod™ Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Epigenetic Mapping</h3>
                  <p className="mb-6">
                    Our machine learning system predicts the optimal epigenetic patterns for extinct species based on 
                    analysis of related modern species, creating detailed maps of required methylation patterns, histone 
                    modifications, and chromatin states.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    92% accuracy in methylation pattern prediction
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Targeted Modification</h3>
                  <p className="mb-6">
                    Our engineered CRISPR-dCas9 systems, equipped with epigenetic modifiers, target specific genomic regions 
                    to precisely establish methylation patterns, modify histones, and remodel chromatin structure to desired states.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Sub-100bp targeting precision across the genome
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Temporal Regulation</h3>
                  <p className="mb-6">
                    Our system implements stage-specific epigenetic changes across development, ensuring proper 
                    gene activation and silencing during critical developmental windows from embryonic to adult stages.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Precise timing control for 42 developmental stages
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-20">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl">
                <h3 className="text-2xl font-bold text-biotech-blue mb-6 text-center">Validation and Results</h3>
                <p className="text-lg mb-6 text-center">
                  EpiMod™ technology has been rigorously validated through extensive testing, demonstrating significant 
                  improvements in developmental outcomes and gene expression patterns across all key stages of Nyra's development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">93%</div>
                    <p className="font-semibold">Correct epigenetic patterns</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">97%</div>
                    <p className="font-semibold">Proper gene expression</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">89%</div>
                    <p className="font-semibold">Developmental milestones met</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Key Innovations</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/crispr-cas9-modifiers.png" 
                    alt="CRISPR-dCas9 epigenetic modifiers" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Engineered Epigenetic Modifiers</h3>
                <p>
                  Our proprietary suite of engineered CRISPR-dCas9 fusion proteins combines catalytically dead Cas9 with 
                  DNA methyltransferases, histone modifiers, and chromatin remodelers to enable precise, targeted 
                  epigenetic editing with unprecedented specificity and efficiency.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/ai-epigenetics.png" 
                    alt="AI-driven epigenetic prediction" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">AI-Driven Epigenetic Prediction</h3>
                <p>
                  Our machine learning system, trained on epigenetic data from 16 modern felid species and developmental 
                  time courses, can accurately predict the optimal epigenetic patterns for extinct species at each 
                  developmental stage, providing the blueprint for our targeted modifications.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/temporal-control.png" 
                    alt="Temporal control system" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Temporal Control System</h3>
                <p>
                  Our revolutionary inducible epigenetic systems enable precise timing of epigenetic modifications, ensuring 
                  that gene expression changes occur at the correct developmental stages. This temporal control is critical 
                  for proper organogenesis, neural development, and physiological maturation.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/epigenome-monitoring.png" 
                    alt="Real-time epigenome monitoring" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Real-Time Epigenome Monitoring</h3>
                <p>
                  Our non-invasive epigenome monitoring system utilizes cell-free DNA analysis and advanced biosensors to 
                  continuously track epigenetic changes in developing embryos, providing real-time feedback that guides 
                  intervention decisions and validates modification outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">EpiMod™ in Action: Nyra's Development</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <p className="text-lg mb-4">
                Reconstructing the genome of <em>Panthera atrox magnus</em> was just the first step in Nyra's resurrection. 
                Equally crucial was ensuring that her genes would be expressed correctly throughout development—a challenge 
                made particularly difficult by the lack of any living reference for her species' epigenetic patterns.
              </p>
              <p className="text-lg">
                Without proper epigenetic programming, even a perfectly reconstructed genome would fail to express genes in the 
                right places, at the right times, and in the right amounts, leading to developmental failures and non-viable embryos.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The EpiMod™ Solution</h3>
              <p className="text-lg mb-6">
                EpiMod™ technology was applied to Nyra's development from the moment of nuclear transfer through each critical 
                developmental stage, ensuring proper epigenetic regulation of her reconstructed genome.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">28,000+</div>
                  <p>Regulatory elements modified</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">42</div>
                  <p>Developmental stages programmed</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">93%</div>
                  <p>Epigenetic accuracy achieved</p>
                </div>
              </div>
              <p className="text-lg">
                Our system established proper DNA methylation patterns, histone modifications, and chromatin structure across 
                Nyra's genome, ensuring that developmental genes activated and silenced at the appropriate times and in the 
                correct cell types, directing her cells to follow their proper developmental trajectories.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">The Results</h3>
              <p className="text-lg mb-6">
                The application of EpiMod™ technology was crucial to Nyra's successful development. Gene expression analysis 
                confirmed proper activation of developmental pathways, while single-cell epigenome profiling validated the 
                establishment of appropriate epigenetic patterns across all major tissue types. These results translated into 
                normal embryonic development, successful organogenesis, and ultimately, a healthy, viable <em>P. atrox magnus</em> cub.
              </p>
              <div className="flex justify-center">
                <Link href="/species/shadow" className="button-primary bg-white text-biotech-blue hover:bg-biotech-cyan hover:text-white">
                  Meet Nyra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Technical Specifications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-biotech-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Specification</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Targeting Precision</td>
                    <td className="px-6 py-4">Sub-100bp resolution<br />98.7% target specificity with minimal off-target effects</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Epigenetic Modifiers</td>
                    <td className="px-6 py-4">14 DNA methyltransferases<br />22 histone modifying enzymes<br />8 chromatin remodeling complexes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Delivery Systems</td>
                    <td className="px-6 py-4">Cell-permeable peptide-conjugated proteins<br />Lipid nanoparticle-encapsulated mRNA<br />AAV-based expression systems</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Temporal Control</td>
                    <td className="px-6 py-4">42-stage developmental program<br />Inducible systems with &lt;1 hour response time<br />Stage-specific gRNA libraries for targeted effects</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Monitoring Systems</td>
                    <td className="px-6 py-4">Cell-free DNA methylation analysis<br />Nanobiosensor arrays for histone modification detection<br />Real-time gene expression monitoring</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">AI System</td>
                    <td className="px-6 py-4">92% accuracy in epigenetic pattern prediction<br />Trained on epigenetic data from 16 modern felid species<br />6.7 million parameters in core prediction model</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Performance</td>
                    <td className="px-6 py-4">93% success rate in establishing target epigenetic patterns<br />97% proper gene expression in modified cells<br />89% developmental milestone achievement rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Our Other Technologies</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            EpiMod™ works seamlessly with our other breakthrough technologies to make de-extinction possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/technology/gene-revive" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              GeneRevive™ Platform
            </Link>
            <Link href="/technology/neomatrix" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              NeoMatrix™ Artificial Womb
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 