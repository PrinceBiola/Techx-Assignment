import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-between py-6 px-5 md:px-36'>
      <div className='flex justify-between items-center gap-[70%]'>
      <h1 className='font-bold text-3xl md:text-4xl'>Techx</h1>

<button onClick={toggleMenu} className='md:hidden'>
  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
</button>
      </div>

      {isMenuOpen && (
        <ul className='flex flex-col items-center justify-center gap-5 md:hidden bg-white shadow-lg rounded-lg p-5'>
          <li className='cursor-pointer hover:text-[#FF1A5C]' onClick={toggleMenu}>Home</li>
          <li className='cursor-pointer hover:text-[#FF1A5C]' onClick={toggleMenu}>Services</li>
          <li className='cursor-pointer hover:text-[#FF1A5C]' onClick={toggleMenu}>Features</li>
          <li className='cursor-pointer hover:text-[#FF1A5C]' onClick={toggleMenu}>About</li>
          <li className='cursor-pointer hover:text-[#FF1A5C]' onClick={toggleMenu}>Blog</li>
          <li className='cursor-pointer hover:text-[#FF1A5C]' onClick={toggleMenu}>Contact Us</li>
        </ul>
      )}

      <ul className='hidden md:flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 font-semibold text-lg md:text-xl'>
        <li className='cursor-pointer hover:text-[#FF1A5C]'>Home</li>
        <li className='cursor-pointer hover:text-[#FF1A5C]'>Services</li>
        <li className='cursor-pointer hover:text-[#FF1A5C]'>Features</li>
        <li className='cursor-pointer hover:text-[#FF1A5C]'>About</li>
        <li className='cursor-pointer hover:text-[#FF1A5C]'>Blog</li>
        <li className='cursor-pointer hover:text-[#FF1A5C]'>Contact Us</li>
      </ul>

      <button className='mt-4 md:mt-0 inline-flex px-8 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-[#4B00E6] to-[#8255D3] text-white'>
        Get Started
      </button>
    </div>
  );
}
