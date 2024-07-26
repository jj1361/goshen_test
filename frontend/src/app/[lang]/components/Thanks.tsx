'use client'

import Image from 'next/image';
import { getStrapiMedia } from '../utils/api-helpers';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Thanks {
  data: {
    media: Media;
    confirmation: string;
    redirect: string;
  };
}

interface Media {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

const Thanks: React.FC<Thanks> = ({ data }) => {
  const logo = getStrapiMedia(data.media.data.attributes.url);
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      window.location.href = 'https://goshengroup.net'; 
    }
  }, [seconds]);

  return (
    <div className='flex flex-col place-items-center gap-y-10'>
      <Image
        src={logo || ''}
        width={200}
        height={200}
        alt='additional lodging picture'
        sizes='(min-width:40px) 384px, calc(95.5vw-20px)'
        className=' w-3/4 md:w-1/4 h-auto mx-auto'
      />
      <div className='bg-primary text-xl space-y-10 m-3 p-3 xl:p-10 xl:w-2/3 xl:mx-auto rounded-md text-center text-white xl:text-4xl xl:space-y-7 xl:leading-tight xl:mb-10'>
        <p className='text-white'>{data.confirmation}</p>
        <p id='timer'>{`${data.redirect}${seconds} seconds to be automatically redirected to the homepage)`}</p>
        <p>Or you can <Link className='bg-white text-primary py-2 px-2 rounded-md font-semibold' href="http://goshengroup.net">click here</Link> to return to the homepage</p>
      </div>
    </div>
  );
};

export default Thanks;
