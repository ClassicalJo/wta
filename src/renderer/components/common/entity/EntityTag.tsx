import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export default function EntityTag({ className, children }: Props) {
  return <span className={`font-[Rock] text-xm ` + className}>{children}</span>;
}
