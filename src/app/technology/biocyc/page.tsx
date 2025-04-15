"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BioCycTechnology() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">BioCyc™ Technology</h1>
          <p className="text-xl max-w-3xl">
            Our revolutionary biochemical synthesis system for reconstructing extinct species' metabolic pathways and cellular processes.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Advanced Biochemical Synthesis</h2>
            <p className="text-lg mb-6">
              BioCyc™ represents a groundbreaking approach to cellular and metabolic reconstruction, addressing one of the most 
              challenging aspects of de-extinction: recreating the complete biochemical processes of extinct organisms. This 
              technology platform enables us to synthesize and optimize functional biochemical pathways that are crucial for 
              the survival and adaptation of revived species.
            </p>
            
            <div className="my-12">
              <Image 
                src="/images/biocyc-overview.png" 
                alt="BioCyc Technology Overview" 
                width={1000} 
                height={600}
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Metabolic Reconstruction</h3>
                <p>Complete synthesis of essential metabolic pathways for energy production and cellular function</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Enzymatic Engineering</h3>
                <p>Custom designed enzymes that catalyze crucial biochemical reactions within revived organisms</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-2">Adaptive Biochemistry</h3>
                <p>Environmental adaptation systems that optimize cellular responses to modern conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">How BioCyc™ Works</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 mb-10">
              <h3 className="text-2xl font-bold text-biotech-blue mb-6">The BioCyc™ Process</h3>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal text-white text-xl font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-biotech-blue mb-2">Biochemical Inference</h4>
                    <p className="text-gray-700">
                      Using cutting-edge AI algorithms, we analyze the genetic sequence of extinct species to infer their complete 
                      biochemical pathways, including metabolic processes, energy production mechanisms, and cellular regulatory networks.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal text-white text-xl font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-biotech-blue mb-2">Enzyme Synthesis and Optimization</h4>
                    <p className="text-gray-700">
                      We create and optimize custom enzymes that catalyze essential biochemical reactions within revived organisms. 
                      Each enzyme is precision-engineered to function optimally within the specific cellular environment of the target species.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal text-white text-xl font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-biotech-blue mb-2">Metabolic Pathway Integration</h4>
                    <p className="text-gray-700">
                      The synthesized biochemical components are integrated into developing cells, where our proprietary cellular programming 
                      technology ensures proper pathway activation and regulation throughout the organism's development.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal text-white text-xl font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-biotech-blue mb-2">Environmental Adaptation</h4>
                    <p className="text-gray-700">
                      Our adaptive biochemistry systems help organisms adjust to modern environmental conditions, including atmospheric 
                      composition, temperature variations, and available nutrient sources that may differ from their original habitats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-yukon-gray">
                  <Image 
                    src="/images/biocyc-lab.png" 
                    alt="BioCyc Laboratory Setup" 
                    width={600} 
                    height={400}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-biotech-blue mb-3">BioCyc™ Laboratory</h4>
                  <p>
                    Our state-of-the-art BioCyc™ laboratories feature custom-built bioreactors and synthesis chambers 
                    that enable precise control over biochemical reactions and pathway integration.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-yukon-gray">
                  <Image 
                    src="/images/biocyc-results.png" 
                    alt="BioCyc Results Visualization" 
                    width={600} 
                    height={400}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-biotech-blue mb-3">Metabolic Mapping</h4>
                  <p>
                    Advanced visualization tools allow our scientists to monitor and optimize metabolic pathways 
                    in real-time, ensuring complete functional integration within developing organisms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Technical Specifications</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-6">Biochemical Synthesis Capabilities</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Complete Metabolic Pathway Synthesis</span>
                        <p className="text-sm text-gray-600">Full recreation of energy production and cellular maintenance pathways</p>
                      </div>
                    </li>
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Enzyme Design Precision</span>
                        <p className="text-sm text-gray-600">99.8% structural and functional accuracy in synthesized enzymes</p>
                      </div>
                    </li>
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Cellular Integration Rate</span>
                        <p className="text-sm text-gray-600">93% successful pathway integration in developing cells</p>
                      </div>
                    </li>
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Adaptive Response Systems</span>
                        <p className="text-sm text-gray-600">Biochemical adaptation to 87% of modern environmental variables</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-6">System Performance</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Pathway Analysis Speed</span>
                        <p className="text-sm text-gray-600">Complete metabolic inference in 48-72 hours per species</p>
                      </div>
                    </li>
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Enzyme Production Capacity</span>
                        <p className="text-sm text-gray-600">Up to 150 custom enzymes synthesized simultaneously</p>
                      </div>
                    </li>
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Real-time Monitoring Precision</span>
                        <p className="text-sm text-gray-600">Sub-cellular resolution of metabolic activity tracking</p>
                      </div>
                    </li>
                    <li className="flex">
                      <svg className="w-6 h-6 text-biotech-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Species Adaptability</span>
                        <p className="text-sm text-gray-600">Successfully implemented for mammals, birds, and reptiles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Case Studies</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-64 bg-yukon-gray">
                  <Image 
                    src="/images/biocyc-case1.png" 
                    alt="Case Study: Shadowfang Metabolism" 
                    width={600} 
                    height={400}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-biotech-blue mb-3">Case Study: Shadowfang Metabolism</h3>
                  <p className="mb-4">
                    Our BioCyc™ technology was essential in recreating the unique metabolic pathways of the Shadowfang, 
                    particularly its specialized high-efficiency energy production system needed for both sustained hunting 
                    and periods of scarcity.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Key Achievement:</span> Successfully reproduced the species' unique dual-mode 
                    metabolism that allows for both explosive energy output and exceptional energy conservation.
                  </p>
                  <Link href="/species/shadow" className="text-biotech-teal font-semibold hover:underline">
                    Learn more about the Shadowfang
                  </Link>
                </div>
              </div>
              
              <div className="card hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-64 bg-yukon-gray">
                  <Image 
                    src="/images/biocyc-case2.png" 
                    alt="Case Study: Arctic Adaptation" 
                    width={600} 
                    height={400}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-biotech-blue mb-3">Case Study: Arctic Adaptation</h3>
                  <p className="mb-4">
                    For our arctic species revival projects, BioCyc™ was instrumental in reconstructing cold-temperature 
                    adaptations at the cellular level, including specialized enzymes that function optimally at lower temperatures.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Key Achievement:</span> Development of metabolic adaptation protocols that enable 
                    extinct arctic species to thrive in today's warming climate conditions.
                  </p>
                  <Link href="/research/climate-adaptation" className="text-biotech-teal font-semibold hover:underline">
                    Explore our climate adaptation research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Related Research Publications</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Our groundbreaking work with BioCyc™ technology has been documented in numerous peer-reviewed publications.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-biotech-blue mb-2">
                  "Complete Metabolic Reconstruction of Extinct Carnivores: Challenges and Solutions"
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Journal of Synthetic Biology, 2023. Authors: Dr. Helena Chen, Dr. Marcus Reeves, Dr. Emily Zhao
                </p>
                <p className="mb-4">
                  Comprehensive overview of BioCyc™ technology applications in reconstructing complete metabolic pathways for extinct predator species.
                </p>
                <Link href="/publications/metabolic-reconstruction" className="text-biotech-teal font-semibold hover:underline">
                  Read the full paper
                </Link>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-biotech-blue mb-2">
                  "Adaptive Biochemistry in De-Extinct Species: Environmental Challenges and Solutions"
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Nature Biotechnology, 2023. Authors: Dr. James Wong, Dr. Sarah Peterson, Dr. Raj Patel
                </p>
                <p className="mb-4">
                  Detailed analysis of how BioCyc™ adaptive biochemistry systems help revived species cope with modern environmental conditions.
                </p>
                <Link href="/publications/adaptive-biochemistry" className="text-biotech-teal font-semibold hover:underline">
                  Read the full paper
                </Link>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-biotech-blue mb-2">
                  "Enzyme Design and Optimization for Extinct Species Revival: The BioCyc™ Approach"
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Cellular Engineering Today, 2022. Authors: Dr. Alan Freeman, Dr. Natasha Kim, Dr. Carlos Rodriguez
                </p>
                <p className="mb-4">
                  Technical exploration of enzyme design methodologies employed in the BioCyc™ platform for optimal cellular function.
                </p>
                <Link href="/publications/enzyme-design" className="text-biotech-teal font-semibold hover:underline">
                  Read the full paper
                </Link>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/publications" className="button-primary">
                View All Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Our BioCyc™ Technology?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact our team to learn more about BioCyc™ applications, research collaborations, or licensing opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="button-primary bg-white text-biotech-blue hover:bg-biotech-teal hover:text-white">
              Contact Our Team
            </Link>
            <Link href="/research" className="button-secondary">
              Explore Our Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 