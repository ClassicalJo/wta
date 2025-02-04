import React from 'react';
import { Outlet } from 'react-router';

import Breadcrumbs from './Breadcrumbs';
import Main from './Main';

export default function Layout() {
  return (
    <div className='relative bg-dark-primary min-h-screen'>
      <Breadcrumbs />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
