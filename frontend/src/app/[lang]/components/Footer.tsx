'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';
import { CgWebsite } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text, newTab }: FooterLink) {
  const path = usePathname();
  return (
    <li className='flex'>
      <Link
        target={newTab ? '_blank' : '_self'}
        href={url}
        className={`hover:text-violet-400 ${
          path === url && 'text-violet-400 border-violet-400'
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className='flex'>
      <Link
        href={`/blog/${attributes.slug}`}
        className='hover:text-violet-400'
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case 'WEBSITE':
      return <CgWebsite />;
    case 'TWITTER':
      return <AiFillTwitterCircle />;
    case 'YOUTUBE':
      return <AiFillYoutube />;
    case 'DISCORD':
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {
  return (
    <footer className='py-6 bg-black text-gray-50 '>
      <div className='container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50'>
        {/* <div className='grid grid-cols-12 items-center sm:justify-center'>
          <div className='pb-6 col-span-full md:pb-0 sm:col-span-6'>
            <Logo src={logoUrl} />
          </div>

          <div className='col-span-6 text-center md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>Categories</p>
            <ul>
              {categoryLinks.map((link: CategoryLink) => (
                <CategoryLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          <div className='col-span-6 text-center md:text-center md:col-span-3 lg:col-span-6'>
            <ul className='flex justify-between flex-wrap'>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>
        </div> */}
        <div className='flex xl:justify-between xl:flex-row justify-center'>
          {/* <div className='container mx-auto grid sm:grid-cols-1 xl:grid-cols-2 gap-4 sm:items-center sm:justify-center'> */}
          <div className='mr-2'>
            {/* <div className='xl:col-span-1 xl:justify-self-center sm:grid-span-2 md:text-left sm:justify-self-center'> */}
            <Logo src={logoUrl} />
          </div>
          <div className='xl:flex'>
            {/* <div className='col-span-2 sm:col-span-1 flex flex-col sm:flex-row xl:justify-between sm:justify-center items-center'> */}
            <ul className='xl:flex xl:space-x-4 xl:items-center'>
              <li>
                {' '}
                <h2 className='text-2xl font-bold mb-2'>Site Map</h2>
              </li>
              {/* <ul className='flex flex-wrap space-x-4 sm:space-x-4 sm:space-y-0 xl:justify-center'> */}
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>
        </div>

        <div className='grid justify-center pt-6 lg:justify-between'>
          <div className='flex'>
            <span className='mr-2'>
              ©{new Date().getFullYear()} All rights reserved
            </span>
            <ul className='flex'>
              {legalLinks.map((link: FooterLink) => (
                <Link
                  href={link.url}
                  className='text-gray-400 hover:text-gray-300 mr-2'
                  key={link.id}
                >
                  {link.text}
                </Link>
              ))}
            </ul>
          </div>
          {/* <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id}
                  rel='noopener noreferrer'
                  href={link.url}
                  title={link.text}
                  target={link.newTab ? '_blank' : '_self'}
                  className='flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900'
                >
                  <RenderSocialIcon social={link.social} />
                </a>
              );
            })}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
