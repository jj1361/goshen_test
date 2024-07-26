import React from 'react';

interface ResourceProps {
  data: {
    heading: string;
    resource: Resource[];
  };
}
interface Resource {
  title: string;
  list: string;
}
// interface RichTextProps {
//   data: {
//     body: string;
//   };
// }
interface Link {
  name: string;
  url: string;
}

const Resource = ({ title, list }: Resource) => {
  return (
    <div className='flex flex-col flex-1 xl:text-left xl:ml-32'>
      <h2 className='font-bold text-3xl xl:text-4xl text-yellow-400 pb-3 '>
        {title}
      </h2>
      <div
        className='xl:text-left text-white mb-10 xl:mb-0 underline'
        dangerouslySetInnerHTML={{ __html: list }}
      />
    </div>
  );
};

export default function Resources({ data }: ResourceProps) {
  return (
    <section className='bg-violet-900 p-5 md:p-10 text-center'>
      {/* <section className='bg-black p-5 md:p-10 text-center'> */}
      <h1 className='text-5xl xl:text-6xl font-bold text-white xl:pb-5'>
        {data.heading}
      </h1>
      <div className='bg-gradient-to-b from-violet-900 via-violet-700 via-35% to-white w-auto grid  p-2 xl:flex justify-around  rounded-xl xl:px-5 pt-5 pb-36 mb-20 mt-5'>
        {/* <div className='bg-gradient-to-b from-black to-violet-700 w-auto grid  p-2 xl:flex justify-around  rounded-xl xl:px-5 pt-5 pb-36 mb-20 mt-5'> */}
        {data.resource.map((resource: Resource, index: number) => (
          <Resource key={index} {...resource} />
        ))}
      </div>
    </section>
  );
}
