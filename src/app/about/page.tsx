"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Yukon Lab</h1>
          <p className="text-xl max-w-3xl">
            Pioneering the frontiers of genetic engineering and bio-cloning technology to restore lost species 
            and revolutionize our understanding of life itself.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our Story</h2>
            <div className="space-y-6 text-lg">
              <p>
                Founded in 2015 by Dr. Elena Volkov and Dr. Marcus Chen, Yukon Lab began with a simple yet audacious vision: 
                to develop the technology capable of bringing extinct species back to life. Located in the pristine wilderness 
                of Canada's Yukon Territory, our facilities were designed from the ground up to house the most advanced 
                genetic research equipment in the world.
              </p>
              <p>
                After years of groundbreaking research in genomic reconstruction, our team achieved what many thought impossible: 
                the successful revival of several extinct plant species in 2020. Building on this foundation, we expanded our 
                focus to more complex organisms, culminating in our crowning achievement—the successful cloning of Shadow, 
                a prehistoric mega-cat that once dominated the ancient forests of North America.
              </p>
              <p>
                Today, Yukon Lab stands at the forefront of de-extinction science, employing over 200 of the world's brightest 
                minds in genetics, molecular biology, and biotechnology. Our commitment to ethical research and responsible 
                innovation guides every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our Mission</h2>
            <div className="space-y-6 text-lg">
              <p>
                At Yukon Lab, our mission extends beyond scientific advancement for its own sake. We believe in the power of 
                genetic technology to heal the wounds inflicted on our planet's biodiversity through human activity and 
                natural disasters.
              </p>
              <p>
                We are guided by three core principles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="card">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-biotech-blue">Ethical Innovation</h3>
                  <p>
                    We conduct our research with the highest ethical standards, ensuring the well-being of all organisms 
                    involved in our studies.
                  </p>
                </div>
                <div className="card">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-biotech-blue">Biodiversity Restoration</h3>
                  <p>
                    We aim to repair damaged ecosystems by reintroducing extinct species that played key roles 
                    in their biological communities.
                  </p>
                </div>
                <div className="card">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-biotech-teal mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-biotech-blue">Scientific Knowledge</h3>
                  <p>
                    We advance human understanding of genetics, evolution, and biology through our research, sharing 
                    discoveries with the global scientific community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-64 bg-yukon-gray rounded-lg mb-4 mx-auto">
                <Image 
                  src="/images/team-elena.png" 
                  alt="Dr. Elena Volkov" 
                  width={400} 
                  height={500}
                  className="h-64 w-full object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-biotech-blue">Dr. Elena Volkov</h3>
              <p className="text-biotech-teal font-semibold mb-2">Co-Founder & CEO</p>
              <p className="text-sm">Pioneering geneticist with over 20 years of experience in genomic research.</p>
            </div>
            <div className="text-center">
              <div className="h-64 bg-yukon-gray rounded-lg mb-4 mx-auto">
                <Image 
                  src="/images/team-marcus.png" 
                  alt="Dr. Marcus Chen" 
                  width={400} 
                  height={500}
                  className="h-64 w-full object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-biotech-blue">Dr. Marcus Chen</h3>
              <p className="text-biotech-teal font-semibold mb-2">Co-Founder & Chief Scientist</p>
              <p className="text-sm">Molecular biologist and former professor at MIT, specializing in genetic reconstruction.</p>
            </div>
            <div className="text-center">
              <div className="h-64 bg-yukon-gray rounded-lg mb-4 mx-auto">
                <Image 
                  src="/images/team-sophia.png" 
                  alt="Dr. Sophia Patel" 
                  width={400} 
                  height={500}
                  className="h-64 w-full object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-biotech-blue">Dr. Sophia Patel</h3>
              <p className="text-biotech-teal font-semibold mb-2">Director of Cloning Research</p>
              <p className="text-sm">Leading authority on embryonic development in cloned mammals.</p>
            </div>
            <div className="text-center">
              <div className="h-64 bg-yukon-gray rounded-lg mb-4 mx-auto">
                <Image 
                  src="/images/team-james.png" 
                  alt="Dr. James Takahashi" 
                  width={400} 
                  height={500}
                  className="h-64 w-full object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-biotech-blue">Dr. James Takahashi</h3>
              <p className="text-biotech-teal font-semibold mb-2">Chief Ethics Officer</p>
              <p className="text-sm">Bioethicist ensuring all research adheres to the highest ethical standards.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="h-80 bg-yukon-gray rounded-lg mb-6">
                <Image 
                  src="/images/lab-interior.png" 
                  alt="State-of-the-Art Laboratory Complex" 
                  width={800} 
                  height={600}
                  className="h-80 w-full object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-biotech-blue mb-3">State-of-the-Art Laboratory Complex</h3>
              <p>
                Our main laboratory spans 120,000 square feet of cutting-edge research space, housing the world's most 
                advanced genetic sequencing and synthesis equipment, embryonic development chambers, and bio-containment facilities.
              </p>
            </div>
            <div>
              <div className="h-80 bg-yukon-gray rounded-lg mb-6">
                <Image 
                  src="/images/shadow-habitat.png" 
                  alt="Habitat Recreation Center" 
                  width={800} 
                  height={600}
                  className="h-80 w-full object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-biotech-blue mb-3">Habitat Recreation Center</h3>
              <p>
                Our 500-acre habitat recreation facility allows us to create perfect living environments for our cloned species, 
                from prehistoric forests to ice age plains, ensuring their successful adaptation and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-biotech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We're always looking for brilliant minds and passionate individuals to join our team and help 
            push the boundaries of what's possible in genetic science.
          </p>
          <div className="flex justify-center">
            <Link href="/careers" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 