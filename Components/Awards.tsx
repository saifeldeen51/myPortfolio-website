import React from 'react';

const Awards = () => {
  return (
    <div id="awards" className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <h1 className='heading text-center'>
        Awa<span className='text-yellow-400'>rds</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[6rem] grid gap-[4rem] md:flex md:flex-col md:items-center">
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>Huawei Future Star</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
            Was selected as a <span className='text-yellow-400'><strong>"Future Star"</strong></span> at Huawei ICT Academy in the ambassadors program among 45 ambassadors.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>Huawei Leader</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
          Was selected as a <span className='text-yellow-400'><strong>"Leader of The Month"</strong></span> at Huawei ICT Academy in the ambassadors program.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>1st</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
            Won 1st place in <span className='text-yellow-400'><strong>short stories</strong></span> competition at the faculty for the story <span className='text-yellow-400'><strong>"Life of Tiktokers"</strong></span>.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>2nd</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
            Won 2nd place in <span className='text-yellow-400'><strong>short stories</strong></span> competition at the faculty for story <span className='text-yellow-400'><strong>"Mesh Makani"</strong></span>.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>2nd</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
          Won 2nd place in <span className='text-yellow-400'><strong>posters</strong></span> competition at <span className='text-yellow-400'><strong>Cairo University</strong></span>.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>3rd</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
            Won 3rd place in <span className='text-yellow-400'><strong>motion graphics</strong></span> Competition at <span className='text-yellow-400'><strong>Cairo University</strong></span>.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>The Film Festivals</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
          Nomination of the film <span className='text-yellow-400'><strong>"Mesh Makani"</strong></span> to be shown in more than one global film festival in <span className='text-yellow-400'><strong>Syria</strong></span> and <span className='text-yellow-400'><strong>Libya</strong></span>.
          </p>
        </div>
        <div className="award-item flex flex-col items-center">
          <h3 className="flex items-center justify-center hover:text-yellow-400 text-[#55e6a5] mb-[1rem]">
            <span className="animate-bounce inline-block text-[24px]"><strong>1st</strong></span>
          </h3>
          <p className="text-slate-300 text-[17px] text-center px-[2rem]">
            Won 1st place in <span className='text-yellow-400'><strong>short films</strong></span> competition 'narrative film' at the faculty for the movie <span className='text-yellow-400'><strong>"Mesh Makani"</strong></span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
