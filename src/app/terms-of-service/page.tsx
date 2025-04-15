"use client";

import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-yukon-gray text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl">Last updated: June 15, 2023</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              These Terms of Service ("Terms") govern your access to and use of the Yukon Laboratories website, services, and any related applications (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            
            <h2 id="agreement" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
            </p>
            
            <h2 id="changes" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time, in our sole discretion. If we do, we'll post the modified Terms on this page and update the "Last Updated" date. It is your responsibility to check our website periodically for changes. Your continued use of our Services following the posting of revised Terms means you accept and agree to the changes.
            </p>
            
            <h2 id="account" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">3. Account Registration</h2>
            <p>
              To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for any activity that occurs under your account.
            </p>
            
            <h2 id="content" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">4. User Content</h2>
            <p>
              Our Services may allow you to submit, upload, publish, or otherwise make available content such as comments, feedback, or ideas ("User Content"). By providing User Content, you grant us a worldwide, perpetual, irrevocable, royalty-free, fully paid, non-exclusive, transferable, and sublicensable license to use, copy, modify, create derivative works based upon, distribute, publicly display, and publicly perform your User Content.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate the rights of any third party, including intellectual property rights and privacy rights</li>
              <li>Your User Content complies with these Terms and all applicable laws</li>
            </ul>
            
            <h2 id="prohibited" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">5. Prohibited Activities</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use the Services in any way that violates any applicable law or regulation</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
              <li>Attempt to gain unauthorized access to any portion of the Services, or any systems or networks connected to the Services</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any material on the Services</li>
              <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other malicious or technologically harmful material</li>
              <li>Attempt to decipher, decompile, disassemble, or reverse engineer any of the software used to provide the Services</li>
            </ul>
            
            <h2 id="intellectual-property" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">6. Intellectual Property Rights</h2>
            <p>
              The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, videos, and audio, and the design, selection, and arrangement thereof) are owned by Yukon Laboratories, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms do not grant you any right, title, or interest in the Services, or any content, features, or functionality of the Services.
            </p>
            
            <h2 id="dmca" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">7. Copyright Infringement</h2>
            <p>
              If you believe that any User Content violates your copyright, please notify us at legal@yukonlabs.com. It is our policy to terminate the user accounts of repeat infringers.
            </p>
            
            <h2 id="disclaimer" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. YUKON LABORATORIES EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not guarantee, represent, or warrant that your use of our Services will be uninterrupted, timely, secure, or error-free.
            </p>
            
            <h2 id="limitation" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL YUKON LABORATORIES BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICES.
            </p>
            <p>
              Yukon Laboratories' total liability to you for all claims arising from or relating to these Terms or your use of the Services shall not exceed one hundred dollars ($100).
            </p>
            
            <h2 id="indemnity" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Yukon Laboratories, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
            </p>
            
            <h2 id="termination" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">11. Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of the Services, with or without notice, for any conduct that we, in our sole discretion, believe is in violation of these Terms or is harmful to other users of the Services, or to us.
            </p>
            
            <h2 id="governing-law" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">12. Governing Law</h2>
            <p>
              These Terms and any dispute or claim arising out of or related to them, their subject matter, or their formation shall be governed by and construed in accordance with the laws of Canada and the province of Yukon, without giving effect to any choice or conflict of law provision.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the courts of Yukon, Canada. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
            </p>
            
            <h2 id="waiver" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">13. Waiver and Severability</h2>
            <p>
              No waiver by Yukon Laboratories of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision shall be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable and the remainder of the provisions shall remain in full force and effect.
            </p>
            
            <h2 id="contact" className="text-2xl font-bold text-yukon-gray mt-12 mb-4">14. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 mb-8">
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Yukon Laboratories</strong><br />
                123 Research Avenue<br />
                Whitehorse, Yukon Y1A 1A1<br />
                Canada
              </p>
              <p className="mt-3">
                <strong>Email:</strong> legal@yukonlabs.com<br />
                <strong>Phone:</strong> +1 (867) 555-0123
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-gray-600">
                By using our website, you acknowledge that you have read and understood these Terms of Service.
              </p>
              <div className="mt-6">
                <Link
                  href="/privacy-policy"
                  className="text-biotech-teal hover:underline"
                >
                  Privacy Policy
                </Link> | 
                <Link
                  href="/accessibility"
                  className="text-biotech-teal hover:underline ml-4"
                >
                  Accessibility Statement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 