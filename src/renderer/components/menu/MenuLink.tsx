import React from 'react';

import DelayedLink, { DelayedLinkProps } from '../common/ui/DelayedLink';

export default function MenuLink(props: DelayedLinkProps) {
  return (
    <DelayedLink
      {...props}
      className='relative max-w-md tracking-widest text-white transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-105'
    >
      <span className='bg-[linear-gradient(to_right,_#a1e7f5_0%,_#a1e7f5_50%,_#ffffff_50%,_#ffffff_100%)] bg-[length:200%_100%] bg-clip-text bg-[position:100%_0] text-transparent transition-all duration-300 ease-in-out hover:bg-[position:0%_0]'>
        {props.children}
      </span>
    </DelayedLink>
  );
}
