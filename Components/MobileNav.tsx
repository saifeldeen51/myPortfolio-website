import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-scroll/modules';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]"; // Adjusted for clarity

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <Link to='about' smooth={true} duration={500} offset={-70} spy={true} onClick={closeNav}>
                <div className='nav-link-mobile'>About</div></Link>
                <Link to='services' smooth={true} duration={500} offset={-70} spy={true} onClick={closeNav}>
                <div className='nav-link-mobile'>Services</div></Link>
                <Link to='experiences' smooth={true} duration={500} offset={-70} spy={true} onClick={closeNav}>
                <div className='nav-link-mobile'>Experiences</div></Link>
                <Link to='projects' smooth={true} duration={500} offset={-70} spy={true} onClick={closeNav}>
                <div className='nav-link-mobile'>Projects</div></Link>
                <Link to='contact' smooth={true} duration={500} offset={-70} spy={true} onClick={closeNav}>
                <div className='nav-link-mobile'>Contact</div></Link>
            </div>
            <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'>
                <XMarkIcon />
            </div>
        </div>
    );
};


export default MobileNav;