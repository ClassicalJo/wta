import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export default function EntityTag({ className, children }: Props) {
  return (
    <span
      className={
        `text-md lg:text-md min-w-[40px] overflow-hidden text-ellipsis whitespace-nowrap font-[Rock] md:text-sm ` +
        className
      }
    >
      {children}
    </span>
  );
}
