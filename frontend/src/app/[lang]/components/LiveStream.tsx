import React from 'react';
import { getStrapiMedia } from '../utils/api-helpers';
import Image from 'next/image';
import Link from 'next/link';
import { url } from 'inspector';

export interface LiveProps {
  data: {
    liveToggle: boolean;
    title: string;
    onair: string;
    media: Media;
    schedule: RichTextProps;
    live_image: Media;
  };
}

interface RichTextProps {
  data: {
    body: string;
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

const LiveStream = ({ data }: LiveProps) => {

  //'http://localhost:1337/uploads/WeLive.jpeg'
  let were_live = false;
  let day = new Date().getDay();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  if (
    (day === 5 && hour === 19 && minute >= 25) ||
    (day === 5 && hour === 20) ||
    (day === 5 && hour === 21 && minute <= 45) ||
    (day === 6 && hour === 10 && minute >= 45) ||
    (day === 6 && hour === 11) ||
    (day === 6 && hour === 12) ||
    (day === 6 && hour === 13) ||
    (day === 6 && hour === 14 && minute <= 30) ||
    data.liveToggle
  ) {
    were_live = true;
  } else {
    were_live = false;
  }

  const imgUrl = getStrapiMedia(data.media.data.attributes.url);
  const imgUrlLive = getStrapiMedia(data.live_image.data.attributes.url);
  return (
    <section
      className='py-20 violet-950 bg-violet-950 text-gray-100 m:py-12 lg:px-40 '
      id='livestream'
    >
      {were_live ? (

<section className='flex flex-col items-center'>
<h1 className='text-4xl font-bold lg:text-5xl text-center mb-10'>
  {'LIVE STREAMING NOW!'}
</h1>

<div className='grid xl:grid-cols-2 lg:items-center  md:grid-cols-1 '>
  <Link
    href='https://zoom.us/j/96666326977?from=join#success'
    className='flex justify-center'
  >
    <Image src={ imgUrlLive|| ''} alt='' width={450} height={450} />
  </Link>
  <div
    className='flex justify-center mt-10 xl:mt-0 font-bold mb-4'
    dangerouslySetInnerHTML={{ __html: data.schedule }}
    
  />
   <h2 className='flex justify-center mt-10 xl:mt-0 font-bold mb-4 text-4xl text-yellow-400 animate-pulse '>{data.onair}</h2>
</div>
</section>
        
      ) : (
        <section className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold lg:text-5xl text-center mb-10'>
            {data.title}
          </h1>

          <div className='grid xl:grid-cols-2 lg:items-center  md:grid-cols-1 '>
            <Link
              href='https://zoom.us/j/96666326977?from=join#success'
              className='flex justify-center'
            >
              <Image src={imgUrl || ''} alt='' width={350} height={350} />
            </Link>
            <div
              className='flex justify-center mt-10 xl:mt-0 font-bold mb-4'
              dangerouslySetInnerHTML={{ __html: data.schedule }}
              
            />
             <h2 className='flex justify-center mt-10 xl:mt-0 font-bold mb-4'>{data.onair}</h2>
          </div>
        </section>
      )}
    </section>
  );
};

export default LiveStream;
