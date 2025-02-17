import React from 'react';
import { Outlet } from 'react-router';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Background from './Background';
import FadeWrapper from './FadeWrapper';
import Main from './Main';

export default function Layout() {
  return (
    <div className='relative min-h-screen'>
      <div className='relative min-h-screen bg-dark-primary'>
        <Breadcrumbs />
        <Background />
        <Main>
          <FadeWrapper className='opacity-0'>
            <Outlet />
          </FadeWrapper>
        </Main>
      </div>
    </div>
  );
}
