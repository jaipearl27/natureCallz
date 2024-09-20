import React from 'react';
import fotimg from '../../assets/nature-footer.jpg';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <img  
        src={fotimg} 
        alt="Nature footer" 
        className="object-cover w-full h-full absolute top-0 left-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[rgba(24,32,36,0.95)] to-[rgba(18,46,54,0.94)]" />

      {/* Logo Button */}
      <div className="absolute inset-x-0 top-16 md:top-10 flex items-center justify-center">
        <button className="text-4xl font-bold text-white tracking-wide transition transform hover:scale-110 hover:bg-[#46595E] cursor-pointer p-4 border border-gray-300">
          Natural
        </button>
      </div>

      {/* Navigation Links */}
      <div className="absolute inset-x-0 top-36 md:top-24 flex flex-col items-center  space-y-3">
  <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 sm:mt-20 mt-3">
    <a href="/" className="text-white hover:underline">Home</a>
    <a href="/about" className="text-white hover:underline">About</a>
    <a href="#" className="text-white hover:underline">Contact</a>
    <a href="/PrivacyPolicy" className="text-white hover:underline">Privacy Policy</a>
    <a href="#" className="text-white hover:underline">Terms of Use</a>
  </div>
</div>


      {/* Social Media Icons */}
      <div className="absolute bottom-16 md:bottom-4 w-full z-10 px-4 mt-5">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white border-2 border-gray-300 p-2 rounded hover:text-gray-400 hover:border-gray-400 transition duration-200">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white border-2 border-gray-300 p-2 rounded hover:text-gray-400 hover:border-gray-400 transition duration-200">
            <FaTwitter />
          </a>
          <a href="#" className="text-white border-2 border-gray-300 p-2 rounded hover:text-gray-400 hover:border-gray-400 transition duration-200">
            <FaInstagram />
          </a>
        </div>

        <div className="text-xs text-gray-400 text-center mb-10">
          <p>Powered by <a href="#" className="text-white hover:underline">Webflow</a></p>
        </div>
      </div>

      {/* Additional Footer Links */}
      <div className="flex flex-col items-center justify-center text-xs text-gray-400 space-y-2 mt-4 z-10 sm:flex-row sm:space-x-4 sm:space-y-0 absolute w-full bottom-4">
        <a href="#" className="hover:underline">Licenses</a>
        <a href="#" className="hover:underline">Changelog</a>
        <a href="#" className="hover:underline">Style Guide</a>
      </div>
    </div>
  );
};

export default Footer;
