import React, { useEffect } from 'react';
import { Link } from 'react-router';

import { MainMessages } from '@/shared/messages/main-messages.enum';

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
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Link to={'/characters'}>Characters</Link>
    </>
  );
}
