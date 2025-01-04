import React, { useEffect } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';

import './index.css';

export default function App() {
  useEffect(() => {
    window.electron.onMainMessage(MainMessages.MAIN_MESSAGE, (payload) => {
      console.log(payload);
    });
  }, []);

  function handleClick() {
    window.electron.rendererMessage('Hello from renderer');
  }
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <input
        className='bg-blue-500 rounded-full px-4 my-2 text-white'
        type='button'
        value='Send message'
        onClick={handleClick}
      />
    </>
  );
}
