import React from 'react';

interface Props {
  title: string;
  year: string;
  des: string;
  subtitle: string;
}

const SkillsItem = ({ title, year, subtitle, des }: Props) => {

  const containsHTML = (str: string) => /<[a-z][\s\S]*>/i.test(str);
  return( 
  <div className='mb-[4rem] md:mb-[8rem]'>
    <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
      {year}
    </span>
    <h1 className='mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[28px] text-white'>
      {title}, <span className='text-yellow-400' >{subtitle}</span>
    </h1>
    
    {containsHTML(des) ? (
        <div
          className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'
          dangerouslySetInnerHTML={{ __html: des }}
        />
      ) : (
    <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
      {des}
    </p>
      )}
  </div>
);
};

export default SkillsItem;
