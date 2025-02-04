import React, { useEffect } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';

import MainBackground from './components/common/backgrounds/MainBackground';
import MenuLink from './components/menu/MenuLink';
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
  return (
    <div
      className={`
        ${initialOpacity} relative transition-opacity duration-300 h-screen w-screen max-w-[100vw] ${startedOpacity} ${leavingOpacity}    `}
    >
      <MainBackground />
      <div className='absolute flex flex-col font-[Solitreo] bottom-[5vh] right-[10vw] '>
        <MenuLink {...linkProps} to={'/character'}>
          Characters
        </MenuLink>
        <MenuLink {...linkProps} to={'/gift'}>
          Gifts
        </MenuLink>
        <MenuLink {...linkProps} to={'/ritual'}>
          Rituals
        </MenuLink>
        <MenuLink {...linkProps} to={'/fight'}>
          Fight!
        </MenuLink>
      </div>
    </div>
  );
}
