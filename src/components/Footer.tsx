"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yukon-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-biotech-teal">YUKON<span className="text-white">LAB</span></h3>
            <p className="mb-4">Pioneering the future of genetic engineering and bio-cloning technology.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-biotech-teal">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-biotech-teal transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-biotech-teal transition-colors">About</Link></li>
              <li><Link href="/research" className="hover:text-biotech-teal transition-colors">Research</Link></li>
              <li><Link href="/species" className="hover:text-biotech-teal transition-colors">Species</Link></li>
              <li><Link href="/contact" className="hover:text-biotech-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-biotech-teal">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/publications" className="hover:text-biotech-teal transition-colors">Publications</Link></li>
              <li><Link href="/careers" className="hover:text-biotech-teal transition-colors">Careers</Link></li>
              <li><Link href="/faq" className="hover:text-biotech-teal transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-biotech-teal">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">123 Innovation Avenue</p>
              <p className="mb-2">Yukon Territory, Canada</p>
              <p className="mb-2">info@yukonlab.com</p>
              <p className="mb-2">+1 (867) 555-1234</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Yukon Laboratories. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy-policy" className="hover:text-biotech-teal transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-biotech-teal transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-biotech-teal transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 