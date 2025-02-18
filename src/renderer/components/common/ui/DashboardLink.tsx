import React from 'react';

import DelayedLink from './DelayedLink';

type Props = {
  to: string;
  children: React.ReactNode;
};
export default function DashboardLink({ to, children }: Props) {
  return (
    <div>
      <DelayedLink
        className='box-content flex min-w-[360px] items-center justify-center rounded-md bg-dark-text px-8 py-8 drop-shadow-[0px_5px_3px_rgba(0,0,0,.75)] transition-all duration-300 ease-in-out'
        to={to}
      >
        <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
          {children}
        </p>
      </DelayedLink>
    </div>
  );
}
