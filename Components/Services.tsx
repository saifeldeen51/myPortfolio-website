import { PhotoIcon, TvIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Services = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[5rem]' id='services'>
        <p className='heading'>
            My <span className='text-yellow-400'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div data-aos='fade-right'>
              <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <PhotoIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Social Media Designs
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Social media campaign designs and creative ideas
                </p>
              </div>
            </div>
            <div data-aos='zoom-in' data-aos-delay='300'>
              <div className='bg-[#2459A2] hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                <TvIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Motion Graphic Videos
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Social media campaign designs and creative ideas
                </p>
              </div>
            </div>
            <div data-aos='fade-left' data-aos-delay='500'>
              <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <PhotoIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Social Media Designs
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Social media campaign designs and creative ideas
                </p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Services;
