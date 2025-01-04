import React, { useEffect } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';

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
      <div>Hello world!</div>
      <input type='button' value='Send message' onClick={handleClick} />
    </>
  );
}
