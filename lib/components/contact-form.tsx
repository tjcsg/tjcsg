'use client';

import { Locale } from '@/i18n-config';
import Container from './container';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const text = {
  en: {
    successHeader: 'Form Submitted Successfully',
    successText:
      'Thank you for reaching out, we will try to get back to you as soon as possible.',
    backText: 'Go back',
    error:
      'Something went wrong. Please try again or contact us directly with our email/phone number. Sorry!',
    form: {
      nameField: 'Name',
      contactField: 'Contact',
      messageField: 'Message',
      submitButton: 'Submit Form',
    },
  },
  zh: {
    successHeader: 'Form Submitted Successfully',
    successText:
      'Thank you for reaching out, we will try to get back to you as soon as possible.',
    backText: 'Go back',
    error:
      'Something went wrong. Please try again or contact us directly with our email/phone number. Sorry!',
    form: {
      nameField: 'Name',
      contactField: 'Contact',
      messageField: 'Message',
      submitButton: 'Submit Form',
    },
  },
};

function SuccessContent({ lang }: { lang: Locale }) {
  const path = usePathname();
  return (
    <div className="flex flex-col items-center py-6">
      <svg viewBox="0 0 24 24" className="mr-3 h-14 w-14 text-green-600">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <h3 className="mb-4 mt-3 text-center text-2xl text-green-600">
        {text[lang].successHeader}
      </h3>
      <p className="text-center">{text[lang].successText}</p>
      <p className="pt-6">
        <Link
          className="text-button underline hover:text-button_hover"
          href={path}
        >
          {text[lang].backText}
        </Link>
      </p>
    </div>
  );
}

export default function ContactForm({ lang }: { lang: Locale }) {
  const searchParams = useSearchParams();
  const submitSuccess = searchParams.get('submitted');
  const path = usePathname();
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    form.current?.reset();
    setSending(false);
    setError(false);
  }, [searchParams]);
  const formSubmission: FormEventHandler<HTMLFormElement> = async (evt) => {
    setSending(true);
    setError(false);
    evt.preventDefault();
    const formData = new FormData(evt.target as HTMLFormElement);

    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY!);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      router.push(path + '?submitted=true');
    } else {
      setSending(false);
      setError(true);
    }
  };

  return (
    <Container background="bg-neutral-100">
      <div className="gap-4 md:flex">
        <div className="mx-3 min-h-80 flex-1 place-content-center rounded-lg bg-white p-4 shadow-md">
          {submitSuccess ? (
            <SuccessContent lang={lang} />
          ) : (
            <form ref={form} onSubmit={formSubmission} method="POST">
              <input type="checkbox" name="botcheck" className="hidden"></input>
              <input
                type="hidden"
                name="subject"
                value="tjc.sg Website Form Enquiry"
              ></input>
              <div className="flex gap-3">
                <div className="mb-4 flex-1">
                  <label htmlFor="name" className="block font-bold">
                    {text[lang].form.nameField}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full appearance-none rounded border px-3 py-2 shadow"
                  />
                </div>
                <div className="mb-4 flex-1">
                  <label htmlFor="contact" className="block font-bold">
                    {text[lang].form.contactField}
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="email/phone"
                    className="w-full appearance-none rounded border px-3 py-2 shadow"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-bold">
                  {text[lang].form.messageField}
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Enter Message"
                  className="w-full appearance-none rounded border px-3 py-2 shadow"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-start">
                <button
                  type="submit"
                  disabled={sending}
                  className={`
                  sm:text-md my-2 block text-nowrap rounded border-2 px-4 py-2 text-sm font-semibold  text-white shadow-sm  sm:leading-4
                  ${
                    sending
                      ? 'border-button_hover bg-button_hover'
                      : 'border-button bg-button hover:border-button_hover hover:bg-button_hover'
                  }
                `}
                >
                  {text[lang].form.submitButton}
                </button>
                {error ? (
                  <div className="px-4 text-rose-500">{text[lang].error}</div>
                ) : null}
              </div>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
