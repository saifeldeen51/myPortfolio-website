import Image from 'next/image';
import React, { useRef,useState } from 'react';
import ReactPlayer from 'react-player';
import { PlayIcon } from '@heroicons/react/20/solid'; // Import PlayIcon from Hero Icons

const Projects = () => {

  // Initialize an array to track the visibility of each video
  const [showVideos, setShowVideos] = useState(Array(21).fill(false));

  // Function to handle video click and toggle visibility
  const handleVideoClick = (index: number) => {
    const updatedVisibility = showVideos.map((value, i) => (i === index ? !value : false));
    setShowVideos(updatedVisibility);
  };


  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]' id='projects'>
      <h1 className='heading'>
        Pro<span className='text-yellow-400'>jects</span>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      {/*Graphic Design Section*/}
      
      <h1 className='heading'>
        Graphic<span className='text-yellow-400'> Design</span>
      </h1>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>

      <div data-aos='fade-up' className='cursor-pointer group'>
  <div className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    <a href="/images/deltakon.pdf" target="_blank"> 
      <Image src='/images/projects/graphic/tknka1.png' alt='portfolio' layout='fill' className='object-contain'/>
    </a>
  </div>
  <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Project Title</h2>
</div>


        <div >
        <div data-aos='fade-up' data-aos-delay='200' className='cursor-pointer group'>
  <div className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    <a href="/images/deltakon.pdf" target="_blank"> 
      <Image src='/images/projects/graphic/tknka2.png' alt='portfolio' layout='fill' className='object-contain'/>
    </a>
  </div>
  <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Project Title</h2>
</div>
        </div>



        <div >
        <div data-aos='fade-up' data-aos-delay='400' className='cursor-pointer group'>
  <div className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
    <a href="/images/deltakon.pdf" target="_blank"> 
      <Image src='/images/projects/graphic/tknka3.png' alt='portfolio' layout='fill' className='object-contain'/>
    </a>
  </div>
  <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Project Title</h2>
</div>
        </div>



      {/*Motion Graphic Section*/}

      
        </div>
        <div className='w-[80%] pt-[5rem] text-center mx-auto '>
        <br></br>
        <h1 className='heading'>
        Motion<span className='text-yellow-400'> Graphic</span>
      </h1>
      <br></br>
      <div className='pt-[3rem] justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
        
        
        
        <div>
        <div data-aos='fade-up' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(0)}>
          {showVideos[0] ?(
          <ReactPlayer url='/videos/geometric-shapes.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/geo.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Geometric Shapes</h2>
        </div>



        <div>
        <div data-aos='fade-up' data-aos-delay='100' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(1)}>
          {showVideos[1] ?(
          <ReactPlayer url='/videos/tamer.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/tamer.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Tamer Hosny - Ahla Kalam</h2>
        </div>



        <div>
        <div data-aos='fade-up' data-aos-delay='200' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(2)}>
          {showVideos[2] ?(
          <ReactPlayer url='/videos/icpc.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/icpc.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>ICPC Top 10 - GIF</h2>
        </div>


        <div>
        <div data-aos='fade-up' data-aos-delay='300' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(3)}>
          {showVideos[3] ?(
          <ReactPlayer url='/videos/logo.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/logo.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>My Logo Animation</h2>
        </div>



        <div>
        <div data-aos='fade-up' data-aos-delay='400' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(4)}>
          {showVideos[4] ?(
          <ReactPlayer url='/videos/meza.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/meza.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Meza - Skip AD</h2>
        </div>




        <div>
        <div data-aos='fade-up' data-aos-delay='450' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(5)}>
          {showVideos[5] ?(
           <img
           src="/videos/tknkaapp1.gif"
           alt="Animated GIF"
           className="object-cover rounded-lg w-full h-full"/>
          ):(
            <>
            <Image src='/images/thumb/tknkaapp1.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>TKNKA App - UI Animation</h2>
        </div>


        <div>
        <div data-aos='fade-up' data-aos-delay='500' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(6)}>
          {showVideos[6] ?(
           <img
           src="/videos/tknkaapp2.gif"
           alt="Animated GIF"
           className="object-cover rounded-lg w-full h-full"/>
          ):(
            <>
            <Image src='/images/thumb/tknkaapp2.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>TKNKA App - UI Animation</h2>
        </div>



        <div>
        <div data-aos='fade-up' data-aos-delay='550' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(7)}>
          {showVideos[7] ?(
           <img
           src="/videos/tknkaapp3.gif"
           alt="Animated GIF"
           className="object-cover rounded-lg w-full h-full"
           />
          ):(
            <>
            <Image src='/images/thumb/tknkaapp3.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>TKNKA App - UI Animation</h2>
        </div>




        <div>
        <div data-aos='fade-up' data-aos-delay='600' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(8)}>
          {showVideos[8] ?(
            <img
            src="/videos/deltakon.gif"
            alt="Animated GIF"
            className="object-cover rounded-lg w-full h-full"
            />
          ):(
            <>
            <Image src='/images/thumb/deltakon.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Deltakon - Logo Animation</h2>
        </div>




        <div>
        <div data-aos='fade-up' data-aos-delay='650' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(9)}>
          {showVideos[9] ?(
          <ReactPlayer url='/videos/tknka-intro.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/tknka-intro.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>TKNKA - Motion Teaser</h2>
        </div>


        <div>
        <div data-aos='fade-up' data-aos-delay='700' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(10)}>
          {showVideos[10] ?(
          <ReactPlayer url='/videos/tknka-services.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/tknka-services.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>TKNKA Services</h2>
        </div>



        <div>
        <div data-aos='fade-up' data-aos-delay='750' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(11)}>
          {showVideos[11] ?(
          <ReactPlayer url='/videos/tknka-teaser.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/tknka-teaser.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>TKNKA Journey</h2>
        </div>




        <div>
        <div data-aos='fade-up' data-aos-delay='800' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(12)}>
          {showVideos[12] ?(
          <ReactPlayer url='/videos/ramadan.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/ramadan.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>Ramadan - Skip AD </h2>
        </div>




        <div>
        <div data-aos='fade-up' data-aos-delay='850' className='transform group-hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]' onClick={() => handleVideoClick(13)}>
          {showVideos[13] ?(
          <ReactPlayer url='/videos/portfolio.mp4' controls={true} width='100%' height='100%' config={{
            file: {
              attributes: {
                controlsList: 'nodownload noplaybackrate', // Disable download button
              },
            },
          }}/>
          ):(
            <>
            <Image src='/images/thumb/portfolio.png' alt='Video Thumbnail' layout='fill' className='object-cover rounded-lg'/>
            <div className="absolute inset-0 flex justify-center items-center">
                  <PlayIcon className="h-16 w-16 text-[#55e6a5] opacity-90 hover:opacity-100 hover:text-yellow-400 transition-opacity" />
            </div>
            </>
          )}     
          </div>
          <br></br>
          <h2 className='transform group-hover:-translate-y-6 hover:text-yellow-400 transition-all duration-200 text-center text-[#55e6a5] text-xl md:text-2xl'>My Portfolio Teaser</h2>
        </div>




        </div>
        <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
  );
};

export default Projects;