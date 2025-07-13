import React from 'react';
import Navbar from './navbar.jsx';
import ParticlesComponent from './ParticlesComponent.jsx';
import './navbar.css'; // Contains your typewriter CSS

const Home = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      <ParticlesComponent />
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-28 min-h-screen text-center">
        {/* Heading with typewriter */}
        <h1 className="typewriter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white mb-4 sm:mb-6">
          Portfolio.iO
        </h1>

        {/* Subtitle responsive */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-400 mt-2">
          Frontend &nbsp;|&nbsp; React JS &nbsp;|&nbsp; Node JS
        </p>
      </div>
    </div>
  );
};

export default Home;
