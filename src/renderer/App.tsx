import React, { useEffect } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';

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
    <div
      className={`flex min-h-screen flex-col items-center justify-end gap-8 p-8`}
    >
      <div className='mb-16 flex aspect-square flex-col font-[Solitreo]'>
        <MenuLink to={'/character'}>Characters</MenuLink>
        <MenuLink to={'/gift'}>Gifts</MenuLink>
        <MenuLink to={'/ritual'}>Rituals</MenuLink>
        <MenuLink to={'/fight'}>Fight!</MenuLink>
      </div>
    </div>
    // </FadeWrapper>
  );
}
