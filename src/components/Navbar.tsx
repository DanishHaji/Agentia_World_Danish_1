'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuBot } from "react-icons/lu";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`bg-black text-white flex justify-between items-center p-4 md:px-8 w-full fixed top-0 left-0 z-50 
      ${isScrolled ? 'shadow-lg bg-opacity-90 border-b-1 border-purple-500 drop-shadow-[0_4px_10px_rgba(128,0,128,0.8)] transition duration-300' : ''}`}
    >
      <div className='flex items-center space-x-2'>
        <Link href="/">
          <div className='flex items-center space-x-2 cursor-pointer'>
            <LuBot size={34} className='text-purple-600' />
            <span className='text-xl font-bold'>Agentia World</span>
          </div>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center space-x-6'>
        <ul className='flex space-x-6'>
          <li><a href="#features" className='hover:text-purple-500 cursor-pointer'>Features</a></li>
          <li><a href="#technology" className='hover:text-purple-500 cursor-pointer'>Technology</a></li>
          <li><a href="#agents" className='hover:text-purple-500 cursor-pointer'>Agents</a></li>
          <li><a href="#pricing" className='hover:text-purple-500 cursor-pointer'>Pricing</a></li>
          <li><a href="#contact" className='hover:text-purple-500 cursor-pointer'>Contact</a></li>
        </ul>
        <button className='bg-gradient-to-r from-purple-700 to-pink-500 px-4 py-2 rounded hover:from-pink-500 hover:to-purple-700 transition duration-300 cursor-pointer'>
          Launch Console
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-16 right-0 bg-black text-white w-full flex flex-col items-center space-y-4 py-4 z-50'>
          <a href="#features" className='hover:text-purple-500 cursor-pointer' onClick={() => setIsOpen(false)}>Features</a>
          <a href="#technology" className='hover:text-purple-500 cursor-pointer' onClick={() => setIsOpen(false)}>Technology</a>
          <a href="#agents" className='hover:text-purple-500 cursor-pointer' onClick={() => setIsOpen(false)}>Agents</a>
          <a href="#pricing" className='hover:text-purple-500 cursor-pointer' onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#contact" className='hover:text-purple-500 cursor-pointer' onClick={() => setIsOpen(false)}>Contact</a>
          <button className='bg-gradient-to-r from-purple-700 to-pink-500 px-4 py-2 rounded hover:from-pink-500 hover:to-purple-700 transition duration-300 cursor-pointer'>
            Launch Console
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
