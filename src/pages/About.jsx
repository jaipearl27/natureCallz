import React from "react";

import loggo from "../assets/loggo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Banner from "../components/Banner";
function About() {
  return (
    <>
    <Banner img="/banner.jpg"/>
      
      <div className="flex flex-col items-center justify-center mx-auto text-center line-height px-4 mt-10">
        <h1 className="text-2xl  mb-4">About Us</h1>
        <div className="max-w-5xl mb-20">
          <p className="font-sans text-zinc-500">
            NatureCallz was created in order to make your search valuable not
            only for your own needs but also for planet earth.
            <p className="font-sans text-zinc-500">
              By searching with NatureCallz your search will be translated to do
              good for our planet.
            </p>
            <p className="font-sans text-zinc-500">
              Some of the revenues will be shared with organizations related to
              the cause of preserving our planet green and clean.
            </p>
          </p>
        </div>
        <div className="container flex flex-row align-center justify-center gap-60 mb-10">
          <div>
            <img src={loggo} alt="" className="w-24 h-24" />
          </div>
          <div className="text-[#000] flex flex-col text-start">
            <h1 className="text-2xl mb-5 font-semibold font-Work Sans">
              Site Map
            </h1>
            <div>
              <div className="font-sans text-zinc-500">About</div>
              <div className="font-sans text-zinc-500">Contact</div>
              <div className="font-sans text-zinc-500">Terms of Use</div>
              <div className="font-sans text-zinc-500">Privacy</div>
              <div />
            </div>
          </div>
          <div className="text-[#000]">
            <h1 className="text-2xl mb-5 font-semibold"> Resources</h1>
            <div className="font-sans text-zinc-500">Help</div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 bg-[#40C047] p-2
   rounded-full"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 bg-[#40C047] p-2 rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 bg-[#40C047] p-2 rounded-full"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-5 mb-5">
  <div>
    Copyright <span className="text-[#40C047]" >@NatureCallz</span> All Rights Reserved
  </div>
  <div>
    <a href="#" className="hover:underline">Terms of Use</a> | 
    <a href="#" className="hover:underline">Privacy Policy</a>
  </div>
</div>

      </div>
    </>
  );
}

export default About;
