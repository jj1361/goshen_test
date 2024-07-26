'use client';
import { useState } from 'react';
import { Resend } from 'resend';

interface Email {
  description: string;
  title: string;
  data: {
    title: string;
    description: string;
    name: string;
    namePlaceHolder: string;
    email: string;
    emailPlaceHolder: string;
    message: string;
    messagePlaceHolder: string;
    buttonText: string;
  };
}
function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e;
}
export async function Email({ data }: { data: Email }) {
  const [state, setState] = useState<string>();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState('loading');

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    setState('ready');
  }

  return (
    <section
      className='grid justify-center  py-6 bg-violet-950 text-gray-50'
      id='contact'
    >
      <div className='container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row'>
        <div className='flex flex-col space-y-4 text-center lg:text-left'>
          <h1 className='text-center  text-5xl font-bold leading-none'>
            {data.title}
          </h1>
          <p className='text-lg'>{data.description}</p>
          <div>
            <style jsx>{`
              form {
                font-size: 1.2em;
              }

              label {
                display: block;
                margin-bottom: 0.2em;
              }

              input,
              textarea {
                width: 100%;
                padding: 0.8em;
                color: black;
              }

              button {
                color: white;
                font-size: 1em;
                background-color: blueviolet;
                padding: 0.8em 1em;
                border: none;
                border-radius: 0.2em;
              }
            `}</style>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name' className='text-left'>
                Name
              </label>
              <input id='name' type='text' name='name' />
              <label htmlFor='email' className='text-left'>
                Email
              </label>
              <input id='email' type='text' name='email' />
              <label htmlFor='message' className='text-left'>
                Message
              </label>
              <textarea id='message' name='message' />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
