import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';
import Flag from 'react-world-flags';

const Skills = () => {
  return (
  <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]' id='experiences'>
    <h1 className='heading'>
        Experiences <span className='text-yellow-400'>& Skills</span>
    </h1>
    <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
    <div>
        <SkillsItem title='Graphic Designer' year='2023 - 2024' des='mnfm,dnfsm,dfnf
        fdfdkfjdlkfjdkfdjlfkdjfd
        fdjkfjdklfjdlkfjdlfkjd'/>
        <SkillsItem title='Graphic Designer' year='2020 - 2022' des='mnfm,dnfsm,dfnf
        fdfdkfjdlkfjdkfdjlfkdjfd
        fdjkfjdklfjdlkfjdlfkjd'/>
        <SkillsLanguage skill1='Photoshop' skill2='Illustrator' skill3='Premiere' skill4='After Effects' level1='w-[60%]' level2='w-[88%]' level3='w-[75%]' level4='w-[80%]'/>
    </div>
    <div>
    <SkillsItem title='Graphic Designer' year='2023 - 2024' des='mnfm,dnfsm,dfnf
        fdfdkfjdlkfjdkfdjlfkdjfd
        fdjkfjdklfjdlkfjdlfkjd'/>
        <SkillsItem title='Graphic Designer' year='2020 - 2022' des='mnfm,dnfsm,dfnf
        fdfdkfjdlkfjdkfdjlfkdjfd
        fdjkfjdklfjdlkfjdlfkjd'/>
        <SkillsLanguage skill1='Photoshop' skill2='Illustrator' skill3='Premiere' skill4='After Effects' level1='w-[60%]' level2='w-[88%]' level3='w-[75%]' level4='w-[80%]'/>
    </div>
    </div>
    <div className='pt-[6rem]'>
        <h1 className='heading'>
          Customers <span className='text-yellow-400'>from</span>
        </h1>
        <div className='pt-[4rem] flex items-center flex-wrap justify-between w-[70%] mx-auto'>
          {/* Flags for "Customers from" section */}
          <Flag className='size-[7rem] m-2' code={'eg'} />
          <Flag className='size-[7rem] m-2' code={'sa'} />
          <Flag className='size-[7rem] m-2' code={'ae'} />
        </div>
      </div>
      <div className='pt-[7rem]'>
        <h1 className='heading'>
          Compa<span className='text-yellow-400'>nies</span>
        </h1>
        <div className='pt-[0.5rem] flex items-center flex-wrap justify-between mx-auto w-[80%]'>
          {/* Images for "Companies" section */}
          <img className='size-[5rem] m-2' src='/images/mostaql.jpg' />
          <img className='size-[10rem] m-2' src='/images/holla.png' />
          <img className='size-[10rem] m-2' src='/images/tknka.png' />
          <img className='size-[7rem] m-2' src='/images/gdsc.png' />
          <img className='size-[7rem] m-2' src='/images/huawei.png' />
          <img className='size-[6rem] m-2' src='/images/hult.png' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
