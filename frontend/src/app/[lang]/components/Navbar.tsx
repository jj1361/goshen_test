'use client';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import LiveProps  from './LiveStream';


interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  live: LiveProps;
}
export interface LiveProps {
  data: {
    liveToggle: boolean;
    title: string;
    onair: string;
    media: Media;
    schedule: RichTextProps;
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

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}

function NavLink({ url, text, newTab, live }: NavLink
 ) {
  const path = usePathname();
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
    (day === 0 && hour === 13) ||
    (day === 6 && hour === 14 && minute <= 30) //|| //don't forget to put "or" condition back once you're done testing
    || newTab === true
  ) {
    were_live = true;
  } else {
    were_live = false;
  }
  return (
    <li className='flex'>
      <Link
        href={url}
        target={newTab ? '_blank' : '_self'}
        scroll={true}
        className={
          text === 'LIVE STREAM' && were_live
            ? 'animate-pulse flex space-x-4 w-auto text-red-600 font-bold'
            : `flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
                path === url && 'dark:text-violet-400 dark:border-violet-400'
              }}`
        }
      >
        {text === 'LIVE STREAM' && were_live ? 'NOW LIVE!' : text }
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className='flex'>
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
          path === url && 'dark:text-violet-400 dark:border-violet-400'
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className='p-4 text-black'>
      <div className='container flex justify-between h-16 mx-auto px-0 sm:px-6'>
        <Logo src={logoUrl}>
          {logoText && <h2 className='text-2xl font-bold'>{logoText}</h2>}
        </Logo>

        <div className='items-center flex-shrink-0 hidden lg:flex'>
          <ul className='items-stretch hidden space-x-3 lg:flex'>
            {links.map((item: NavLink) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        </div>

        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-40 bg-gray-600 bg-opacity-75' />{' '}
          {/* Overlay */}
          <Dialog.Panel className='fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Strapi</span>
                {logoUrl && <img className='h-8 w-auto' src={logoUrl} alt='' />}
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-white'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-700'>
                <div className='space-y-2 py-6'>
                  {links.map((item) => (
                    <MobileNavLink
                      key={item.id}
                      closeMenu={closeMenu}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <button
          type='button'
          className='p-4 lg:hidden'
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className='h-7 w-7 text-violet-700' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
}
