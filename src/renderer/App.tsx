import React, { useEffect } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';

import FadeWrapper from './components/common/layout/FadeWrapper';
import MenuLink from './components/menu/MenuLink';
import './index.css';

export default function App() {
  useEffect(() => {
    const callback = window.electron.onMainMessage(
      MainMessages.MAIN_MESSAGE,
      console.log,
    );
    return () => {
      window.electron.offMainMessage(MainMessages.MAIN_MESSAGE, callback);
    };
  }, []);
  return (
    <FadeWrapper
      className={`flex min-h-screen flex-col p-8 font-[Staatliches]`}
    >
      <div className='mt-16 flex flex-1 select-none flex-col'>
        <h2 className='text-3xl leading-none'>BATTLE SIMULATOR</h2>
        <h1 className='text-[8rem] leading-none sm:text-[10rem] md:text-[12rem] xl:text-[14rem]'>
          WEREWOLF
        </h1>
        <div className='ml-4 mt-[3vh] flex flex-1 flex-col gap-4 text-3xl md:gap-8 md:text-4xl'>
          <MenuLink to={'/character'}>{'>> Characters'} </MenuLink>
          <MenuLink to={'/gift'}>{'>> Gifts'}</MenuLink>
          <MenuLink to={'/ritual'}>{'>> Rituals'}</MenuLink>
          <MenuLink to={'/fight'}>{'>> Fight'}</MenuLink>
        </div>
      </div>
    </FadeWrapper>
  );
}
