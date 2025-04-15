"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NeurostimTechnology() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Advanced Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NeuroStim™ Platform</h1>
            <p className="text-xl max-w-3xl">
              Revolutionary non-invasive neural stimulation technology for optimal brain development and function in de-extinct species.
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
                <h2 className="section-title">Precision Neural Development</h2>
                <p className="text-lg mb-6">
                  The NeuroStim™ Platform represents a paradigm shift in neural development technology, combining advanced 
                  electromagnetic stimulation with AI-driven targeting to ensure optimal brain development in de-extinct species.
                </p>
                <p className="text-lg mb-6">
                  Developed by our neuroscience team led by Dr. Sarah Park and Dr. James Werner, this revolutionary platform 
                  addresses one of the most critical challenges in de-extinction: ensuring proper neural circuit formation 
                  and brain function in species revived after millennia of extinction.
                </p>
                <div className="bg-yukon-light p-6 rounded-xl">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Non-invasive technology with zero tissue damage</p>
                  </div>
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">72% improvement in neural connectivity in target regions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">AI-guided precision targeting of 136 critical brain regions</p>
                  </div>
                </div>
              </div>
              <div className="bg-yukon-gray h-[500px] rounded-xl relative">
                {/* Uncomment when you add your image */}
                {/* 
                <Image 
                  src="/images/tech-neurostim-main.jpg" 
                  alt="NeuroStim Platform in action" 
                  fill
                  className="rounded-xl object-cover" 
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-yukon-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">How NeuroStim™ Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Neural Mapping</h3>
                  <p className="mb-6">
                    Our advanced NeuroTrack™ imaging system creates detailed maps of developing neural structures, 
                    identifying critical regions for circuit formation and functional connectivity that require intervention.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    0.5mm precision in neural structure identification
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Targeted Stimulation</h3>
                  <p className="mb-6">
                    Precisely calibrated electromagnetic pulses are directed at target neural regions, stimulating 
                    neurogenesis, synaptogenesis, and myelination at critical developmental windows identified by our AI system.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Customized stimulation protocols for 42 distinct developmental phases
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Adaptive Monitoring</h3>
                  <p className="mb-6">
                    Our AI-driven monitoring system continuously assesses neural development response, adapting stimulation 
                    parameters in real-time to optimize circuit formation and functional connectivity.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Real-time adjustments based on 24/7 neural activity monitoring
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-20">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl">
                <h3 className="text-2xl font-bold text-biotech-blue mb-6 text-center">Outcomes and Validation</h3>
                <p className="text-lg mb-6 text-center">
                  NeuroStim™ technology has been rigorously validated through extensive testing and functional assessment, 
                  demonstrating significant improvements across all key metrics of neural development and function in Nyra.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">72%</div>
                    <p className="font-semibold">Improved connectivity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">89%</div>
                    <p className="font-semibold">Neural pathways activated</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">97%</div>
                    <p className="font-semibold">Cognitive function success</p>
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
                  {/* 
                  <Image 
                    src="/images/precision-targeting.jpg" 
                    alt="Precision targeting system of NeuroStim" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                  */}
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Precision Targeting System</h3>
                <p>
                  Unlike traditional neural stimulation methods, our system utilizes quantum-dot enhanced electromagnetic 
                  arrays that can target neural structures with sub-millimeter precision, allowing for selective activation 
                  of specific neural circuits without affecting surrounding tissues.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  {/* 
                  <Image 
                    src="/images/adaptive-algorithms.jpg" 
                    alt="Adaptive neural algorithms" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                  */}
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Adaptive Neural Algorithms</h3>
                <p>
                  Our proprietary machine learning system continuously analyzes developmental progress, comparing actual 
                  neural formation to predicted models based on modern felid data. The system automatically adjusts 
                  stimulation parameters to correct developmental deviations and enhance critical circuit formation.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  {/* 
                  <Image 
                    src="/images/frequency-modulation.jpg" 
                    alt="Multi-frequency modulation technology" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                  */}
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Multi-Frequency Modulation</h3>
                <p>
                  NeuroStim™ utilizes a proprietary multi-frequency stimulation approach that simultaneously targets 
                  different aspects of neural development. Our system can simultaneously promote neurogenesis, enhance 
                  synaptogenesis, and stimulate myelination through precisely calibrated frequency combinations tailored 
                  to specific developmental stages.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  {/* 
                  <Image 
                    src="/images/biocompatible-interface.jpg" 
                    alt="Biocompatible neural interface" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                  */}
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Biocompatible Neural Interface</h3>
                <p>
                  Our revolutionary non-invasive interface utilizes quantum-enhanced materials that maximize 
                  electromagnetic penetration while ensuring zero tissue damage. This allows for deep stimulation of critical 
                  brain structures throughout development without requiring invasive procedures that could compromise the 
                  health of developing embryos and fetuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">NeuroStim™ in Action: Nyra's Brain Development</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <p className="text-lg mb-4">
                Ensuring proper brain development in a de-extinct species presented unprecedented challenges. Without maternal 
                hormonal influence, natural environmental stimulation, and species-specific developmental cues, we faced significant 
                risks of improper neural circuit formation that could compromise Nyra's cognitive abilities, sensory processing, 
                and behavioral development.
              </p>
              <p className="text-lg">
                Of particular concern were critical periods for brain development—windows where specific neural circuits must form 
                properly or risk permanent impairment. These periods required precise intervention to ensure normal development.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The NeuroStim™ Solution</h3>
              <p className="text-lg mb-6">
                Throughout Nyra's gestation in our NeoMatrix™ artificial womb, the NeuroStim™ platform provided precisely timed 
                and targeted stimulation to critical developing brain regions, ensuring proper neural circuit formation during key 
                developmental windows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">136</div>
                  <p>Critical brain regions stimulated</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">42</div>
                  <p>Developmental stages monitored</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">24/7</div>
                  <p>Continuous adaptive monitoring</p>
                </div>
              </div>
              <p className="text-lg">
                The system's adaptive algorithms adjusted stimulation parameters in real-time based on continuous monitoring of 
                neural development, ensuring optimal formation of sensory processing circuits, motor control networks, and higher 
                cognitive pathways essential for proper feline behavior and cognition.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">The Results</h3>
              <p className="text-lg mb-6">
                Post-birth assessments confirmed the remarkable success of the NeuroStim™ platform. Nyra's brain development, 
                neural connectivity, and functional capabilities are indistinguishable from what would be expected in a naturally 
                born <em>Panthera atrox magnus</em>. Her sensory processing, motor control, instinctual behaviors, and cognitive 
                abilities all demonstrate proper neural development.
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
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Stimulation Precision</td>
                    <td className="px-6 py-4">0.5mm targeting accuracy<br />±0.2Hz frequency precision</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Frequency Range</td>
                    <td className="px-6 py-4">0.1Hz - 300Hz with simultaneous multi-frequency capability</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Penetration Depth</td>
                    <td className="px-6 py-4">Up to 15cm with quantum-enhanced field penetration</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Monitoring Resolution</td>
                    <td className="px-6 py-4">Neural activity detection at single-neuron level<br />Real-time processing of 50TB neural data per day</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Adaptability</td>
                    <td className="px-6 py-4">Self-calibrating system with 10ms response time<br />Automatic adjustment based on 24/7 neural monitoring</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Safety Profile</td>
                    <td className="px-6 py-4">Zero tissue damage<br />Thermal variation &lt;0.1°C during operation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">AI Integration</td>
                    <td className="px-6 py-4">5.2 petaFLOPS neural network processing<br />16 million parameters in adaptive stimulation model</td>
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
            NeuroStim™ works seamlessly with our other breakthrough technologies to make de-extinction possible.
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