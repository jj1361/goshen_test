import React from 'react';

interface Text {
  data: { rich_text: string };
}

const CustomRichText = ({ data }: Text) => {
  return (
    <section>
      <div
        dangerouslySetInnerHTML={{ __html: data.rich_text }}
        className='py-5 px-10'
      />
      ;
    </section>
  );
};

export default CustomRichText;
