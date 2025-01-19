import React from 'react';
import { Outlet } from 'react-router';

import Breadcrumbs from './Breadcrumbs';

export default function Layout() {
  return (
    <div className='h-fit max-w-4xl mx-auto'>
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
