import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { DelayedNavigationContext } from '@/renderer/context/DelayedNavigation';

type Props = {
  inProp?: boolean;
  children: React.ReactNode;
  timeout?: number;
  className?: string;
};
export default function FadeWrapper({
  children,
  timeout = 300,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { active } = useContext(DelayedNavigationContext);
  return (
    <CSSTransition
      nodeRef={ref}
      in={active}
      timeout={timeout}
      classNames='appear'
    >
      <div ref={ref} className={className ? className : ''}>
        {children}
      </div>
    </CSSTransition>
  );
}
