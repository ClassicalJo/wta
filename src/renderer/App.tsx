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
      <div
        className='relative p-8 flex flex-col gap-12 text-orange-100 text-6xl font-[Rock] 
        '
      >
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out'
          to={'/character'}
        >
          Characters
        </DelayedLink>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out'
          to={'/gift'}
        >
          Gifts
        </DelayedLink>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out'
          to={'/ritual'}
        >
          Rituals
        </DelayedLink>
        <DelayedLink
          {...linkProps}
          className='hover:text-orange-400 transition-all duration-200 ease-in-out'
          to={'/fight'}
        >
          Fight!
        </DelayedLink>
      </div>
    </div>
  );
}
