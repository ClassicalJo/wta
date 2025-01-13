import React from 'react';

import Breadcrumb from './Breadcrumb';
import useNavBar from './useNavbar';

export default function Breadcrumbs() {
  const { paths } = useNavBar();
  return (
    <nav aria-label='breadcrumb'>
      <div className='flex items-center gap-4'>
        {paths.map((key) => (
          <Breadcrumb key={key.to} {...key} />
        ))}
      </div>
    </nav>
  );
}
