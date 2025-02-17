import React from 'react';

import DelayedLink from '../ui/DelayedLink';

type Props = {
  children: React.ReactNode;
  to: string;
};

export default function Crumb({ children, to }: Props) {
  return (
    <DelayedLink
      to={to}
      className='bg-white px-6 py-2 transition-all duration-300 ease-in-out last:pr-8 last:[clip-path:polygon(0%_0%,calc(100%-15px)_0%,100%_50%,calc(100%-15px)_100%,0%_100%);] hover:bg-dark-text'
    >
      {children}
    </DelayedLink>
  );
}
