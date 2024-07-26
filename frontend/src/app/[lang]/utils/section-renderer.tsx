import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Donations from '../components/Donations';
import Pricing from '../components/Pricing';
import { Email } from '../components/Email';
import LiveStream from '../components/LiveStream';
import CustomRichText from '../components/CustomRichText';
import SocialMedia from '../components/SocialMedia';
import Leadership from '../components/Leadership';
import Beliefs from '../components/Beliefs';
import Media from '../components/Media';
import Resources from '../components/Resources';
import Gatherings from '../components/Gatherings';
import Registration from '../components/Registration';
import Thanks from '../components/Thanks';

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'sections.hero':
      return <Hero key={index} data={section} />;
    case 'sections.features':
      return <Features key={index} data={section} />;
    case 'sections.testimonials-group':
      return <Testimonials key={index} data={section} />;
    case 'sections.donations-group':
      return <Donations key={index} data={section} />;
    case 'sections.pricing':
      return <Pricing key={index} data={section} />;
    case 'sections.live-stream':
      return <LiveStream key={index} data={section} />;
    case 'sections.custom-rich-text':
      return <CustomRichText key={index} data={section} />;
    case 'sections.email':
      return <Email key={index} data={section} />;
    case 'sections.social-media':
      return <SocialMedia key={index} data={section} />;
    case 'sections.leadership':
      return <Leadership key={index} data={section} />;
    case 'sections.beliefs':
      return <Beliefs key={index} data={section} />;
    case 'sections.media':
      return <Media key={index} data={section} />;
    case 'sections.resources':
      return <Resources key={index} data={section} />;
    case 'sections.gatherings':
      return <Gatherings key={index} data={section} />;
    case 'sections.registration':
      return <Registration key={index} data={section} />;
    case 'sections.thanks':
      return <Thanks key={index} data={section} />;

    default:
      return null;
  }
}
