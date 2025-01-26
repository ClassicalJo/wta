import React, { useEffect } from 'react';
import { Link } from 'react-router';

import { MainMessages } from '@/shared/messages/main-messages.enum';

import { useBackgroundPosition } from './hooks/common/useBackgroundPosition';
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
  useBackgroundPosition('middle');
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className='relative p-10 flex flex-col gap-4 underline font-bold bg-black/60  text-white border-white border-2 text-3xl'>
        <Link to={'/character'}>Characters</Link>
        <Link to={'/gift'}>Gifts</Link>
        <Link to={'/ritual'}>Rituals</Link>
      </div>
    </div>
  );
}
