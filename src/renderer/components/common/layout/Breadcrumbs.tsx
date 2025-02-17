import React from 'react';

import useNavBar from '../../../hooks/common/useNavbar';
import Breadcrumb from './Breadcrumb';

export default function Breadcrumbs() {
  const { paths } = useNavBar();
  return (
    <nav aria-label='breadcrumb' className='fixed left-0 top-0 z-20 h-8 w-full'>
      <div className='flex items-center gap-4'>
        {paths.map((key) => (
          <Breadcrumb key={key.to} {...key} />
        ))}
      </div>
    </nav>
  );
}
