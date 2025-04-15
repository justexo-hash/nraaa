"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NeomatrixTechnology() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-biotech-gradient text-biotech-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-white text-biotech-teal px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Critical Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NeoMatrix™ Artificial Womb</h1>
            <p className="text-xl max-w-3xl">
              The world's first fully functional artificial womb capable of supporting complete development from early embryonic stages to full term for large mammalian species.
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
                <h2 className="section-title">Revolutionizing Gestation</h2>
                <p className="text-lg mb-6">
                  The NeoMatrix™ Artificial Womb represents a paradigm-shifting breakthrough in reproductive technology, enabling 
                  the complete development of large mammalian embryos outside of a biological mother for the first time in history.
                </p>
                <p className="text-lg mb-6">
                  Developed over six years by our bioengineering team led by Dr. Maria Reynolds and Dr. James Takahashi, 
                  this revolutionary system solved the most fundamental challenge of de-extinction: how to develop an embryo of an 
                  extinct species without a surrogate mother of the same or closely related species.
                </p>
                <div className="bg-yukon-light p-6 rounded-xl">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Patent-protected technology with 47 international patents</p>
                  </div>
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">100% successful full-term development rate for Nyra</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-biotech-teal rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-biotech-blue">Scalable design adaptable for species ranging from 2kg to 1000kg</p>
                  </div>
                </div>
              </div>
              <div className="bg-yukon-gray h-[500px] rounded-xl relative">
                {/* Uncomment when you add your image */}
                <Image 
                  src="/images/tech-neomatrix-main.png" 
                  alt="NeoMatrix Artificial Womb" 
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
          <h2 className="section-title text-center mb-16">How NeoMatrix™ Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Biomimetic Interface</h3>
                  <p className="mb-6">
                    Our multi-layered functional membrane replicates placental transport mechanisms with selective permeability, 
                    active transport systems, and simulated maternal-fetal exchange functions for optimal nutrient delivery and waste removal.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Supports exchange of 187 critical biomolecules
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Physiological Regulation</h3>
                  <p className="mb-6">
                    Advanced AI-driven systems continuously monitor and maintain optimal conditions for temperature, 
                    pressure, pH, oxygenation, and hormone concentrations, adapting in real-time to the developing embryo's changing needs.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Real-time monitoring of 43 physiological parameters
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="card h-full hover:shadow-xl transition-shadow p-8">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-biotech-blue w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-biotech-blue mb-4 mt-6">Mechanical Stimulation</h3>
                  <p className="mb-6">
                    Our adaptive pressure distribution, variable resistance elements, and programmed motion patterns provide 
                    critical mechanical stimulation that promotes proper musculoskeletal development and physical conditioning.
                  </p>
                  <p className="text-biotech-teal font-semibold">
                    Sophisticated movement patterns mimicking natural gestation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-20">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl">
                <h3 className="text-2xl font-bold text-biotech-blue mb-6 text-center">Integration with Other Technologies</h3>
                <p className="text-lg mb-6 text-center">
                  The NeoMatrix™ system is designed to work seamlessly with our other breakthrough technologies, creating a complete 
                  developmental environment that addresses all aspects of embryonic and fetal growth for de-extinct species.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">NeuroStim™</div>
                    <p className="font-semibold">Neural development</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">EpiMod™</div>
                    <p className="font-semibold">Epigenetic regulation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-biotech-teal mb-2">BioStim™</div>
                    <p className="font-semibold">Behavioral programming</p>
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
                    src="/images/adaptive-nutrient.png" 
                    alt="Adaptive nutrient delivery system" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Adaptive Nutrient Delivery</h3>
                <p>
                  Our proprietary nutrient delivery system analyzes the developing embryo's metabolic needs in real-time and 
                  adapts the composition of nutrients, growth factors, and hormones to match each developmental stage. The system 
                  provides over 200 distinct nutrients in precisely calibrated concentrations, ensuring optimal development.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/artificial-placenta.png" 
                    alt="Artificial placental membrane" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Artificial Placental Membrane</h3>
                <p>
                  Our revolutionary multi-layered membrane technology replicates the complex function of a biological placenta, 
                  featuring selective permeability, active transport systems, and immune-privileged zones. The membrane's 
                  nanotechnology-enhanced structure provides unprecedented control over maternal-fetal exchange functions.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/environmental-simulation.png" 
                    alt="Environmental simulation system" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">Dynamic Environmental Simulation</h3>
                <p>
                  NeoMatrix™ features a sophisticated environmental control system that simulates the natural changes in 
                  maternal physiology throughout pregnancy. The system modulates temperature, pressure, sound exposure, 
                  motion patterns, and light cycles to provide developmentally appropriate stimulation at every stage.
                </p>
              </div>
              
              <div>
                <div className="bg-yukon-gray h-64 rounded-xl mb-8">
                  {/* Uncomment when you add your image */}
                  <Image 
                    src="/images/monitoring-system.png" 
                    alt="AI monitoring and intervention system" 
                    width={600} 
                    height={350}
                    className="h-64 w-full object-cover rounded-xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-biotech-blue mb-4">AI Monitoring and Intervention</h3>
                <p>
                  Our advanced AI system continuously monitors embryonic and fetal development using non-invasive imaging, 
                  biochemical analysis, and physiological sensors. The system can detect developmental abnormalities with 
                  99.8% accuracy and automatically implement corrective interventions to ensure normal development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-biotech-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">NeoMatrix™ in Action: Nyra's Development</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <p className="text-lg mb-4">
                The successful resurrection of <em>Panthera atrox magnus</em> required a complete solution for embryonic and fetal 
                development outside of a biological mother. With no suitable surrogate species available—modern big cats are too 
                small to carry a <em>P. atrox magnus</em> fetus to term—we needed to create an entirely artificial gestational 
                environment capable of supporting development from embryo to full-term cub.
              </p>
              <p className="text-lg">
                This environment needed to replicate every aspect of natural gestation, from nutrient exchange and waste removal 
                to hormonal regulation and physical stimulation, all while adapting to the changing needs of a developing organism 
                for which we had no modern reference.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">The NeoMatrix™ Solution</h3>
              <p className="text-lg mb-6">
                Our NeoMatrix™ system provided Nyra with a complete developmental environment tailored specifically to the needs 
                of a <em>P. atrox magnus</em> embryo, inferred from analysis of modern big cat development and evolutionary relationships.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">293</div>
                  <p>Days of artificial gestation</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">43kg</div>
                  <p>Birth weight achieved</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-biotech-cyan mb-2">100%</div>
                  <p>Developmental milestones met</p>
                </div>
              </div>
              <p className="text-lg">
                Throughout the gestation period, NeoMatrix™ provided Nyra with optimized nutrition, oxygenation, waste removal, 
                hormonal regulation, and physical stimulation, all continuously adjusted based on real-time monitoring of her 
                development and metabolic needs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">The Results</h3>
              <p className="text-lg mb-6">
                After 293 days of artificial gestation, Nyra was successfully "born" from the NeoMatrix™ system with all 
                physiological parameters within normal ranges for a newborn <em>P. atrox magnus</em> cub. Post-birth assessments 
                confirmed complete physiological development, proper organ function, and normal physical development, validating 
                the NeoMatrix™ system as a viable alternative to biological gestation for de-extinct species.
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
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Capacity Range</td>
                    <td className="px-6 py-4">Supports species from 2kg to 1000kg at full term<br />Adaptable chamber expands from 2cm³ to 2m³</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Nutrient Delivery</td>
                    <td className="px-6 py-4">200+ distinct nutrients, growth factors, and hormones<br />Real-time composition adjustment based on metabolic needs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Environmental Control</td>
                    <td className="px-6 py-4">Temperature: ±0.1°C precision<br />Pressure: ±0.01 kPa precision<br />Gas exchange: O₂, CO₂, and N₂ regulated to ±0.1%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Monitoring Systems</td>
                    <td className="px-6 py-4">Non-invasive imaging: MRI, ultrasound, and optical coherence tomography<br />Continuous biochemical analysis of 87 metabolites</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Artificial Placenta</td>
                    <td className="px-6 py-4">15-layer nanostructured membrane<br />Active transport proteins for 143 essential molecules<br />Embedded immune regulatory system</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">Mechanical Stimulation</td>
                    <td className="px-6 py-4">6-axis motion system for naturalistic movement<br />Adaptive resistance elements for musculoskeletal development</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold">AI System</td>
                    <td className="px-6 py-4">3.8 petaFLOPS dedicated processing<br />Developmental model with 12.6 million parameters<br />10ms response time for interventions</td>
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
            NeoMatrix™ works seamlessly with our other breakthrough technologies to make de-extinction possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/technology/gene-revive" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              GeneRevive™ Platform
            </Link>
            <Link href="/technology/neurostim" className="button-primary bg-biotech-teal hover:bg-white hover:text-biotech-blue">
              NeuroStim™ Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 