import React from 'react';

type Props = {
  className?: string;
  src: string;
};
export default function CharacterIcon({ className, src }: Props) {
  return <img src={src} alt='' className={className || 'w-3 h-3'} />;
}
