import React, { useEffect } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';

import MainBackground from './components/common/backgrounds/MainBackground';
import DelayedLink from './components/common/ui/DelayedLink';
import { useBackgroundPosition } from './hooks/common/useBackgroundPosition';
import { useDelayedNavigation } from './hooks/common/useDelayedNavigation';
import './index.css';

export default function App() {
  const { starting, started, leaving, dispatchNavigation } =
    useDelayedNavigation(500);
  const linkProps = {
    isNavigating: leaving,
    setIsNavigating: dispatchNavigation,
  };
  const initialOpacity = starting ? 'opacity-0' : '';
  const startedOpacity = started ? 'opacity-100' : '';
  const leavingOpacity = leaving ? 'opacity-0' : '';
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
    <div
      className={`
        ${initialOpacity} transition-opacity duration-300 flex flex-1 items-center justify-center ${startedOpacity} ${leavingOpacity}    `}
    >
      <MainBackground />
      <div className='relative flex flex-col text-orange-100 text-5xl font-[Rock] bg-black/70 border-2 border-orange-100 rounded-xl'>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out px-12 py-10 [text-shadow:3px_3px_3px_rgba(255,255,255,.5)]'
          to={'/character'}
        >
          Characters
        </DelayedLink>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out px-12 py-10 [text-shadow:3px_3px_3px_rgba(255,255,255,.5)]'
          to={'/gift'}
        >
          Gifts
        </DelayedLink>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out px-12 py-10 [text-shadow:3px_3px_3px_rgba(255,255,255,.5)]'
          to={'/ritual'}
        >
          Rituals
        </DelayedLink>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out px-12 py-10 [text-shadow:3px_3px_3px_rgba(255,255,255,.5)]'
          to={'/fight'}
        >
          Fight!
        </DelayedLink>
      </div>
    </div>
  );
}
