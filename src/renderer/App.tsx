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
      className={`flex flex-col gap-8 p-8 min-h-screen items-center justify-end`}
    >
      <div className='flex flex-col font-[Solitreo] aspect-square mb-16'>
        <MenuLink to={'/character'}>Characters</MenuLink>
        <MenuLink to={'/gift'}>Gifts</MenuLink>
        <MenuLink to={'/ritual'}>Rituals</MenuLink>
        <MenuLink to={'/fight'}>Fight!</MenuLink>
      </div>
    </div>
  );
}
