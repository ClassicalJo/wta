import React, { ReactNode, createContext, useState } from 'react';

type DelayedNavigationContextType = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export const DelayedNavigationContext = createContext<
  DelayedNavigationContextType | undefined
>(undefined);

export function DelayedNavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [active, setActive] = useState<boolean>(false);
  console.log(active);
  return (
    <DelayedNavigationContext.Provider value={{ active, setActive }}>
      {children}
    </DelayedNavigationContext.Provider>
  );
}
