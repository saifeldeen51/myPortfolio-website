import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons'; // Import icons from Font Awesome\

const Footer = () => {
  return (
    <div className='pt-[0.5rem] pb-[2rem] bg-[#02050a]'>
        <div className='w-[80%] mt-[2rem] mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='flex justify-center md:mb-4 md:justify-start items-center'>
        <img className='opacity-20' src={"/images/logo1-01.png"} height={45} width={45} alt="Logo" />
        </div>
        <div className='text-[18px] mb-[2rem] pt-[1rem] md:mb-5 text-white opacity-20 text-center md:text-left'>
        Saif Eldeen Nosair © 2024 | All Rights Reserved
        </div>
        {/* Social Media Icons */}
<div className="flex justify-center md:justify-end space-x-4 text-white opacity-20">
          <a className=' hover:text-yellow-300'href="https://www.facebook.com/saif.eldeen.906" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a className=' hover:text-yellow-300' href="https://www.linkedin.com/in/saif-eldeen/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a className=' hover:text-yellow-300' href="https://www.behance.net/saif-eldeen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBehance} className="text-2xl" />
          </a>
        </div>
        </div>
        
    </div>
  );
};

export default Footer
