import { Bars3Icon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({openNav}) => {

  return (
  <div className='w-[100] sticky z-[10000] top-0 h-[12vh] bg-[#09101a] shadow-md'>
        

    <div className='flex items-center justify-between mx-auto w-[90%] h-[100%]'>
    <Link to='home' smooth={true} duration={500} spy={true} offset={-70}>
        <img className='cursor-pointer' src={"/images/logo1-01.png"} height={60} width={60} alt="Logo" /></Link>
    <div className='flex-[0.5]'></div>
    <Link to='about' smooth={true} duration={500} spy={true} offset={-70}>
    <div className="nav-link">About</div></Link>
    <Link to='services' smooth={true} duration={500} spy={true} offset={-70}>
    <div className="nav-link" >Services</div></Link>
    <Link to='experiences' smooth={true} duration={500} spy={true} offset={-70}>
    <div className="nav-link" >Experiences</div></Link>
    <Link to='projects' smooth={true} duration={500} spy={true} offset={-70}>
    <div className="nav-link">Projects</div></Link>
    <Link to='awards' smooth={true} duration={500} spy={true} offset={-70}>
    <div className="nav-link">Awards</div></Link>
    <Link to='contact' smooth={true} duration={500} spy={true} offset={-70}>
    <div className="nav-link">Contact</div></Link>
  
{/* Social Media Icons */}
<div className="flex space-x-4 text-white opacity-90">
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

        
    <div onClick={openNav}>
      <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
    </div>
    </div>
    </div>
  );
};
export default Nav;
