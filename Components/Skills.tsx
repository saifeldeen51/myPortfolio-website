import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

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
  </div>
  );
};

export default Skills;
