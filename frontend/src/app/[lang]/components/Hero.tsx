import HighlightedText from './HighlightedText';
import { getStrapiMedia } from '../utils/api-helpers';

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  const style = {
    backgroundImage: imgUrl,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${style.backgroundImage})` }}
        className={`grid items-center justify-center text-center py-20 bg-slate-500  xl:bg-cover bg-[center_top_-3rem] bg:no-repeat `}
      >
        <div>
          <HighlightedText
            text={data.title}
            tag='h1'
            className={
              data.title === 'ABOUT US'
                ? 'text-5xl font-bold leading-none sm:text-6xl mb-8 text-white'
                : 'text-5xl font-bold leading-none mb-8 lg:mb-4 text-violet-100 bg-zinc-400/50 p-4 md:text-8xl lg:text-7xl xl:bg-transparent'
            }
            color='text-violet-900'
          />
          {/* Photo by Nick Kwan:
          https://www.pexels.com/photo/lake-near-forest-2745258/ */}
          <HighlightedText
            text={data.description}
            tag='p'
            className={
              data.title === 'ABOUT US'
                ? 'mb-8 text-lg lg:text-3xl  text-yellow-500 font-semibold'
                : 'mb-8 text-lg lg:text-3xl  text-white font-semibold '
            }
            color='text-violet-400'
          />
          {/* <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center'>
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? '_blank' : '_self'}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
