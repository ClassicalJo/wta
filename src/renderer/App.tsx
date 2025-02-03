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
        ${initialOpacity} transition-opacity duration-300 flex flex-1 items-center justify-center ${startedOpacity} ${leavingOpacity}     `}
    >
      <MainBackground />
      <div className='relative p-10 flex flex-col gap-4 underline font-bold bg-black/60  text-white border-white border-2 text-3xl'>
        <DelayedLink
          isNavigating={leaving}
          setIsNavigating={dispatchNavigation}
          to={'/character'}
        >
          Characters
        </DelayedLink>
        <DelayedLink
          isNavigating={leaving}
          setIsNavigating={dispatchNavigation}
          to={'/gift'}
        >
          Gifts
        </DelayedLink>
        <DelayedLink
          isNavigating={leaving}
          setIsNavigating={dispatchNavigation}
          to={'/ritual'}
        >
          Rituals
        </DelayedLink>
        <DelayedLink
          isNavigating={leaving}
          setIsNavigating={dispatchNavigation}
          to={'/fight'}
        >
          Fight!
        </DelayedLink>
      </div>
    </div>
  );
}
