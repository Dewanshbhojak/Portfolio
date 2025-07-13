import React from 'react';
import Navbar from './navbar';
import ParticlesComponent from './ParticlesComponent';


const Project = () => {
  return (
    <div className=" px-4 py-20 relative z-10 ">
      <Navbar/>
      <ParticlesComponent/>
      
         <main className="block flex flex-col items-center justify-center px-4 py-12 md:py-24 relative z-10">
        <h1 className="block text-7xl md:text-8xl font-thin mb-12 text-center">Project</h1>

        <ol className=" relative border-s hover:border-s-blue-700 border-gray-300 dark:border-gray-700 max-w-3xl w-full space-y-12 px-4">
          
          <li className="relative pl-8">
            <div className="absolute w-4 h-4 bg-gray-300 hover:border-blue-400 rounded-full -left-6 top-2 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
            <h3 className="text-xl md:text-2xl font-semibold hover:text-pink-700">Summer Internship</h3>
            <h4 className="text-lg md:text-xl text-gray-500 mt-1">Tecore Labs</h4>
            <p className="text-base mt-3 text-gray-600 dark:text-gray-400 text-justify">
              I contributed to a real-world project called Lugbee, focusing on creating and enhancing the user interface using HTML, CSS, and JavaScript. This experience helped me sharpen my front-end skills and gain practical insight into building responsive, user-friendly web applications.
            </p>
          </li>

          <li className="relative pl-8">
            <div className="absolute w-4 h-4 bg-gray-300 hover:border-blue-400 rounded-full -left-6 top-2 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
            <h3 className="text-xl md:text-2xl font-semibold hover:text-sky-700">Summer Internship</h3>
            <h4 className="text-lg md:text-xl text-gray-500 mt-1">C V Technologies</h4>
            <p className="text-base mt-3 text-gray-600 dark:text-gray-400 text-justify">
              I worked on the user interface of the company’s official website using HTML, CSS, and JavaScript. I was responsible for designing and improving web pages to ensure a clean, responsive, and user-friendly experience. This project strengthened my front-end development skills and deepened my understanding of usability in web design.
            </p>
          </li>

          <li className="relative pl-8">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-6 top-2 border border-white dark:border-gray-900 dark:bg-gray-600 hover:border-blue-400"></div>
            <h3 className="text-xl md:text-2xl font-semibold hover:text-green-700">Subject Matter Expert</h3>
            <h4 className="text-lg md:text-xl text-gray-500 mt-1">Admin Panel (Freelance)</h4>
            <p className="text-base mt-3 text-gray-600 dark:text-gray-400 text-justify">
              I collaborated with a company to develop an admin panel using the MERN Stack. I handled both front-end and back-end tasks, including building APIs and creating responsive interfaces. This experience enhanced my full-stack development skills and taught me how to manage real-world applications independently.
            </p>
          </li>

          <li className="relative pl-8">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-6 top-2 border border-white dark:border-gray-900 dark:bg-gray-600 hover:border-blue-400"></div>
            <h3 className="text-xl md:text-2xl font-semibold hover:text-gray-700">Subject Matter Expert</h3>
            <h4 className="text-lg md:text-xl text-gray-500 mt-1">Hackathon</h4>
            <p className="text-base mt-3 text-gray-600 dark:text-gray-400 text-justify">
              Participated in a college hackathon where I collaborated with a team to build a web application using HTML, CSS, and JavaScript. This experience honed my development, teamwork, and problem-solving skills under tight deadlines.
            </p>
          </li>

        </ol>
      </main>
    </div>
  );
};

export default Project;
