"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  
  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'technology', name: 'Our Technology' },
    { id: 'conservation', name: 'Conservation Efforts' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'careers', name: 'Careers & Opportunities' }
  ];
  
  const faqs = {
    general: [
      {
        question: "What is Yukon Laboratories?",
        answer: "Yukon Laboratories is a pioneering biotechnology research organization focused on genetic preservation, conservation, and de-extinction research. Our mission is to develop innovative technologies that help preserve biodiversity and potentially restore extinct species to their native ecosystems."
      },
      {
        question: "Where is Yukon Laboratories located?",
        answer: "Our primary research facility is based in Whitehorse, Yukon Territory, Canada. We also maintain a satellite laboratory in Vancouver and collaborate with research partners worldwide."
      },
      {
        question: "Is Yukon Laboratories affiliated with any universities?",
        answer: "While we remain an independent research organization, we have established formal research partnerships with several leading universities including the University of British Columbia, Stanford University, and ETH Zurich, among others."
      },
      {
        question: "How is Yukon Laboratories funded?",
        answer: "We receive funding through a combination of private investment, research grants, philanthropic donations, and strategic industry partnerships. This diverse funding model allows us to maintain scientific independence while pursuing our long-term research objectives."
      },
      {
        question: "Can I visit Yukon Laboratories?",
        answer: "We offer limited public tours of our non-restricted facilities on a quarterly basis. Additionally, we host an annual Open Science Day where visitors can learn about our work. For educational institutions, we offer more frequent scheduled tours by appointment."
      }
    ],
    technology: [
      {
        question: "What is de-extinction?",
        answer: "De-extinction is the process of reviving extinct species through genetic engineering, selective breeding, or other means. At Yukon Laboratories, we focus on utilizing preserved genetic material, advanced genomic sequencing, and reproductive technologies to potentially restore certain extinct species."
      },
      {
        question: "How does your genetic preservation technology work?",
        answer: "Our genetic preservation process involves collecting DNA samples from endangered species, sequencing and analyzing the genome, and storing this genetic information in our biorepository. We also develop advanced cryopreservation techniques for preserving viable cells that could be used for future conservation efforts."
      },
      {
        question: "Which species are you currently working with?",
        answer: "Our current research focuses on several keystone species including the woolly mammoth, Tasmanian tiger (thylacine), passenger pigeon, and various endangered species of the Arctic and North American ecosystems. We prioritize species with ecological significance and those where sufficient genetic material is available."
      },
      {
        question: "What ethical frameworks guide your research?",
        answer: "Our work adheres to a rigorous ethical framework developed in consultation with bioethicists, conservation experts, indigenous knowledge holders, and policy makers. This framework addresses issues such as animal welfare, ecosystem impacts, resource allocation, and cultural considerations. All research undergoes review by our Ethics Advisory Board."
      },
      {
        question: "Do you use CRISPR or other gene editing technologies?",
        answer: "Yes, we utilize various genomic technologies including CRISPR-Cas9 for specific applications in our research. However, we implement strict protocols and oversight to ensure responsible use of these powerful technologies, with emphasis on conservation outcomes and ecological benefits."
      }
    ],
    conservation: [
      {
        question: "How does your work contribute to conservation efforts?",
        answer: "Our research directly supports conservation through multiple pathways: developing technologies to preserve genetic diversity of endangered species, advancing reproductive technologies that can help restore populations, creating genomic libraries of at-risk species, and researching how keystone species restoration could benefit entire ecosystems."
      },
      {
        question: "Do you work with existing conservation organizations?",
        answer: "Yes, we actively collaborate with conservation organizations worldwide, including the World Wildlife Fund, International Union for Conservation of Nature, and numerous regional conservation groups. These partnerships ensure our research aligns with practical conservation needs and initiatives."
      },
      {
        question: "What is your stance on habitat preservation versus de-extinction?",
        answer: "We firmly believe that habitat preservation remains the foundation of effective conservation. De-extinction research is complementary to, not a replacement for, habitat conservation. Our research aims to support comprehensive ecosystem restoration, which includes both habitat protection and the potential restoration of missing keystone species."
      },
      {
        question: "How do you work with indigenous communities in conservation projects?",
        answer: "We recognize the crucial importance of indigenous knowledge and sovereignty in conservation efforts. We've established an Indigenous Advisory Council that guides our approach to working with local communities. All projects affecting indigenous territories involve consultation, collaboration, and benefit-sharing agreements with relevant communities."
      },
      {
        question: "Can your genetic technologies help currently endangered species?",
        answer: "Absolutely. Many technologies developed for de-extinction research have immediate applications for endangered species conservation. These include advanced reproductive techniques, genetic rescue protocols for small populations, and methods to maintain genetic diversity in captive breeding programs."
      }
    ],
    partnerships: [
      {
        question: "How can my organization partner with Yukon Laboratories?",
        answer: "We welcome partnerships with research institutions, conservation organizations, technology companies, and other entities whose goals align with our mission. Initial inquiries can be directed to partnerships@yukonlabs.com, where our collaboration team will guide you through the process."
      },
      {
        question: "Do you offer research grants or funding opportunities?",
        answer: "We maintain a competitive Ecological Innovation Grant program that funds external research aligned with our mission. These grants are typically awarded annually, with applications opening in January. Visit our Partnerships page for current opportunities and application guidelines."
      },
      {
        question: "What types of collaborative research projects do you engage in?",
        answer: "Our collaborative research spans various areas including genomics, reproductive biology, ecological modeling, conservation technology, bioethics, and environmental policy. We particularly value interdisciplinary projects that bridge traditional research boundaries."
      },
      {
        question: "Do you work with commercial biotechnology companies?",
        answer: "We selectively engage with commercial partners whose values align with our mission. These partnerships typically focus on developing technologies with applications in both conservation and sustainable biotechnology. All commercial partnerships undergo ethical review and include provisions for equitable benefit sharing."
      },
      {
        question: "How do you share your research findings with the scientific community?",
        answer: "We are committed to open science principles. Our research findings are published in peer-reviewed journals, presented at scientific conferences, and when appropriate, shared through pre-print servers. We also maintain data sharing agreements with research repositories and collaborating institutions."
      }
    ],
    careers: [
      {
        question: "What types of positions do you typically hire for?",
        answer: "We hire across scientific, technical, and operational roles. Scientific positions include geneticists, conservation biologists, bioinformaticians, and veterinary specialists. We also hire for technical roles in laboratory management, software development, and data science, as well as roles in communications, administration, and facilities management."
      },
      {
        question: "Do you offer internships or student research opportunities?",
        answer: "Yes, we offer structured internship programs for undergraduate and graduate students, as well as postdoctoral fellowships. We also collaborate with universities on student research projects and thesis work. Our educational outreach includes summer research programs for promising high school students."
      },
      {
        question: "What qualifications do you look for in scientific staff?",
        answer: "Beyond appropriate scientific credentials, we value interdisciplinary thinking, collaborative mindset, ethical consideration in research, and genuine commitment to conservation goals. We look for team members who combine technical excellence with creative problem-solving approaches."
      },
      {
        question: "Do you sponsor work visas for international applicants?",
        answer: "Yes, we do sponsor work visas for international candidates in specialized roles. Yukon Laboratories is an international organization, and we value diverse perspectives and expertise from around the world. Our HR team provides support throughout the immigration process for successful candidates."
      },
      {
        question: "What is your company culture like?",
        answer: "We foster a collaborative, mission-driven culture that balances scientific rigor with innovation. Our team embraces diversity of thought, interdisciplinary approaches, and open exchange of ideas. We maintain a healthy work-life balance, recognizing that breakthrough thinking requires both intense focus and adequate rest."
      }
    ]
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-yukon-gray text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">Find answers to common questions about Yukon Laboratories, our research, and our mission.</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Search Component */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-biotech-teal"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Can't find what you're looking for? <Link href="/contact" className="text-biotech-teal hover:underline">Contact us</Link></p>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="mb-12 border-b border-gray-200">
          <div className="flex flex-wrap md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-3 md:px-6 text-base font-medium ${
                  activeCategory === category.id
                    ? 'border-b-2 border-biotech-teal text-biotech-teal'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-yukon-gray mb-8">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          
          <div className="space-y-4">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-yukon-gray mb-4">Still need help?</h3>
            <p className="text-gray-600 mb-6">If you couldn't find the information you were looking for, our team is ready to assist you.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-biotech-teal hover:bg-opacity-90"
              >
                Contact Us
              </Link>
              <Link
                href="/resources"
                className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-yukon-gray bg-white hover:bg-gray-50"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-yukon-gray">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
} 