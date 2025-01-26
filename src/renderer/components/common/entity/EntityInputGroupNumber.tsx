import React from 'react';

import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityInputNumber from './EntityInputNumber';
import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: number;
  maxDots?: number;
  type?: 'dots' | 'number';
  update: (propertyName: string, propertyValue: number) => void;
};
export default function EntityInputGroupNumber({
  propertyName,
  propertyValue,
  update,
  maxDots = 5,
  type = 'dots',
}: Props) {
  return (
    <div className='flex flex-col gap-2 bg-white/25 rounded-full px-2'>
      <div className='flex h-9 items-center'>
        <EntityTag className='px-2 flex-1'>
          {capitalizeCamelCase(propertyName)}
        </EntityTag>
        <div className='rounded-sm'>
          <EntityInputNumber
            maxDots={maxDots}
            type={type}
            propertyValue={propertyValue}
            propertyName={propertyName}
            update={update}
          />
        </div>
      </div>
    </div>
  );
}
