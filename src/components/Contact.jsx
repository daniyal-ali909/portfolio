/**
 * Copyright (c) 2026 Daniyal.dev All rights reserved.
 */

import { useState } from 'react';
import { Forminit } from 'forminit';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/daniyal-ali-7baa933bb',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
    </svg>,
    alt: 'LinkedIn'
  },
  {
    href: 'https://x.com/codewithsadee_',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" />
    </svg>,
    alt: 'Twitter X'
  },
  {
    href: 'https://www.instagram.com/daniyal_dev1/',
    icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
    </svg>,
    alt: 'Instagram'
  },
];

const FORM_ID = '4mh2y205yr8';
const FORMINIT_ENDPOINT = `https://forminit.com/f/${FORM_ID}`;
const forminit = new Forminit();

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setStatusMessage('Sending your message...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const { data, error } = await forminit.submit(FORM_ID, formData);

      if (error) {
        throw new Error(error.message || 'Unable to send your message.');
      }

      if (!data?.hashId) {
        throw new Error('Your message could not be confirmed. Please try again.');
      }

      form.reset();
      setStatus('success');
      setStatusMessage('Message sent successfully. I will get back to you soon.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error.message || 'Unable to send your message. Please try again.');
    }
  };

  return (
    <section 
    id="contact"
    className="section">
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
               
               <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                Contact me for collaboration
               </h2>

               <p className="text-zinc-400 mt-3 mb-8 max-w-[30ch] reveal-up">
                Reach out today to discuss your project needs and start collaborating on something amazing!
               </p>

               <div className="flex items-center gap-2 mt-auto">
                  {socialLinks
                    .map(({ href, icon, alt }, key) => (
                     <a 
                     key={key}
                     href={href}
                     aria-label={alt}
                     target="_blank" 
                     className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
                     >
                      {icon}            
                     </a>
                 ))}
               </div>

            </div>

             <form 
             action={FORMINIT_ENDPOINT}
             method="POST"
             onSubmit={handleSubmit}
             className="xl:pl-10 2xl:pl-20"
            >

             <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                <div className="mb-4">
                    <label 
                    htmlFor="name" 
                    className="label reveal-up">
                        Name
                    </label>

                    <input 
                    type="text" 
                     name="fi-sender-fullName"
                    id="name"
                    autoComplete="name"
                    required
                    placeholder="Daniyal Ali"
                    className="text-field reveal-up"
                    />
                </div>

                <div className="mb-4">
                    <label 
                    htmlFor="email" 
                    className="label reveal-up">
                        Email
                    </label>

                    <input 
                    type="email" 
                     name="fi-sender-email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="dhani.dev98607@gmail.com"
                    className="text-field reveal-up"
                    />
                </div>
             </div>

             <div className="mb-4">
              <label 
              htmlFor="message" 
              className="label reveal-up">
                Message
              </label>

              <textarea 
               name="fi-text-message" 
              id="message"
              placeholder="Hi!"
              required 
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
              >

              </textarea>
             </div>

              {status !== 'idle' && (
                <p
                  role={status === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`mb-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-emerald-400'}`}
                >
                  {statusMessage}
                </p>
              )}

              <button 
              type="submit" 
              disabled={status === 'loading'}
              className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
              >
               {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>

            </form>
        </div>
    </section>
  )
}

export default Contact
