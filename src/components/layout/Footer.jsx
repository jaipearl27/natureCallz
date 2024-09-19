import React from 'react';
import fotimg from '../../assets/nature-footer.jpg'; // Ensure the path is correct for your project
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      {/* Background Image */}
      <img  
        src={fotimg} 
        alt="Nature footer" 
        className="object-cover w-full h-full absolute top-0 left-0"
      />

      <div 
        className="absolute inset-0 z-0 bg-gradient-to-t from-[rgba(24,32,36,0.95)] to-[rgba(18,46,54,0.94)]"
      />

<div className="absolute inset-x-0 top-10 flex items-center justify-center mt-4">
<button className="text-4xl font-bold text-white tracking-wide transition transform hover:scale-110 hover:bg-[#46595E] cursor-pointer p-4border border-gray-300 ">
  Natural
</button>

</div>
<hr className='border-b-2 border-b-emerald-900 w-20' />

      <div className="absolute bottom-4 w-full z-10 px-4">
    <div className="flex justify-center mb-2 space-x-4">
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


        <div className="text-xs text-gray-400 text-center">
          <p>Powered by <a href="#" className="text-white hover:underline">Webflow</a></p>
        </div>
      </div>

  
      <div className="absolute bottom-4 right-4 text-xs text-gray-400 space-x-4 z-10">
        <a href="#" className="hover:underline">Licenses</a>
        <a href="#" className="hover:underline">Changelog</a>
        <a href="#" className="hover:underline">Style Guide</a>
      </div>
    </div>
  );
};

export default Footer;
