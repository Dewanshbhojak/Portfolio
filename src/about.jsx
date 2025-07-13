import React from 'react';
import Navbar from './navbar';
import ParticlesComponent from './ParticlesComponent';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs ,FaDownload} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import './style.css'

const About = () => {
  return (
    <div className=" min-h-screen min-w-screen text-white " >
    
       
        <ParticlesComponent />
         <Navbar />
      

      <main className="block px-4 py-20 relative z-10 ">

        {/* ABOUT Heading */}
        <h1 className=" text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-thin my-10 mt-10 flex flex-col items-center justify-center">
          ABOUT
        </h1>

        {/* Intro Section */}
        <section className="block max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl italic mb-4">Hello!</h2>
          <p className="text-xl sm:text-2xl md:text-3xl italic mb-2">I'm <span className="text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-blue-500 to-sky-200">Dewansh Bhojak</span></p>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            A passionate Frontend Developer skilled in React.js, Tailwind CSS, and JavaScript. I enjoy building responsive, user-friendly web applications and continuously learning new technologies.
          </p>
          <p className='text-lg sm:text-xl md:text-2xl font-light'> my journey in web development started 2 year ago, and since then, i've been constantly learning and evolving with the ever-changing landscape of web technologies.</p>
          <button className='mt-5 border-4 rounded-3xl bg-glass text-white border-white h-15 w-80 hover:border-pink-900'><a 
        href="/DewanshBhojak_frontend development.pdf"  // Put your actual resume path here (public folder recommended)
        download="Dewansh_Bhojak_Resume.pdf"
        className='text-3xl font-thin flex justify-center items-center'
      >
      
        Download Resume <FaDownload className='ml-7 text-2xl hover:text-pink-700'/>
      </a></button>
        </section>
<div className='flex flex-col items-center justify-center'>
        <hr className="w-screen max-w-4xl border-gray-500 mb-16 " />
</div> 
    
    <section className="block max-w-4xl  mx-auto mb-16 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">Skills</h2>
          
        </section>
       
 <motion.div
      animate={{ x: ['-30%', '20%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 8,
        ease: 'linear',
      }}
      className="p-4 w-400 sm:w-200 md:w-250 m-10 rounded-lg overflow-hidden"
    >
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12">
        
        <div className="flex flex-col  items-center text-base sm:text-lg">
          <FaHtml5 className="text-orange-500 text-5xl sm:text-6xl md:text-7xl" />
          <div className="mt-3">HTML</div>
        </div>

        <div className="flex flex-col  items-center text-base sm:text-lg">
          <FaCss3Alt className="text-blue-500 text-5xl sm:text-6xl md:text-7xl" />
          <div className="mt-3">CSS</div>
        </div>

        <div className="flex flex-col   items-center text-base sm:text-lg">
          <FaJs className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl" />
          <div className="mt-3">JavaScript</div>
        </div>

        <div className="flex flex-col  items-center text-base sm:text-lg">
          <FaReact className="text-cyan-400 text-5xl sm:text-6xl md:text-7xl" />
          <div className="mt-3">React</div>
        </div>

        <div className="flex flex-col items-center text-base sm:text-lg">
          <FaNodeJs className="text-green-600 text-5xl sm:text-6xl md:text-7xl" />
          <div className="mt-3">Node Js</div>
        </div>

        <div className="flex flex-col  items-center text-base sm:text-lg">
          <SiTailwindcss className="text-sky-400 text-5xl sm:text-6xl md:text-7xl" />
          <div className="mt-3">Tailwind CSS</div>
        </div>

      </div>
    </motion.div> <br></br>
    <div className='flex flex-col items-center justify-center'>
        <hr className="w-screen max-w-4xl border-gray-500 mb-16 " />
</div>
        
        <section className="block max-w-4xl mx-auto mb-16  ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">Education</h2>
          <div>
          <div className="text-lg sm:text-xl md:text-2xl font-light mb-4 flex justify-center items-center">
            <p className="font-medium">Government Engineering College of Bikaner</p>
            <p className="font-medium">S M P Govt Fort SR SEC School Bikaner</p>
          </div>
          <div className="text-sm sm:text-base md:text-lg text-gray-400 font-thin flex  ">
           <div className='sm:mr-35 md:mr-45 mr-35' > <p>2021 - 2025</p>
            <p>B.Tech CSE</p>
            <p>CGPA: 7.96</p>
            </div>
            <div className='sm:ml-40 md:ml-50 ml-35'> <p>2020 - 2021</p>
            <p>PCM</p>
            <p>Percentage: 78%</p></div>
          </div>
          
          </div>
          
        </section>
<div className='flex flex-col items-center justify-center'> 
        <hr className="w-full max-w-4xl border-gray-500 mb-16" />
</div>
        {/* Certifications Section */}
        <section className="block max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">Certifications</h2>
          <ul className="text-sm sm:text-base md:text-lg text-gray-400 font-normal space-y-3">
            <li>• Tata Group - Web Development Job Simulation (Forage)</li>
            <li>• Frontend Development for Beginners (Udemy)</li>
            <li>• Summer Internship - Frontend Dev (Real Time Project) - Tecore Labs</li>
            <li>• Summer Internship - React.js & Tailwind CSS - CV Technologies</li>
            <li>• Moreton Bay Regional Council Web Development Simulation (Forage)</li>
          </ul>
        </section>
<div className='flex flex-col items-center justify-center'>
        <hr className="w-full max-w-4xl border-gray-500" />
        </div>
        

      </main>
    </div>
  );
};

export default About;
