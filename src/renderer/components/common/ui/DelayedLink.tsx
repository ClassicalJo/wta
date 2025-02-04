import React, { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router';

export type DelayedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  delay?: number;
  children: React.ReactNode;
  isNavigating: boolean;
  setIsNavigating: (value: boolean) => void;
};
export default function DelayedLink({
  to,
  delay = 500,
  children,
  isNavigating,
  setIsNavigating,
  ...props
}: DelayedLinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isNavigating) return;
    setIsNavigating(true);

    setTimeout(() => {
      navigate(to);
    }, delay);
  };

  return (
    <Link to={to} onClick={handleClick} aria-disabled={isNavigating} {...props}>
      {children}
    </Link>
  );
}
