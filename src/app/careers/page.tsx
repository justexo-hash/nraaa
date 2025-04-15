"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const jobListings = [
    {
      id: 1,
      title: "Senior Genetic Engineer",
      department: "Research & Development",
      location: "Whitehorse, Canada",
      type: "Full-time",
      posted: "3 days ago",
      featured: true,
      category: "scientific"
    },
    {
      id: 2,
      title: "Computational Biologist",
      department: "Bioinformatics",
      location: "Vancouver, Canada",
      type: "Full-time",
      posted: "5 days ago",
      featured: true,
      category: "scientific"
    },
    {
      id: 3,
      title: "Wildlife Conservation Specialist",
      department: "Conservation",
      location: "Whitehorse, Canada",
      type: "Full-time",
      posted: "1 week ago",
      featured: false,
      category: "scientific"
    },
    {
      id: 4,
      title: "Laboratory Technician",
      department: "Research & Development",
      location: "Whitehorse, Canada",
      type: "Full-time",
      posted: "2 weeks ago",
      featured: false,
      category: "scientific"
    },
    {
      id: 5,
      title: "Research Data Analyst",
      department: "Data Science",
      location: "Remote",
      type: "Full-time",
      posted: "2 weeks ago",
      featured: false,
      category: "technical"
    },
    {
      id: 6,
      title: "Front-End Developer",
      department: "Engineering",
      location: "Vancouver, Canada",
      type: "Full-time",
      posted: "3 weeks ago",
      featured: false,
      category: "technical"
    },
    {
      id: 7,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      posted: "1 month ago",
      featured: false,
      category: "technical"
    },
    {
      id: 8,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Whitehorse, Canada",
      type: "Full-time",
      posted: "1 month ago",
      featured: false,
      category: "business"
    },
    {
      id: 9,
      title: "Communications Specialist",
      department: "Public Relations",
      location: "Whitehorse, Canada",
      type: "Full-time",
      posted: "1 month ago",
      featured: false,
      category: "business"
    },
    {
      id: 10,
      title: "HR Coordinator",
      department: "Human Resources",
      location: "Vancouver, Canada",
      type: "Full-time",
      posted: "5 weeks ago",
      featured: false,
      category: "business"
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category === activeTab);

  const searchFilteredJobs = searchQuery 
    ? filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      ) 
    : filteredJobs;

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages that reflect the value of your work.",
      icon: (
        <svg className="w-6 h-6 text-biotech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision benefits, plus wellness programs for you and your family.",
      icon: (
        <svg className="w-6 h-6 text-biotech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Flexible Work",
      description: "Remote work options, flexible schedules, and generous paid time off to maintain work-life balance.",
      icon: (
        <svg className="w-6 h-6 text-biotech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Career Growth",
      description: "Professional development opportunities, education stipends, and clear advancement pathways.",
      icon: (
        <svg className="w-6 h-6 text-biotech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Cutting-Edge Research",
      description: "Work on pioneering projects that directly contribute to global conservation efforts.",
      icon: (
        <svg className="w-6 h-6 text-biotech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Global Impact",
      description: "Be part of meaningful work that's shaping the future of conservation and biotechnology.",
      icon: (
        <svg className="w-6 h-6 text-biotech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yukon-gray to-gray-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mission</h1>
            <p className="text-xl mb-8">Help us redefine the future of conservation through cutting-edge genetic research and technology.</p>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search jobs by title, department or location"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-biotech-teal text-yukon-gray"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <button className="bg-biotech-teal text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Job Category Tabs */}
        <div className="mb-10 border-b border-gray-200">
          <div className="flex overflow-x-auto space-x-8">
            <button 
              className={`pb-4 text-base font-medium -mb-px ${activeTab === 'all' ? 'border-b-2 border-biotech-teal text-biotech-teal' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('all')}
            >
              All Positions
            </button>
            <button 
              className={`pb-4 text-base font-medium -mb-px ${activeTab === 'scientific' ? 'border-b-2 border-biotech-teal text-biotech-teal' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('scientific')}
            >
              Scientific
            </button>
            <button 
              className={`pb-4 text-base font-medium -mb-px ${activeTab === 'technical' ? 'border-b-2 border-biotech-teal text-biotech-teal' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button 
              className={`pb-4 text-base font-medium -mb-px ${activeTab === 'business' ? 'border-b-2 border-biotech-teal text-biotech-teal' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('business')}
            >
              Business
            </button>
          </div>
        </div>
        
        {/* Featured Positions */}
        {activeTab === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-yukon-gray mb-6">Featured Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobListings.filter(job => job.featured).map(job => (
                <div key={job.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-yukon-gray">{job.title}</h3>
                      <p className="text-gray-600">{job.department}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-biotech-teal text-white">
                      Featured
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-6 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                    <span className="mx-2">•</span>
                    <span>{job.type}</span>
                    <span className="mx-2">•</span>
                    <span>Posted {job.posted}</span>
                  </div>
                  <Link href={`/careers/${job.id}`} className="inline-flex items-center justify-center w-full px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-biotech-teal hover:bg-opacity-90">
                    View Position
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Open Positions */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-yukon-gray">
              {activeTab === 'all' ? 'All Open Positions' : 
                activeTab === 'scientific' ? 'Scientific Positions' : 
                activeTab === 'technical' ? 'Technical Positions' : 'Business Positions'}
            </h2>
            <p className="text-gray-600">{searchFilteredJobs.length} positions available</p>
          </div>
          
          {searchFilteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No positions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border border-gray-200">
              {searchFilteredJobs.map((job, index) => (
                <div key={job.id} className={`bg-white hover:bg-gray-50 ${index !== searchFilteredJobs.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <Link href={`/careers/${job.id}`} className="block p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-yukon-gray">{job.title}</h3>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500">
                        <span className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span className="mb-2 sm:mb-0 sm:mr-4">{job.type}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Benefits Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yukon-gray mb-4">Why Work at Yukon Laboratories?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We offer a collaborative environment where innovation thrives and your work makes a genuine impact on the world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-yukon-gray mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 bg-biotech-teal rounded-lg text-white p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-2">Don't See the Right Fit?</h3>
              <p className="text-biotech-teal-100">We're always looking for talented individuals who are passionate about our mission. Send your resume and we'll keep you in mind for future opportunities.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/careers/general-application" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-biotech-teal bg-white hover:bg-gray-100">
                Submit General Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 