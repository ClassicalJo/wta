import React, { ReactNode, createContext, useState } from 'react';

export type BackgroundPosition =
  | 'left'
  | 'right'
  | 'middle'
  | 'bottom'
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type BackgroundContextType = {
  position: BackgroundPosition;
  setPosition: (position: BackgroundPosition) => void;
};

// Create the Context
export const BackgroundContext = createContext<
  BackgroundContextType | undefined
>(undefined);

// Provider Component
export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<BackgroundPosition>('middle');

  return (
    <BackgroundContext.Provider value={{ position, setPosition }}>
      {children}
    </BackgroundContext.Provider>
  );
}
