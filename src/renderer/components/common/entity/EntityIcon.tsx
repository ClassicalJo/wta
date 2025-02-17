import React from 'react';

type Props = {
  className?: string;
  src: string;
};
export default function EntityIcon({ className, src }: Props) {
  return <img src={src} alt='' className={`h-3 w-3 ${className}`} />;
}
