import React from 'react';

import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityInputNumber from './EntityInputNumber';
import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: number;
  maxDots?: number;
};

export default function EntityInputGroupNumber({
  propertyName,
  propertyValue,
  maxDots = 5,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className='flex flex-col gap-2'
      data-testid={`entity-input-group-number-${propertyName}`}
    >
      <div className='flex h-9 items-center'>
        <EntityTag className='flex-1'>
          {capitalizeCamelCase(propertyName.toString())}
        </EntityTag>
        <div className='rounded-sm'>
          <EntityInputNumber
            maxDots={maxDots}
            propertyName={propertyName}
            propertyValue={propertyValue}
          />
        </div>
      </div>
    </div>
  );
}
