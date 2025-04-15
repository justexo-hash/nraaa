"use client";

import React from 'react';
import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-yukon-gray text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl">Last updated: June 15, 2023</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Yukon Laboratories is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>
            
            <h2 id="conformance" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p>
              Yukon Laboratories' website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>
            
            <h2 id="measures" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Measures to Support Accessibility</h2>
            <p>
              Yukon Laboratories takes the following measures to ensure accessibility of our website:
            </p>
            <ul>
              <li>Include accessibility as part of our mission statement</li>
              <li>Include accessibility throughout our internal policies</li>
              <li>Integrate accessibility into our procurement practices</li>
              <li>Appoint an accessibility officer and/or team for the website</li>
              <li>Provide continuous accessibility training for our staff</li>
              <li>Engage in regular testing with assistive technology</li>
            </ul>
            
            <h2 id="features" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Accessibility Features</h2>
            <p>
              Our website implements the following accessibility features:
            </p>
            <ul>
              <li>Semantic HTML structure with appropriate headings and landmarks</li>
              <li>Descriptive text alternatives for images</li>
              <li>Keyboard navigation support</li>
              <li>Resizable text without loss of functionality</li>
              <li>Sufficient color contrast ratios</li>
              <li>Focus indicators for keyboard users</li>
              <li>ARIA attributes where appropriate</li>
              <li>Consistent navigation structure</li>
              <li>Skip-to-content links</li>
              <li>Form labels and error messages</li>
            </ul>
            
            <h2 id="assistive" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Compatibility with Assistive Technologies</h2>
            <p>
              The Yukon Laboratories website is designed to be compatible with the following assistive technologies:
            </p>
            <ul>
              <li>Screen readers (including JAWS, NVDA, VoiceOver, and TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Switch access and other alternative input devices</li>
            </ul>
            
            <h2 id="limitations" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Technical Limitations</h2>
            <p>
              Despite our best efforts to ensure accessibility of the Yukon Laboratories website, there may be some limitations. Below is a description of known limitations, and we are working to resolve these issues:
            </p>
            <ul>
              <li>Some PDF documents may not be fully accessible to screen reader users</li>
              <li>Some older video content may not have captions or audio descriptions</li>
              <li>Some complex data visualizations may not have appropriate text alternatives</li>
              <li>Some interactive research tools may have limited keyboard accessibility</li>
            </ul>
            
            <h2 id="feedback" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of the Yukon Laboratories website. Please let us know if you encounter accessibility barriers:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 mb-8">
              <p className="mt-3">
                <strong>Email:</strong> accessibility@yukonlabs.com<br />
                <strong>Phone:</strong> +1 (867) 555-0124<br />
                <strong>Address:</strong> 123 Research Avenue, Whitehorse, Yukon Y1A 1A1, Canada
              </p>
            </div>
            <p>
              We try to respond to feedback within 3 business days.
            </p>
            
            <h2 id="assessment" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Assessment Approach</h2>
            <p>
              Yukon Laboratories assessed the accessibility of this website by the following approaches:
            </p>
            <ul>
              <li>Self-evaluation</li>
              <li>External evaluation by accessibility experts</li>
              <li>User testing with people with disabilities</li>
              <li>Automated testing tools</li>
            </ul>
            
            <h2 id="commitment" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Our Ongoing Commitment</h2>
            <p>
              Yukon Laboratories is committed to making our website accessible to all users, regardless of ability or technology. As part of this commitment, we:
            </p>
            <ul>
              <li>Regularly review and update our accessibility policy</li>
              <li>Conduct periodic audits and remediation</li>
              <li>Provide accessibility training to our development and content teams</li>
              <li>Consider accessibility in the design and development of new features</li>
              <li>Engage with the disability community to better understand user needs</li>
            </ul>
            <p>
              We are always striving to improve the accessibility of our website to ensure we provide equal access and opportunity for all people.
            </p>
            
            <h2 id="resources" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">Additional Resources</h2>
            <p>
              For more information about web accessibility, please visit these resources:
            </p>
            <ul>
              <li><a href="https://www.w3.org/WAI/" className="text-biotech-teal hover:underline" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Initiative (WAI)</a></li>
              <li><a href="https://www.w3.org/TR/WCAG21/" className="text-biotech-teal hover:underline" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2.1</a></li>
              <li><a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" className="text-biotech-teal hover:underline" target="_blank" rel="noopener noreferrer">Introduction to Web Accessibility</a></li>
            </ul>
            
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-gray-600">
                This statement was created on June 15, 2023.
              </p>
              <div className="mt-6">
                <Link
                  href="/privacy-policy"
                  className="text-biotech-teal hover:underline"
                >
                  Privacy Policy
                </Link> | 
                <Link
                  href="/terms-of-service"
                  className="text-biotech-teal hover:underline ml-4"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 