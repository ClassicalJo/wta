import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import dotEmpty from '@/resources/icons/dot-empty.svg';
import dotFilled from '@/resources/icons/dot-filled.svg';

import EntityIcon from './EntityIcon';

type Props<T extends IEntity> = {
  maxDots: number;
  currentValue: number;
  itemId?: number;
  itemIndex?: number;
  propertyName?: keyof T;
};

export default function EntityDots<T extends IEntity>({
  maxDots,
  itemId,
  itemIndex,
  currentValue,
  propertyName,
}: Props<T>) {
  return (
    <p className='flex gap-1 items-center '>
      {Array(currentValue)
        .fill('')
        .map((_, index) => (
          <span
            key={`filled-${index}`}
            data-id={itemId}
            data-index={itemIndex}
            data-name={propertyName}
            data-value={index + 1}
            className='z-10 cursor-pointer'
          >
            <EntityIcon
              src={dotFilled}
              className='invert pointer-events-none '
            />
          </span>
        ))}
      {Array(maxDots - currentValue)
        .fill('')
        .map((_, index) => (
          <span
            key={`empty-${index}`}
            data-id={itemId}
            data-index={itemIndex}
            data-name={propertyName}
            data-value={currentValue + index + 1}
            className='cursor-pointer z-10'
          >
            <EntityIcon
              src={dotEmpty}
              className='invert pointer-events-none '
            />
          </span>
        ))}
    </p>
  );
}
