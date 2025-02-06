import React from 'react';
import { Outlet } from 'react-router';

import Background from './Background';
import Breadcrumbs from './Breadcrumbs';
import Main from './Main';

export default function Layout() {
  return (
    <div className='relative min-h-screen'>
      <div className='relative bg-dark-primary min-h-screen'>
        <Breadcrumbs />
        <Background />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}
