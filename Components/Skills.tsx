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
    <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-start'>
    <div>
  <SkillsItem title='Graphic and Motion Designer' subtitle='Tknka' year='Feb 2024 - Present' des={`
<ul>
    <li><strong>Responsible</strong> for all designs of the campaigns.</li>
    <li><strong>Provided</strong> branding and identity and all design services to the company’s partners.</li>
    <li><strong>Motion</strong> graphics designs and video editing.</li>
    <li><strong>Increased</strong> the company's customers by 5x.</li>
    <li><strong>Increased</strong> interaction on social media by 12x.</li>
</ul>
`}
/>
        <SkillsItem title='Ambassador' subtitle='Huawei'  year='Oct 2022 - Apr 2024' des={`
<ul>
    <li><strong>Acted</strong> as a link between my university's management, students and the Huawei ICT Academy.</li>
    <li><strong>Provided</strong> training in AI, Cloud, etc. fields for all students at Cairo university and other universities.</li>
    <li><strong>Represented</strong> Huawei in a multitude of settings and assisting in content creation (ie. writing blogs, etc.).</li>
    <li><strong>Generated</strong> brand awareness through word-of-mouth.</li>
    <li><strong>Provided</strong> feedback and insight on new services.</li>
</ul>
`}
  />

<SkillsItem title='Creative Coordinator' subtitle='Hult Prize'  year='Nov 2023 - Feb 2024' des={`
<ul>
    <li><strong>Created</strong> social media designs and videos for events.</li>
    <li><strong>Supervision</strong> of projects.</li>
    <li><strong>Distributed</strong> tasks to members of the committee.</li>
</ul>
`}
  />


        <SkillsLanguage skill1='Photoshop' skill2='Illustrator' skill3='Social Media' skill4='Audition' skill5='Leadership' level1='w-[80%]' level2='w-[90%]' level3='w-[70%]' level4='w-[70%]' level5='w-[85%]'/>
    </div>
    <div>

<SkillsItem title='Graphic Designer' subtitle='Freelancer'  year='Jul 2023 - Present' des={`
<ul>
    <li><strong>Completed</strong> nearly 20 projects in graphic and motion design such as logos, social media designs, motion ads, and teaching motion graphics sessions.</li>
    <li><strong>Had</strong> clients from Saudi Arabia, Egypt, and others.</li>
    <li><strong>One</strong> of the best freelancers on the platform because my rate is 5 stars which is a very high rate.</li>
</ul>
`}
  />

<SkillsItem title='Head of Graphic Designers' subtitle='Google DSC'  year='Sep 2023 - July 2024' des={`
<ul>
    <li><strong>Created</strong> social media designs and videos for events.</li>
    <li><strong>Provided</strong> training for university students to teach graphics and motion graphics.</li>
    <li><strong>Obtained</strong> the title of the best during the year 2023.</li>
    <li><strong>Distributed</strong> tasks to members of the committee.</li>
    <li><strong>Supervision</strong> of projects.</li>

    <li><strong>Presented</strong> sessions about graphic design fields.</li>
    <li><strong>Provided</strong> more than workshop.</li>
</ul>
`}
  />

<SkillsItem title='Motion Graphic Designer' subtitle='ICPC'  year='Jan 2023 - Sep 2023' des={`
<ul>
    <li><strong>Produced</strong> motion design videos, driving engagement to page views by 30%.</li>
    <li><strong>Increased</strong> views on videos by 3x.</li>
</ul>
`}
  />

        <SkillsLanguage skill1='After Effects' skill2='Premiere Pro' skill3='Content Creation' skill4='Presentation Skills' skill5='Microsoft Office' level1='w-[75%]' level2='w-[85%]' level3='w-[70%]' level4='w-[90%]' level5='w-[80%]'/>
    </div>
    </div>
    <div className='pt-[6rem]'>
        <h1 className='heading'>
          Customers <span className='text-yellow-400'>from</span>
        </h1>
        <div className='pt-[4rem] flex items-center flex-wrap justify-between w-[70%] mx-auto'>
          {/* Flags for "Customers from" section */}
          <Flag data-aos='fade-right' className='size-[7rem] m-2' code={'eg'} />
          <Flag data-aos='zoom-in' data-aos-delay='100' className='size-[7rem] m-2' code={'sa'} />
          <Flag data-aos='fade-left' data-aos-delay='200' className='size-[7rem] m-2' code={'ae'} />
        </div>
      </div>
      <div className='pt-[7rem]'>
        <h1 className='heading'>
          Compa<span className='text-yellow-400'>nies</span>
        </h1>
        <div className='pt-[0.5rem] flex items-center flex-wrap justify-between mx-auto w-[80%]'>
          {/* Images for "Companies" section */}
          <img data-aos='fade-up' className='size-[5rem] m-2' src='/images/companies/mostaql.jpg' />
          <img data-aos='fade-up' data-aos-delay='100' className='size-[10rem] m-2' src='/images/companies/holla.png' />
          <img data-aos='fade-up' data-aos-delay='200' className='size-[10rem] m-2' src='/images/companies/tknka.png' />
          <img data-aos='fade-up' data-aos-delay='300' className='size-[7rem] m-2' src='/images/companies/gdsc.png' />
          <img data-aos='fade-up' data-aos-delay='400' className='size-[7rem] m-2' src='/images/companies/huawei.png' />
          <img data-aos='fade-up' data-aos-delay='500' className='size-[6rem] m-2' src='/images/companies/hult.png' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
