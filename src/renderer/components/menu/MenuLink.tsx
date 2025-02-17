import React from 'react';

import DelayedLink, { DelayedLinkProps } from '../common/ui/DelayedLink';

export default function MenuLink(props: DelayedLinkProps) {
  return (
    <DelayedLink
      {...props}
      className='px-6 py-4 text-center text-3xl tracking-widest text-white transition-all duration-150 ease-in-out hover:scale-110 hover:text-dark-text h-md:px-8 h-md:py-6 h-md:text-4xl h-lg:px-10 h-lg:py-8 h-lg:text-5xl h-xl:px-12 h-xl:py-10 h-xl:text-6xl'
    />
  );
}
