import Image from 'next/image';
import { getStrapiMedia } from '../utils/api-helpers';

interface DonationsProps {
  data: {
    id: string;
    heading: string;
    subheading: string;
    donations: Donations[];
  };
}

interface Donations {
  instructions: string;
  url: string;
  logo: Logo;
}

interface Logo {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

function Donate({ logo, url, instructions }: Donations) {
  const imageUrl = getStrapiMedia(logo.data?.attributes.url);
  return (
    <div className='flex flex-col items-center mx-12 lg:mx-0'>
      <div className='flex items-center'>
        <div className='my-5 '>
          <a href={url} target='_blank'>
            <div className='flex flex-col items-center'>
              <Image
                src={imageUrl || ''}
                alt={logo.data?.attributes.alternativeText || 'none provided'}
                className='inline-block'
                width={200}
                height={200}
              />

              <div
                dangerouslySetInnerHTML={{ __html: instructions }}
                className='px-6 py-1 text-lg text-center'
              />
            </div>
          </a>
        </div>
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

export default function Donations({ data }: DonationsProps) {
  return (
    <section className=' dark:text-gray-700  m:py-8 lg:py-12' id='giving'>
      <div className='container mx-auto py-4 space-y-2 text-center'>
        <h1 className='text-4xl font-bold lg:text-5xl'>{data.heading}</h1>
        <p className='mt-2 text-xl text-center'>{data.subheading}</p>
      </div>

      <div className='container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2'>
        {data.donations.map((donation: Donations, index: number) => (
          <Donate key={index} {...donation} />
        ))}
      </div>
    </section>
  );
}
