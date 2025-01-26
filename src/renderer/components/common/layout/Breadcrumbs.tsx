import React from 'react';

import useNavBar from '../../../hooks/common/useNavbar';
import Breadcrumb from './Breadcrumb';

export default function Breadcrumbs() {
  const { paths } = useNavBar();
  return (
    <nav aria-label='breadcrumb' className='fixed w-full h-8 top-0 left-0 z-10'>
      <div className='flex items-center gap-4'>
        {paths.map((key) => (
          <Breadcrumb key={key.to} {...key} />
        ))}
      </div>
    </nav>
  );
}
