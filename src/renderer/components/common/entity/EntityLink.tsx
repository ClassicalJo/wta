import React from 'react';

import DelayedLink from '../ui/DelayedLink';

type Props = {
  link: string;
  text: string;
};
export default function EntityLink({ link, text }: Props) {
  return (
    <DelayedLink
      to={link}
      className='
      hover:scale-110 transition-all hover:shadow-xl shadow-sm duration-100 ease-in-out 
      justify-center items-center tracking-widest
      '
    >
      <p className='font-[Solitreo] font-bold text-white hover:text-dark-text text-4xl text-center px-8 py-4'>
        {text}
      </p>
    </DelayedLink>
  );
}
