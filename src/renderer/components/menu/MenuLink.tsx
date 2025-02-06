import React from 'react';

import DelayedLink, { DelayedLinkProps } from '../common/ui/DelayedLink';

export default function MenuLink(props: DelayedLinkProps) {
  return (
    <DelayedLink
      {...props}
      className='
      hover:scale-110  text-center hover:text-dark-text text-white transition-all duration-150 ease-in-out
      tracking-widest text-3xl px-6 py-4 
      h-md:text-4xl h-md:px-8 h-md:py-6 
      h-lg:text-5xl h-lg:px-10 h-lg:py-8
      h-xl:text-6xl h-xl:px-12 h-xl:py-10
      '
    />
  );
}
