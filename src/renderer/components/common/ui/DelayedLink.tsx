import React, { MouseEvent, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router';

import { DelayedNavigationContext } from '@/renderer/context/DelayedNavigation';

export type DelayedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  delay?: number;
  children: React.ReactNode;
};
export default function DelayedLink({
  to,
  delay = 300,
  children,
  ...props
}: DelayedLinkProps) {
  const navigate = useNavigate();
  const { active, setActive } = useContext(DelayedNavigationContext);
  const ref = useRef<HTMLAnchorElement | null>(null);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActive(false);
    setTimeout(() => {
      navigate(to);
    }, delay);
  };

  return (
    <Link
      ref={ref}
      to={to}
      onClick={handleClick}
      aria-disabled={active}
      {...props}
    >
      {children}
    </Link>
  );
}
