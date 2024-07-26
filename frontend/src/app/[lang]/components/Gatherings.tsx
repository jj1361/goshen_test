'use client';

// import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '../utils/api-helpers';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IoCloseOutline } from 'react-icons/io5';
import { useState, useEffect, FC } from 'react';
import * as React from 'react';
import  Campgrounds  from './Maps';



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}




interface Gatherings {
  data: {
    showModal: boolean;
    title: string;
    subtitle:string;
    media: Media;
    description: RichTextProps;
    start_date: Date;
    end_date: Date;
    location: string;
    check_in: Date;
    check_out: Date;
    preview_btn_text: string;
    registration_deadline: string;
    location_name: string;
    location_address: string;
    location_city: string;
    location_state: string;
    location_zip: string;
    buttons: Buttons;
    register_button: Register_Button;
    details: Details;
    things_needed: Things_Needed[];
    things_needed_header: Things_Needed_Header;
    lodging: Lodging;
    lodging_continued:Lodging_Continued;
    campgrounds1:Media;
    campgrounds1_caption:string;
    campgrounds2:Media;
    campgrounds2_caption:string;
  };
}

interface Lodging_Continued {
  media: Media;
  caption:string;
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

interface Buttons {
  data: {
    id: string;
    attributes: {
      url: string;
      newTab: string;
      text: string;
      type: string;
    };
  };
}

interface RichTextProps {
  data: {
    body: string;
  };
}


interface Lodging{
  media: Media;
  title: string;
  basic_info:RichTextProps;
  lodging_details: RichTextProps;
}


interface Register_Button {
  id: string;
  media: Media;
  registration_warning: string;
  registration_button_text: string;
}

interface Details {
  media: Media;
}

interface Things_Needed {
  id: string;
  item: string;
  notes: string;
 
}
interface Things_Needed_Header {
  text: string;
  media: Media;
 
}
interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}


const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({
  buyButtonId,
  publishableKey,
}) => {
  // You can add event handlers and logic here

  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    >
      REGISTER
    </stripe-buy-button>
  );
};

