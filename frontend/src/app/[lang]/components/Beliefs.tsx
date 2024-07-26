import React from 'react';

interface Beliefs {
  data: {
    belief: Belief[];
  };
}
interface Belief {
  text: string;
  description: string;
}

const Belief = ({ text, description }: Belief) => {
  return (
    <div className='flex grow flex-col xl:flex-row gap-5 px-5 lg:px-12 py-10 '>
      <h2 className='font-bold text-4xl text-center lg:text-6xl flex-1 xl:text-right lg:pr-10'>
        {text}
      </h2>
      {/* <p className='flex-1'>{description}</p> */}
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className='flex-1'
      />
    </div>
  );
};

export default function Beliefs({ data }: Beliefs) {
  return (
    <section>
      {data.belief.map((belief: Belief, index: number) => (
        <Belief key={index} {...belief} />
      ))}
    </section>
  );
}
