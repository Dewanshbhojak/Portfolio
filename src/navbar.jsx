import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50   text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-3xl font-bold">Portfolio</div>

      
        <ul className="hidden md:flex space-x-8 text-lg text-white" >
          <li><a href="/" className="hover:text-gray-300 hover:underlined">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/project" className="hover:text-gray-300">project</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 bg-transparent">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/project" className="hover:text-gray-300">project</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
