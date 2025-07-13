import React from 'react';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Navbar from './navbar';
import ParticlesComponent from './ParticlesComponent';

const Contact = () => {
  return (
    <div className="min-h-screen w-full  text-white px-4">
      <ParticlesComponent />
      <Navbar />

      <main className="px-4 py-20 relative z-10">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin mb-10 text-center">
          Contact
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* Contact Form */}
          <div className="border-2 border-stone-500 hover:border-blue-500 transition duration-300 rounded-2xl p-8 max-w-md w-full bg-glass shadow-lg">
            <p className="text-lg sm:text-xl text-center mb-5 text-gray-300">
              Let's create new things with your ideas and my creativity.
            </p>
            <hr className="mb-5 border-gray-500" />

           <form action="https://formsubmit.io/send" method="POST" className="flex flex-col items-center w-full max-w-md mx-auto">
  
  <input
    type="text"
    name="name"  // ✅ Added name
    placeholder="Your Name"
    className="border-2 border-stone-500 w-full h-12 rounded-xl px-4 text-lg font-thin mb-4 focus:outline-none focus:border-blue-500"
    required
  />

  <input
    type="email"
    name="email"  // ✅ Added name
    placeholder="Your Email"
    className="border-2 border-stone-500 w-full h-12 rounded-xl px-4 text-lg font-thin mb-4 focus:outline-none focus:border-blue-500"
    required
  />

  <textarea
    name="message"  // ✅ Renamed to "message" (more standard)
    placeholder="Enter your Message"
    className="border-2 border-stone-700 w-full h-24 rounded-xl px-4 py-2 text-lg font-thin mb-4 focus:outline-none focus:border-blue-500"
    required
  ></textarea>

  {/* Optional Hidden Fields */}
  <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you.html" />
  <input type="hidden" name="_captcha" value="false" />

  <button
    type="submit"
    className="border-2 border-blue-500 bg-blue-500 text-white w-full h-12 rounded-xl hover:border-pink-500 hover:bg-pink-500 transition duration-300"
  >
    Send
  </button>

</form>

          </div>

          {/* Social Icons */}
          <div className="text-center">
            <p className="text-2xl text-gray-400 mb-6">Find me on:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-4xl sm:text-5xl text-gray-400">
              <a
                href="https://www.instagram.com/dewansh_246j25"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/dewansh-bhojak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:dewanshbhojak123@gmail.com"
                className="hover:text-red-500 transition duration-300"
              >
                <MdEmail />
              </a>
              <a
                href="tel:+919672597891"
                className="hover:text-green-500 transition duration-300"
              >
                <FaPhone/>
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;
