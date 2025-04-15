"use client";

import React from 'react';
import Link from 'next/link';

export default function Ethics() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Ethical Framework</h1>
          <p className="text-xl max-w-3xl">
            At Yukon Lab, scientific innovation is guided by responsibility and ethical consideration.
            Our comprehensive ethical framework ensures our de-extinction work benefits both science and society.
          </p>
        </div>
      </section>

      {/* Ethics Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Responsible Innovation</h2>
            <p className="text-lg mb-6">
              De-extinction technology represents one of the most powerful scientific capabilities ever developed—the ability to 
              reverse extinction and restore lost biodiversity. With this extraordinary power comes an equally extraordinary 
              responsibility.
            </p>
            <p className="text-lg mb-10">
              Our Ethical Oversight Committee, led by Chief Ethics Officer Dr. James Takahashi, ensures that all research at 
              Yukon Lab adheres to the highest standards of scientific integrity and ethical responsibility. Our framework 
              guides every decision, from which species we select for de-extinction to how we care for cloned specimens 
              and plan for their potential reintroduction.
            </p>
            
            <div className="bg-biotech-blue/10 rounded-xl p-8 mb-10">
              <h3 className="text-2xl font-bold text-biotech-blue mb-4">Our Core Ethical Principles</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1.5 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-biotech-blue mb-1">Animal Welfare First</h4>
                    <p>
                      The welfare of all organisms in our care is our top priority. We maintain the highest standards of care for 
                      our cloned specimens, ensuring their physical, social, and psychological well-being.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1.5 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-biotech-blue mb-1">Ecological Responsibility</h4>
                    <p>
                      We thoroughly assess the potential ecological impact of de-extinction before any work begins, 
                      ensuring that reintroduction would be beneficial to current ecosystems rather than disruptive.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1.5 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-biotech-blue mb-1">Transparency and Accountability</h4>
                    <p>
                      We believe in open science and transparent communication. Our research protocols, ethical frameworks, 
                      and decision-making processes are shared with the scientific community and the public.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1.5 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-biotech-blue mb-1">Societal Benefit</h4>
                    <p>
                      Our work aims to benefit society through increased biodiversity, ecological restoration, 
                      and scientific advancement. We consider the societal implications of our research at every stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/ethics/principles" className="button-primary">
                Learn More About Our Ethical Principles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Species Selection Criteria */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Species Selection Framework</h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Not all extinct species are suitable candidates for de-extinction. Our comprehensive selection framework 
              helps us identify species where resurrection would be beneficial, practical, and ethical.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Selection Criteria */}
              <div className="card">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-6">Selection Criteria</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Ecological Function</h4>
                        <p className="text-sm">Species that played key ecological roles that remain unfilled</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Recent Extinction</h4>
                        <p className="text-sm">Preference for recently extinct species with suitable habitats still available</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">DNA Availability</h4>
                        <p className="text-sm">Sufficient genetic material to reconstruct the genome with high fidelity</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Habitat Viability</h4>
                        <p className="text-sm">Existing habitats where the species could thrive if reintroduced</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Human-Caused Extinction</h4>
                        <p className="text-sm">Priority for species where humans were the primary cause of extinction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Exclusion Criteria */}
              <div className="card">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-biotech-blue mb-6">Exclusion Criteria</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-blue rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Ecological Disruption</h4>
                        <p className="text-sm">Species that could disrupt current ecological balances if reintroduced</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-blue rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Habitat Loss</h4>
                        <p className="text-sm">Species whose natural habitats no longer exist or cannot support them</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-blue rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Disease Vectors</h4>
                        <p className="text-sm">Species that were primary vectors for dangerous diseases</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-blue rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Natural Extinction</h4>
                        <p className="text-sm">Species that became extinct through natural evolutionary processes long ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-biotech-blue rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Welfare Concerns</h4>
                        <p className="text-sm">Species that could not thrive in captivity or managed environments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/ethics/selection-framework" className="button-primary">
                Explore Our Complete Selection Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Oversight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Ethical Oversight</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Committee */}
              <div className="card">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Ethics Committee</h3>
                  <p className="mb-6">
                    Our diverse committee includes bioethicists, ecologists, veterinarians, and community representatives 
                    who review all research protocols and species selection decisions.
                  </p>
                  <Link href="/ethics/committee" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                    Meet Our Committee →
                  </Link>
                </div>
              </div>
              
              {/* Review Process */}
              <div className="card">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">Review Process</h3>
                  <p className="mb-6">
                    Our rigorous ethical review process evaluates research proposals against our ethical framework 
                    before any project begins, with ongoing reviews throughout the research lifecycle.
                  </p>
                  <Link href="/ethics/review-process" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                    Understand Our Process →
                  </Link>
                </div>
              </div>
              
              {/* External Partnerships */}
              <div className="card">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-biotech-teal mb-6 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4">External Partnerships</h3>
                  <p className="mb-6">
                    We collaborate with conservation organizations, indigenous communities, and government agencies 
                    to ensure our work aligns with broader societal and ecological goals.
                  </p>
                  <Link href="/ethics/partnerships" className="text-biotech-blue font-semibold hover:text-biotech-teal transition-colors">
                    Explore Our Partnerships →
                  </Link>
                </div>
              </div>
            </div>
            
            <blockquote className="text-center italic text-lg max-w-3xl mx-auto mb-8">
              "Our ethical framework is not static—it evolves as our understanding of the science, ecology, and societal implications evolves. 
              We remain committed to ongoing ethical inquiry and transparent dialogue with the scientific community and the public."
            </blockquote>
            <p className="text-center text-biotech-blue font-semibold">— Dr. James Takahashi, Chief Ethics Officer</p>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">Community Engagement</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We believe that the ethical implications of de-extinction science extend beyond the laboratory.
            We actively engage with communities, stakeholders, and the public to ensure our work reflects
            diverse perspectives and considerations.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="h-64 bg-yukon-gray rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold text-biotech-blue mb-3">Public Forums & Dialogues</h3>
                <p>
                  We regularly host public forums and participate in community dialogues about the ethical, scientific, 
                  and societal implications of de-extinction. These events provide opportunities for diverse voices 
                  to be heard and considered in our work.
                </p>
              </div>
              
              <div>
                <div className="h-64 bg-yukon-gray rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold text-biotech-blue mb-3">Indigenous Consultation</h3>
                <p>
                  We recognize the importance of indigenous knowledge and perspectives, particularly when considering 
                  species that held cultural significance. Our Indigenous Advisory Council provides guidance on cultural 
                  and traditional ecological considerations.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/ethics/community-engagement" className="button-primary">
                Learn About Our Community Initiatives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Engage With Us</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We welcome dialogue and engagement with researchers, ethicists, conservation organizations,
            and members of the public interested in the ethical dimensions of de-extinction science.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Contact Our Ethics Team
            </Link>
            <Link href="/publications?category=ethics" className="button-secondary border-white text-white hover:bg-white hover:text-biotech-blue">
              Read Our Ethics Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 