import React from 'react';
import Banner from '../components/Banner';
// Import any necessary assets or icons here
// import loggo from '../../assets/logo.png'; // Example import

const About = () => {
  return (
    <div>    
      <Banner img="/banner.jpg" />
      <div className="flex flex-col items-center justify-center mx-auto text-center px-4 mt-10 min-h-[500px]"> {/* Adjust height here */}
      <h1 className="text-3xl mb-4">About Us</h1>
      <div className="max-w-10xl mx-auto mb-10 ">
  <p className="font-sans text-zinc-500 text-base w-full md:w-4/5 mx-auto leading-relaxed">
    NatureCallz was created to make your search valuable not only for your own needs but also for planet Earth.
  </p>

  <p className="font-sans text-zinc-500 text-base w-full md:w-4/5 mx-auto leading-relaxed">
          By searching with NatureCallz, your search will be translated to do good for our planet.
        </p>
        <p className="font-sans text-zinc-500 text-base w-full md:w-4/5 mx-auto leading-relaxed">
          Some of the revenues will be shared with organizations related to the cause of preserving our planet green and clean.
        </p>
      </div>

   
    </div></div>
  );
};

export default About;
