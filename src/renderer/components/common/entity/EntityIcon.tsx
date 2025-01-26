import React from 'react';

type Props = {
  className?: string;
  src: string;
};
export default function EntityIcon({ className, src }: Props) {
  return <img src={src} alt='' className={`w-3 h-3 ${className}`} />;
}
