'use client'

import React, { FormEvent } from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { loadStripe } from '@stripe/stripe-js';
// import { Stripe } from 'stripe';


// if(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }




const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

interface Registration {
  data: {
    text:string;
    name: string;
    email:string;
    adults:string;
    children:string;
    babies:string;
    seniors:string;
    arrival_date:string;
    departure_date:string;
    button_text:string;
  };
}


const Registration = ({ data }: Registration) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [seniors, setSeniors] = useState<number>(0);
  const [arrival_date, setArrival_date] = useState('');
  const [departure_date, setDeparture_date] = useState('');
  const [arrival_field, setArrival_field] = useState('');
  ('text');
  const [departure_field, setDeparture_field] = useState('text');

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  function showError(elementId: string, message: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
    }
  }

  function hideError(elementId: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.add('hidden');
    }
  }

  function validate(input: HTMLInputElement): boolean {
    const name = input.value.trim(); // Access value from the element

    if (name.length === 0) {
      showError(input.id + '-error', 'Please enter a name');
      return false;
    }

    if (input.type === 'email' && !/\S+@\S+\.\S+/.test(name)) {
      showError(input.id + '-error', 'Please enter a valid email address.');
      return false;
    }
    hideError(input.id + '-error');
    return true;
  }

  function formatDate(arrival_date: string): string {
    // Create a new Date object using the input string
    const date = new Date(arrival_date);

    // Options to use for toLocaleDateString()
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };

    // Convert the date to mm/dd/yyyy format
    return date.toLocaleDateString('en-US', options);
  }

  // Example usage:
  const originalDate = '2024/06/17'; // yyyy/mm/dd format
  const formattedDate = formatDate(originalDate);

  const handleNumberChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAdults(parseInt(event.target.value, 10));
  };




  return (
    <section className='mx-auto bg-primary px-2 md:w-3/4 md:rounded-xl flex-col lg:flex items-center py-8 lg:my-10 text-center [&_i]:hidden xl:[&_i]:block [&_select]:py-2 my-10 [&_label]:text-xl xl:[&_label]:text-2xl '>
      <h1 className='text-white text-3xl lg:text-5xl lg:pb-5'>Registration</h1>

      <form
        method='POST'
        // action='/pages/api/checkout_sessions'
        // action='../../api/checkout_sessions'
        action='https://stripe-sample-code-xi.vercel.app/registration'
        className='flex flex-col px-10 lg:border-white lg:border-t-4 pt-8 gap-y-4 text-2xl [&_input]:w-[calc(100%-1px)] xl:[&_input]:w-[calc(100%-23px)] [&_input]:py-2 [&_input]:pl-4 md:[&_input]:p-4 [&_input]:rounded-md xl:[&_input]:rounded-none xl:[&_input]:rounded-r-md  [&_label]:flex xl:[&_label]:justify-end md:[&_label]:w-3/4 [&_label]:items-center [&_label]:text-white [&_i]:ml-4 [&_i]:rounded-l-md [&_i]:p-2 [&_i]:bg-violet-600 lg:w-2/3 xl:w-4/5 [&_select]:rounded-md xl:[&_select]:rounded-none xl:[&_select]:rounded-r-md'
      >
        <div className='grid xl:flex xl:flex-end '>
          <label className='text-2x text-white'>Full Name: </label>

          <i
            className='bx bxs-user lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <input
            aria-label='label for name input'
            type='text'
            placeholder={data.name}
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validate(e.target as HTMLInputElement)}
          />
        </div>

        <div id='name-error' className='text-yellow-200 text-lg hidden '></div>
        <div className='grid xl:flex'>
          <label className='flex '>Email:</label>
          <i
            className='bx bxs-envelope lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <input
            aria-label='label for email input'
            type='email'
            placeholder={data.email}
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validate(e.target as HTMLInputElement)}
            required
          />
        </div>
        <div id='email-error' className='text-yellow-200 text-lg hidden'></div>
        <div className='grid xl:flex '>
          <label htmlFor='select'>Number of Adults: </label>

          <i
            className='bx bx-male-female lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>

          <select
            aria-label='label for adult number selection'
            name='adults'
            id='adults'
            className='w-full'
            value={adults || ''}
            onChange={(e) => setAdults(parseInt(e.target.value, 10))}
          >
            <option selected disabled>
              &nbsp;&nbsp;{data.adults}
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex  lg:text-2xl'>
          <label htmlFor='select'>Number of Children over 12: </label>
          <i
            className='bx bx-child  lg:text-5xl '
            style={{ color: '#ffffff' }}
          ></i>
          <select
            aria-label='label for number of children over 12 selection'
            name='children'
            id='children'
            className='w-full'
            value={children || ''}
            onChange={(e) => setChildren(parseInt(e.target.value, 10))}
          >
            <option  selected disabled>
              &nbsp;&nbsp;{data.children}
            </option>
            {/* <option value=''>{data.children}</option> */}
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex   lg:text-2xl'>
          <label htmlFor='select'>Number of Children under 12: </label>

          <i
            className='bx bx-child  lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <select
            aria-label='label fornumber of children under 12 selection'
            name='babies'
            id='babies'
            className='w-full'
            value={babies || ''}
            onChange={(e) => setBabies(parseInt(e.target.value, 10))}
          >
            <option selected  disabled>
              &nbsp;&nbsp;{data.babies}
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex  lg:text-2xl'>
          <label htmlFor='select'>Number of Seniors: </label>
          <i
            className='bx bx-male-female lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <select
            aria-label='label for the number of seniors selection'
            name='seniors'
            id='seniors'
            className='w-full'
            value={seniors || ''}
            onChange={(e) => setSeniors(parseInt(e.target.value, 10))}
          >
            <option  selected disabled>
              &nbsp;&nbsp;{data.seniors}
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex '>
          <label htmlFor='select'>Estimated Arrival Date: </label>
          <i
            className='bx bx-calendar lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <div className='bg-white rounded-md w-full lg:flex lg:justify-between lg:items-center'>
            <input
              aria-label='label for arrival date input'
              type={arrival_field}
              name='arrival_date'
              id='arrival_date'
              value={arrival_date}
              placeholder={data.arrival_date}
              onChange={(e) => setArrival_date(e.target.value)}
              onFocus={() => setArrival_field('date')}
              onBlur={() => setArrival_field('text')}
            />
          </div>
        </div>
        <div className='grid xl:flex'>
          <label htmlFor='select'>Estimated Departure Date: </label>

          <i
            className='bx bx-calendar lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <div className='bg-white items-center w-full rounded-md lg:rounded-r-md lg:flex lg:justify-between'>
            {/* <span>{data.departure_date}</span> */}
            <input
              aria-label='label for departure date input'
              type={departure_field}
              name='departure_date'
              id='departure_date'
              max='2024-10-25'
              value={departure_date}
              placeholder={data.departure_date}
              onChange={(e) => setDeparture_date(e.target.value)}
              onFocus={() => setDeparture_field('date')}
              onBlur={() => setDeparture_field('text')}
            />
          </div>
        </div>
        <button
          role='link'
          className='bg-white text-primary rounded-md w-3/4 mx-auto py-4 lg:w-full  md:px-2 font-bold mt-6'
          type='submit'
        >
          {data.button_text}
        </button>
      </form>
    </section>
  );
};

export default Registration;

function showError(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}


function hideError(arg0: string) {
  throw new Error('Function not implemented.');
}

// function fetchPostJSON(arg0: string, arg1: { amount: any; }): Stripe.Checkout.Session | PromiseLike<Stripe.Checkout.Session> {
//   throw new Error('Function not implemented.');
// }

