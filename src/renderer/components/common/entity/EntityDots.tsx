import React from 'react';

import dotEmpty from '@/resources/icons/dot-empty.svg';
import dotFilled from '@/resources/icons/dot-filled.svg';

import EntityIcon from './EntityIcon';

type Props = {
  maxDots: number;
  currentValue: number;
};

export default function EntityDots({ maxDots, currentValue }: Props) {
  return (
    <p className='flex gap-1 items-center'>
      {Array(currentValue)
        .fill('')
        .map((_, index) => (
          <span key={`filled-${index}`}>
            <EntityIcon src={dotFilled} />
          </span>
        ))}
      {Array(maxDots - currentValue)
        .fill('')
        .map((_, index) => (
          <span key={`empty-${index}`}>
            <EntityIcon src={dotEmpty} />
          </span>
        ))}
    </p>
  );
}
