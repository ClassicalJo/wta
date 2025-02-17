import React from 'react';

import DelayedLink from '../ui/DelayedLink';

type Props = { link: string; text: string };
export default function EntityLink({ link, text }: Props) {
  return (
    <DelayedLink
      to={link}
      className='items-center justify-center text-2xl tracking-widest shadow-sm transition-all duration-100 ease-in-out hover:scale-110 hover:shadow-xl h-md:text-3xl h-lg:text-4xl h-xl:text-5xl'
    >
      <p className='px-8 py-4 text-center font-[Solitreo] text-white hover:text-dark-text'>
        {text}
      </p>
    </DelayedLink>
  );
}
