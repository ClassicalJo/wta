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
      <Link to={'/character'}>Characters</Link>
      <Link to={'/gift'}>Gifts</Link>
      <Link to={'/ritual'}>Rituals</Link>
    </>
  );
}
