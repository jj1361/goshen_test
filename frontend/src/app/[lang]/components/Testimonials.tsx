import Image from 'next/image';
import { getStrapiMedia } from '../utils/api-helpers';
import HighlightedText from './HighlightedText';

interface Testimonial {
  text: string;
  firstname: string;
  lastname: string;
  email: string;
  url: string;
  authorName: string;
  picture: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

interface TestimonialsProps {
  data: {
    id: string;
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
}

function Testimonial({
  text,
  picture,
  url,
  firstname,
  lastname,
  email,
}: Testimonial) {
  const imageUrl = getStrapiMedia(picture.data.attributes.url);
  return (
    <div className='flex flex-col items-center mx-12 lg:mx-0' id='giving'>
      <div className='flex items-center'>
        <div className='my-5 '>
          <a href={url} target='_blank'>
            <div className='flex flex-col items-center'>
              <Image
                src={imageUrl || ''}
                alt={picture.data.attributes.alternativeText || 'none provided'}
                className='inline-block'
                width={200}
                height={200}
              />
              <p className='px-6 py-1 text-lg text-center'>{text} </p>
            </div>
            <HighlightedText
              text={firstname ? firstname : ''}
              tag='div'
              className='text-5xl font-bold leading-none sm:text-6xl  lg:text-2xl text-black'
              color='dark:text-violet-900'
            />
            <HighlightedText
              text={lastname ? lastname : ''}
              tag='div'
              className='text-5xl font-bold leading-none sm:text-6xl lg:text-2xl text-black'
              color='dark:text-violet-900'
            />
            <HighlightedText
              text={email ? email : ''}
              tag='div'
              className='text-5xl font-bold leading-none sm:text-6xl mb-8 lg:text-2xl text-black'
              color='dark:text-violet-900'
            />
          </a>
        </div>
        <div></div>
      </div>

      <div className='relative text-center'>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill='currentColor'
          className='absolute top-0 left-0 w-8 h-8 dark:text-gray-700'
        ></svg> */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill='currentColor'
          className='absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700'
        ></svg>
      </div>
    </div>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className=' dark:text-gray-700  m:py-8 lg:py-12'>
      <div className='container mx-auto py-4 space-y-2 text-center'>
        <h1 className='text-4xl font-bold lg:text-5xl'>{data.title}</h1>
        <p className='mt-2 text-xl text-center'>{data.description}</p>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2'>
        {data.testimonials.map((testimonial: Testimonial, index: number) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
