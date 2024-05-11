import React, { useEffect, useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  let timeout: NodeJS.Timeout;

  // Function to handle scrolling
  const handleScroll = () => {
    setIsVisible(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the timeout duration as needed

    if (window.scrollY > 600) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };

  // Effect to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout); // Clear the timeout when component unmounts
    };
  }, []);

  const goToBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {!isAtTop && isVisible && (
        <div className={'top-btn'} onClick={goToBtn}>
          <ArrowUpCircleIcon className='text-[#55e6a5] hover:text-yellow-400 size-[50px]' />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
