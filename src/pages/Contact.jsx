import React from 'react'
import Banner from '../components/Banner';
function Contact() {
    return (
        <div>    
          <Banner img="/banner.jpg" />
          <div className="flex flex-col items-center justify-center mx-auto text-center px-4 mt-10 min-h-[500px]"> {/* Adjust height here */}
          <h1 className="text-3xl mb-4">Contact Us</h1>
          <div className="max-w-10xl mx-auto mb-10 ">
      <p className="font-sans text-zinc-500 text-base w-full md:w-4/5 mx-auto leading-relaxed">
      Please feel free to contact us anytime on any query or questions you might have. We will answer as soon as possible

support@naturecallz.com
      </p>

          </div>
    
    
      
        </div></div>
      );
    };

export default Contact
