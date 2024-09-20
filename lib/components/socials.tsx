import Link from 'next/link';

export default function Socials({
  size,
  style = 'mt-4 flex sm:mt-0 sm:justify-center md:pr-12 lg:pr-24',
  colour = 'text-gray-500',
}: {
  size: Number;
  colour?: String;
  style?: String;
}) {
  return (
    <div className={`flex ${style}`}>
      <Link
        href="https://www.facebook.com/truejesuschurchsg"
        className={`${colour} hover:text-gray-900`}
      >
        <svg
          className={`h-${size} w-${size}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fillRule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Facebook page</span>
      </Link>
      <Link
        href="https://www.instagram.com/tjc.sg/"
        className={`ms-5 ${colour} hover:text-gray-900`}
      >
        <svg
          className={`h-${size} w-${size}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://www.youtube.com/TrueJesusChurchSingapore"
        className={`ms-5 ${colour} hover:text-gray-900`}
      >
        <svg
          className={`h-${size} w-${size}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
        <span className="sr-only">YouTube</span>
      </Link>
      <Link
        href="https://m.twitch.tv/tjcadam"
        className={`ms-5 ${colour} hover:text-gray-900`}
      >
        <svg
          className={`h-${size} w-${size}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Twitch</span>
      </Link>
      <Link
        href="https://t.me/truejesuschurchsg"
        className={`ms-5 ${colour} hover:text-gray-900`}
      >
        <svg
          className={`h-${size} w-${size}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{
            strokeLinejoin: 'round',
            strokeMiterlimit: 1.41421,
          }}
        >
          <path
            id="telegram-4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"
          />
        </svg>
        <span className="sr-only">Telegram</span>
      </Link>
    </div>
  );
}
