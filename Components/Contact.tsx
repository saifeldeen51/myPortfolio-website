import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons'; // Import icons from Font Awesome\


const Contact = () => {
  return (
    
    <div id="contact" className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      
   <h1 className='heading'>
        Contact <span className='text-yellow-400'>Me</span>
    </h1>
      <div className="w-[80%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center justify-between space-x-30 ">
        {/* Email Form */}
        <form className="flex flex-col space-y-4">
          <input type="text" id="name" name="name" placeholder="Your Name" className="border border-[#55e6a5] rounded-md px-4 py-2" />
          <input type="email" id="email" name="email" placeholder="Your Email" className="border border-[#55e6a5] rounded-md px-4 py-2" />
          <input type="text" id="subject" name="subject" placeholder="Subject" className="border border-[#55e6a5] rounded-md px-4 py-2" />
          <textarea id="message" name="message" placeholder="Your Message" rows={4} className="border border-[#55e6a5] rounded-md px-4 py-2"></textarea>
          <button type="submit" className="bg-[#55e6a5] text-black px-[2rem] py-[1rem] duration-200 text-[18px] font-bold rounded-md hover:bg-yellow-400 transition-all items-center">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-20 text-[#55e6a5]">
          <a className=' hover:text-yellow-300' href="https://www.facebook.com/saif.eldeen.906" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-5xl" />
          </a>
          <a className=' hover:text-yellow-300' href="https://www.linkedin.com/in/saif-eldeen/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
          </a>
          <a className=' hover:text-yellow-300' href="https://www.behance.net/saif-eldeen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBehance} className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
    
  );
  
}

export default Contact;
