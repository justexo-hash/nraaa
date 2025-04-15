"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-biotech-blue">YUKON<span className="text-biotech-teal">LAB</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="navbar-link font-medium">Home</Link>
          <Link href="/about" className="navbar-link font-medium">About</Link>
          <Link href="/research" className="navbar-link font-medium">Research</Link>
          <Link href="/species" className="navbar-link font-medium">Species</Link>
          <Link href="/contact" className="navbar-link font-medium">Contact</Link>
          <button className="button-primary ml-4">Partner With Us</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-biotech-blue focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="navbar-link font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="navbar-link font-medium py-2" onClick={toggleMenu}>About</Link>
            <Link href="/research" className="navbar-link font-medium py-2" onClick={toggleMenu}>Research</Link>
            <Link href="/species" className="navbar-link font-medium py-2" onClick={toggleMenu}>Species</Link>
            <Link href="/contact" className="navbar-link font-medium py-2" onClick={toggleMenu}>Contact</Link>
            <button className="button-primary w-full mt-4">Partner With Us</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 