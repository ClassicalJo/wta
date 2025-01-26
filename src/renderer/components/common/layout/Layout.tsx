import React from 'react';
import { Outlet } from 'react-router';

import { useBackgroundPosition } from '@/renderer/hooks/common/useBackgroundPosition';

import BackgroundImage from '../ui/BackgroundImage';
import Breadcrumbs from './Breadcrumbs';
import Main from './Main';

export default function Layout() {
  const { position } = useBackgroundPosition();
  return (
    <div className='min-h-screen h-full relative overflow-hidden max-h-screen'>
      <BackgroundImage position={position} />
      <div className='min-h-screen h-full relative overflow-hidden max-h-screen'>
        <Breadcrumbs />
        <div className='mx-auto min-h-screen flex'>
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
    </div>
  );
}
