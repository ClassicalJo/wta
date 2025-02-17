import React from 'react';

import { capitalize } from '@/shared/utils/capitalize';

import useNavBar from '../../../hooks/common/useNavbar';
import Crumb from './Crumb';
import Origin from './Origin';

export default function Breadcrumbs() {
  const { paths } = useNavBar();
  return (
    <nav
      aria-label='breadcrumb'
      className='fixed left-0 top-0 z-20 w-full bg-transparent p-2 font-[Staatliches] text-2xl text-dark-primary underline [&>*]:drop-shadow-[0px_5px_1px_rgba(0,0,0,.75)]'
    >
      <div className='flex gap-2'>
        {paths.map((key) => {
          if (key.value === 'Home')
            return (
              <Origin key={key.value} to='/'>
                {key.value}
              </Origin>
            );
          else
            return (
              <Crumb key={key.value} to={key.to}>
                {capitalize(key.value)}
              </Crumb>
            );
        })}
      </div>
    </nav>
  );
}
