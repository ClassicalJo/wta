import React from 'react';

import { BackgroundPosition } from '@/renderer/context/BackgroundPosition';
import stars from '@/resources/images/stars.jpg';

type Props = {
  position?: BackgroundPosition;
};

export default function BackgroundImage({ position }: Props) {
  const styles = positionToClassName(position);
  return (
    <div className='absolute max-w-full max-h-full overflow-hidden pointer-events-none select-none z-[-1]'>
      <img
        className={`${styles} min-w-[4096px] transition-all duration-[2000ms] ease-in-out`}
        src={stars}
      />
    </div>
  );
}

const top = `translate-y-[-384px]`;
const bottom = `translate-y-[-640px]`;
const left = `translate-x-[-1920px]`;
const right = `translate-x-[-2176px]`;
const centerX = `translate-x-[-2048px]`;
const centerY = `translate-y-[-512px]`;

function positionToClassName(position: BackgroundPosition) {
  switch (position) {
    case 'top':
      return `${centerX} ${top}`;
    case 'top-left':
      return `${left} ${top}`;
    case 'top-right':
      return `${right} ${top}`;
    case 'bottom':
      return `${centerX} ${bottom}`;
    case 'bottom-left':
      return `${left} ${bottom}`;
    case 'bottom-right':
      return `${right} ${bottom}`;
    case 'left':
      return `${left} ${centerY}`;
    case 'right':
      return `${right} ${centerY}`;
    case 'middle':
    default:
      return `${centerX} ${centerY}`;
  }
}
