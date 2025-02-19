import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import { DelayedNavigationContext } from '@/renderer/context/DelayedNavigation';

import CharacterBackground from '../backgrounds/CharacterBackground';
import FightBackground from '../backgrounds/FightBackground';
import GiftBackground from '../backgrounds/GiftBackground';
import MainBackground from '../backgrounds/MainBackground';
import RitualBackground from '../backgrounds/RitualBackground';

export default function Background() {
  const location = useLocation();
  const section = location.pathname.split('/').at(1);
  const path = section ? `/${section}` : '/';
  const { setActive } = useContext(DelayedNavigationContext);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    ref.current = setTimeout(() => setActive(true), 150);
    return () => {
      ref.current && clearTimeout(ref.current);
    };
  }, [location, setActive]);

  switch (path) {
    case '/':
      return <MainBackground />;
    case '/character':
      return <CharacterBackground />;
    case '/ritual':
      return <RitualBackground />;
    case '/gift':
      return <GiftBackground />;
    case '/fight':
      return <FightBackground />;
    default:
      return <MainBackground />;
  }
}
