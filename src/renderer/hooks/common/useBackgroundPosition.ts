import { useContext, useEffect } from 'react';

import {
  BackgroundContext,
  BackgroundPosition,
} from '@/renderer/context/BackgroundPosition';

export function useBackgroundPosition(position?: BackgroundPosition) {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  useEffect(() => {
    position && context.setPosition(position);
  }, [position, context]);
  return context;
}
