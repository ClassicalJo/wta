import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export default function EntityTag({ className, children }: Props) {
  return (
    <span
      className={
        `font-[Rock] text-md md:text-sm lg:text-md whitespace-nowrap overflow-hidden text-ellipsis min-w-[40px] ` +
        className
      }
    >
      {children}
    </span>
  );
}
