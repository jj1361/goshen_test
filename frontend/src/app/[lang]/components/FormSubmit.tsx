import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (
        !(field instanceof HTMLInputElement) &&
        !(field instanceof HTMLTextAreaElement)
      )
        return;
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  return (
    <div>
      <main>
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
          <form method='post' onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' name='name' />
            </p>
            <p>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' name='email' />
            </p>
            <p>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' />
            </p>
            <p>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
