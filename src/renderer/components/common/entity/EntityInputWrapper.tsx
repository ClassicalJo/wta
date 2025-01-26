import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function EntityInputWrapper({ children, className }: Props) {
  const style = 'px-2 bg-white/25 rounded-full ' + className;
  return <div className={style}>{children}</div>;
}