function Lodging_Continued ({media, caption}:Lodging_Continued) {
  console.log("🚀 ~ Lodging_Continued ~ caption:", caption)
  const more_lodging = getStrapiMedia(media.data.attributes.url);
  return<div>
   <Image 
    src={more_lodging || ''} 
    width={800} 
    height={800} 
    alt='additional lodging picture' />
  <p>{caption}</p>
  </div>
}
const Gatherings = ({ data }: Gatherings) => {

   const [activeTab, setActiveTab] = useState<string>('details');
  const details = 'details';
  const lodging_tab = 'lodging';
  const checklist = 'checklist';
  const schedule = 'schedule';

   useEffect(() => {
     if (data.showModal) {
       // Set the tab you want as default when the modal is triggered
       setActiveTab('details');
     }
   }, [data.showModal]);

   const handleTabClick = (tabId: string) => {
     setActiveTab(tabId);
   };
  const imgUrl = getStrapiMedia(data.media?.data?.attributes?.url);
  const tent_pic = getStrapiMedia(data.details?.media?.data?.attributes?.url);
  const reg_pic = getStrapiMedia(data.register_button?.media?.data?.attributes?.url);
  const campinglist = getStrapiMedia(data.things_needed_header?.media?.data?.attributes?.url);
  const lodging = getStrapiMedia(data.lodging?.media?.data?.attributes?.url);
  const campgrounds1 = getStrapiMedia(data.campgrounds1?.data?.attributes.url);
  const campgrounds2 = getStrapiMedia(data.campgrounds2?.data?.attributes.url);
  
  const start = new Date(data.start_date);
  const end = new Date(data.end_date);
  const arrive = new Date(data.check_in);
  const leave = new Date(data.check_out);


//Date Adjustments to accomodate Strapi bug making the date in the date field a day ahead
 start.setDate(start.getDate()+1);
 end.setDate(end.getDate()+1);
 arrive.setDate(arrive.getDate()+1);
 leave.setDate(leave.getDate()+1);


  const start_date = start.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Chicago', // Change to your timezone
  });
  const end_date = end.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Chicago', // Change to your timezone
  });
  const check_in = arrive.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Chicago', // Change to your timezone
  });
  const check_out = leave.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Chicago', // Change to your timezone
  });

  // function countdown(): number {
  //   const today = new Date();
  //   const targetDate = new Date(2024, 8, 30); // Months are 0-indexed, so 9 represents October
  //   const difference = targetDate.getTime() - today.getTime();

  //   const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  //   return days;
  // }

  return (
    <div className=' w-full md:max-w-full lg:flex lg:justify-center py-10 '>
      <div
        className=' h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden lg:bg-[center_top_-1.5rem]'
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        title='Sukkot 2023 flyer'
      ></div>
      <div className='border-r border-b border-l  border-gray-400 lg:border-l-0 lg:border-t-2 lg:border-b-2 lg:border-r-2 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r hover:border-primary hover:shadow-md hover:shadow-primary transition duration-250 ease-in-out  p-4 flex flex-col justify-between leading-normal lg:w-1/2 lg:text-2xl text-xl'>
        <div className='mb-8'>
          <div className='text-gray-900 font-bold lg:text-4xl mb-2 font-sukkot'>
            {data.title}
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
            className='text-gray-700 text-base  lg:text-2xl line-clamp-6 lg:w-[85%]'
          ></p>
        </div>

        <div className='text-black'>
          <i className='bx bxs-location-plus'></i>&nbsp;
          <strong>Location:</strong>
          <div className='ml-8 underline text-blue-800'>
            <Link
              href='https://maps.app.goo.gl/xHSKRg5F3rSWcW6i7'
              target='_blank'
            >
              <p>{data.location_name}</p>
              <p>{data.location_address}</p>
              <p>
                {data.location_city},{data.location_state} {data.location_zip}
              </p>
            </Link>
          </div>
          <p className='py-4 grid lg:flex'>
            <i className='bx bxs-calendar'></i>&nbsp;
            {start_date} - {end_date}
          </p>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='mb-2 lg:mb-0'>
              <i className='bx bxs-pencil'></i>&nbsp;
              <span>
                <strong>Registration Deadline: </strong>
              </span>
              <span className='block ml-6 lg:inline lg:ml-0'>
                {' '}
                {data.registration_deadline}
              </span>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className='btn bg-primary text-xl text-white'
              onClick={() => {
                handleTabClick('details');
                const modalElement = document.getElementById(
                  'my_modal_4'
                ) as HTMLDialogElement;
                modalElement.showModal();
              }}
            >
              {data.preview_btn_text}
            </button>
            {/* ***********************MODAL BEGINS******************* */}
            <dialog id='my_modal_4' className='modal '>
              <div className='modal-box p-0 md:p-[1.5rem] max-w-full h-screen text-gray-200'>
                <div role='tablist' className='tabs tabs-bordered flex-col '>
                  <input
                    type='radio'
                    name='my_tabs_1'
                    role='tab'
                    id='details'
                    // className={`tab ${ activeTab === 'details' ? 'tab-active':'tab-active'}`}
                    className={`tab md:text-2xl ${
                      activeTab === 'details' ? 'tab-active' : ''
                    }`}
                    onClick={() => handleTabClick(details)}
                    aria-label='Details'
                  />
                  {/* ***************************     DETAILS CONTENT     *********************** */}
                  <div
                    role='tabpanel'
                    className='tab-content xl:px-5 py-10 xl:mt-5 bg-blend-screen bg-violet-100 xl:pt-10'
                    style={{
                      backgroundImage: `url(${lodging})`,
                    }}
                  >
                    {/* *************************     COLUMN LAYOUT BEGINS      *************************************** */}
                    <div className='grid lg:grid-cols-2 gap-5   '>
                      <div>
                        <p className='font-sukkot font-bold text-center text-5xl lg:text-9xl mb-2 text-primary lg:place-self-center lg:border-b-4 lg:border-b-primary lg:rounded-md lg:py-40 lg:grid bg-violet-50 bg-[url(/sukkot2024.png)] bg-blend-overlay '>
                          {data.title}{' '}
                          <span className='text-3xl lg:text-6xl font-normal text-violet-800'>
                            {data.subtitle}
                          </span>
                        </p>
                      </div>
                      <div>
                        <Image
                          src={tent_pic || ''}
                          width={800}
                          height={800}
                          alt=''
                        />{' '}
                      </div>
                      <div className='relative border-2 border-primary flex flex-col justify-around rounded-md lg:w-2/3 lg:h-4/5 lg:place-self-center bg-white '>
                        <div className='flex justify-center'>
                          <Image
                            src={reg_pic || ''}
                            alt='goshen group logo'
                            width={300}
                            height={300}
                            className='hidden lg:block rounded-md '
                          />
                          <Image
                            src={reg_pic || ''}
                            alt='goshen group logo'
                            width={150}
                            height={150}
                            className='rounded-md lg:hidden'
                          />
                        </div>

                        <div className='grid justify-center '>
                          {/* <div
                            className={
                              countdown() <= 15
                                ? 'text-red-500 text-center font-bold text-2xl lg:text-3xl'
                                : 'text-black text-center font-bold text-2xl lg:text-3xl'
                            }
                          >
                            <p> {data.register_button?.registration_warning}</p>{' '}
                            <p className='lg:text-5xl'>{countdown()}</p>
                          </div> */}
                          <a
                            href='https://stripe-sample-code-eievzliez-david-millers-projects.vercel.app/'
                            className='grid justify-center '
                          >
                            <button className='bg-violet-900 text-white text-2xl  lg:text-3xl px-2 lg:tracking-wide py-4 lg:font-semibold lg:px-4 rounded-md m-4'>
                              {' '}
                              {data.register_button?.registration_button_text}
                            </button>
                          </a>
                        </div>
                      </div>

                      <div className='grid justify-between text-gray-800 bg-violet-50 rounded-md border-4 border-primary p-4'>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data.description,
                          }}
                          className=' text-base pb-4 lg:text-2xl '
                        ></p>
                        <p>
                          <i className='bx bxs-location-plus'></i>&nbsp;
                          <strong>Location:</strong>
                        </p>
                        <Link
                          href='https://www.google.com/maps/search/?api=1&query=centurylink+field'
                          target='_blank'
                        >
                          <div className='ml-10'>
                            <p>{data.location_name}</p>
                            <p>{data.location_address}</p>
                            <p>
                              {data.location_city},{data.location_state}{' '}
                              {data.location_zip}
                            </p>
                          </div>
                        </Link>
                        <p className='py-4'>
                          <i className='bx bxs-calendar'></i>&nbsp;
                          {start_date} -{end_date}
                        </p>
                        <p>
                          <i className='bx bxs-pencil'></i>&nbsp;
                          <strong>Registration Deadline:</strong>{' '}
                          {data.registration_deadline}
                        </p>
                        <p>
                          <i className='bx bxs-hotel'></i>
                          <strong> Check In: </strong>
                          {check_in}
                        </p>
                        <p>
                          <i className='bx bx-walk'></i>
                          <strong> Check Out: </strong>
                          {check_out}
                        </p>
                      </div>
                    </div>
                    {/* *************************     COLUMN LAYOUT ENDS      *************************************** */}
                  </div>

                  <input
                    type='radio'
                    name='my_tabs_1'
                    role='tab'
                    className={`tab md:text-2xl ${
                      activeTab === 'lodging' ? 'tab-active' : ''
                    }`}
                    onClick={() => handleTabClick(lodging_tab)}
                    aria-label='Lodging'
                  />
                  {/* ***************************     LODGING CONTENT     *********************** */}

                  <div
                    role='tabpanel'
                    className='tab-content px-0 xl:p-10 xl:mt-5 bg-primary'
                  >
                    <p className='text-white font-sukkot text-center text-5xl py-4 xl:py-0 xl:text-9xl font-bold'>
                      {data.lodging?.title}
                    </p>
                    <div className='flex flex-col  2xl:flex-row xl:text-left  xl:[&>*]:flex-1  xl:justify-between 2xl:gap-x-20'>
                      <div className='flex flex-col justify-between space-y-6 xl:mt-6'>
                        <div className='flex justify-center'>
                          <Image
                            src={lodging || ''}
                            alt='camp grounds'
                            width={1200}
                            height={690}
                            className='hidden xl:block '
                          />
                          <Image
                            src={lodging || ''}
                            alt='camp grounds'
                            width={600}
                            height={345}
                            className='hidden md:block xl:hidden '
                          />
                          <Image
                            src={lodging || ''}
                            alt='camp grounds'
                            width={300}
                            height={90}
                            className='border-2 border-white md:hidden'
                          />
                        </div>
                        <Campgrounds />
                      </div>

                      <div className='flex md:justify-around  xl:gap-x-10 '>
                        <div className='flex flex-col xl:justify-between'>
                          <div
                            className='grid text-center 2xl:text-left text-white xl:p-5 rounded-md    '
                            dangerouslySetInnerHTML={{
                              __html: data.lodging?.basic_info,
                            }}
                          />

                          <div
                            className='text-white text-center mt-20 2xl:text-left xl:p-5 rounded-md 2xl:-mt-10 '
                            dangerouslySetInnerHTML={{
                              __html: data.lodging?.lodging_details,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col gap-y-20 my-10 '>
                      {' '}
                      <div className='flex flex-col items-center md:px-5'>
                        <Image
                          src={campgrounds1 || ''}
                          alt='camp grounds'
                          width={1200}
                          height={690}
                          className='hidden xl:block xl:w-full'
                        />
                        <Image
                          src={campgrounds1 || ''}
                          alt='camp grounds'
                          width={600}
                          height={345}
                          className='hidden md:block lg:w-full xl:hidden '
                        />
                        <Image
                          src={campgrounds1 || ''}
                          alt='camp grounds'
                          width={300}
                          height={90}
                          className='w-full md:hidden'
                        />
                        <div className='text-white text-center leading-tight px-2  xl:text-4xl xl:text-left xl:px-0'>
                          {data.campgrounds1_caption}
                        </div>
                      </div>
                      <div className='flex flex-col items-center md:px-5'>
                        <Image
                          src={campgrounds2 || ''}
                          alt='camp grounds'
                          width={1300}
                          height={790}
                          className='hidden xl:block xl:w-full '
                        />
                        <Image
                          src={campgrounds2 || ''}
                          alt='camp grounds'
                          width={600}
                          height={345}
                          className='hidden md:block lg:w-full xl:hidden '
                        />
                        <Image
                          src={campgrounds2 || ''}
                          alt='camp grounds'
                          width={300}
                          height={90}
                          className=' w-full md:hidden'
                        />
                        <div className='text-white text-center xl:text-4xl xl:text-left'>
                          {data.campgrounds2_caption}
                        </div>
                        <div className='flex flex-col xl:justify-between rounded-md xl:px-2 bg-white justify-self-center xl:justify-self-end my-8 xl:p-4'>
                          <div className='flex justify-center'>
                            <Image
                              src={reg_pic || ''}
                              alt=''
                              width={300}
                              height={300}
                              className='hidden lg:block rounded-md '
                            />
                            <Image
                              src={reg_pic || ''}
                              alt=''
                              width={150}
                              height={150}
                              className='rounded-md lg:hidden'
                            />
                          </div>
                          <div className='flex flex-col justify-center mt-10'></div>
                          {/* <div
                            className={
                              countdown() <= 15
                                ? 'text-red-500 text-center font-bold text-2xl lg:text-3xl'
                                : 'text-black text-center font-bold text-2xl lg:text-3xl'
                            }
                          >
                            <p>{data.register_button?.registration_warning} </p>{' '}
                            <p className='lg:text-5xl'>{countdown()}</p>
                            <a href='https://stripe-sample-code-eievzliez-david-millers-projects.vercel.app/'>
                              <button className='bg-violet-900 text-white text-2xl  lg:text-3xl px-2 lg:tracking-wide py-4 lg:font-semibold lg:px-4 rounded-md m-4'>
                                {' '}
                                {data.register_button?.registration_button_text}
                              </button>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type='radio'
                    name='my_tabs_1'
                    role='tab'
                    className={`tab md:text-2xl ${
                      activeTab === 'checklist' ? 'tab-active' : ''
                    }`}
                    onClick={() => handleTabClick(checklist)}
                    aria-label='Checklist'
                  />
                  {/* ***************************     THINGS NEEDED CONTENT     *********************** */}

                  <div
                    role='tabpanel'
                    className='tab-content  xl:mt-5 bg-secondary  '
                  >
                    <div className='grid gap-10  2xl:flex justify-center space-10 bg-secondary '>
                      <div className='relative w-[w-24rem] h-[18rem]  md:w-[48rem] md:h-[34rem] xl:w-[72rem] xl:h-[52rem]'>
                        <Image src={campinglist || ''} alt='' layout='fill' />
                      </div>

                      <div className=' bg-white border-2 border-violet-900 flex flex-col justify-around rounded-md p-4  '>
                        <div className='flex justify-center'>
                          <Image
                            src={reg_pic || ''}
                            alt=''
                            width={300}
                            height={300}
                            className='hidden lg:block rounded-md '
                          />
                          <Image
                            src={reg_pic || ''}
                            alt=''
                            width={150}
                            height={150}
                            className='rounded-md lg:hidden'
                          />
                        </div>
                        {/* <div
                          className={
                            countdown() <= 15
                              ? 'text-red-500 text-center font-bold text-2xl lg:text-3xl'
                              : 'text-black text-center font-bold text-2xl lg:text-3xl'
                          }
                        >
                          <p> {data.register_button?.registration_warning}</p>{' '}
                          <p className='lg:text-5xl'>{countdown()}</p>
                        </div> */}
                        <div className='flex justify-center'>
                          <a href='https://stripe-sample-code-eievzliez-david-millers-projects.vercel.app/'>
                            <button className='bg-violet-900 text-white text-2xl  lg:text-3xl px-2 lg:tracking-wide py-4 lg:font-semibold lg:px-4 rounded-md m-4'>
                              {' '}
                              {data.register_button?.registration_button_text}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type='radio'
                    name='my_tabs_1'
                    role='tab'
                    className={`tab md:text-2xl ${
                      activeTab === 'schedule' ? 'tab-active' : ''
                    }`}
                    onClick={() => handleTabClick(schedule)}
                    aria-label='Schedule'
                  />
                  {/* ***************************     ITINERARY CONTENT     *********************** */}

                  <div role='tabpanel' className='tab-content p-10 xl:mt-5'>
                    Itinerary
                  </div>
                </div>
                <div className='modal-action modal-top'>
                  <form method='dialog'>
                    {/* if there is a button, it will close the modal */}
                    <button className='hidden lg:block absolute right-2 top-2 bg-white  text-xl font-bold   '>
                      <GrClose style={{ backgroundColor: 'white' }} />{' '}
                    </button>
                    <button className=' absolute lg:hidden  right-2 top-10 bg-white text-xl p-2  text-black font-bold   '>
                      <IoCloseOutline style={{ backgroundColor: 'white' }} />{' '}
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center'>
            {/* {data.button?.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? '_blank' : '_self'}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gatherings;
