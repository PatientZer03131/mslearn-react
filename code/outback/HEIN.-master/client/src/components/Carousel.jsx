import React, { useState } from 'react';

import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Link } from 'react-scroll';

const CAROUSEL_DATA = [
  
  {
    url: 'https://images.unsplash.com/photo-1597192535374-aeba30156218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
   {
    url: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80',
  },
  {
  url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  }
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % CAROUSEL_DATA.length;
    });
  };
  const decrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
    });
  };
  return (
    <section className='h-carousel relative bg-red-300'>
      <div
        onClick={decrementIndex}
        className='w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 left-4 cursor-pointer'
      >
        <ArrowLeft className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
      </div>
      <img
        src={CAROUSEL_DATA[currentIndex].url}
        className='w-full h-full object-cover'
      />
      <div className='absolute h-full w-full top-0 left-0 bg-black/30'></div>
      <div className='absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center text-white uppercase px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-8'>CARAVAN PARKS</h1>
        <p className='tracking-wider mb-16 text-md md:text-xl'>
        </p>
        <Link
          to='categories'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className='border p-3 bg-white text-black text-lg hover:bg-teal-600 hover:border-none hover:text-white transition ease-out	duration-500'>
            Find Now <ArrowRight />
          </button>
        </Link>
      </div>,
      <div
        onClick={incrementIndex}
        className='w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 right-4 cursor-pointer'
      >
        <ArrowRight className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
      </div>
    </section>
  );
};

export default Carousel;
