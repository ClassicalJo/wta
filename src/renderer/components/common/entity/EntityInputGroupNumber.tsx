import React, { HTMLAttributes } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityInputNumber from './EntityInputNumber';
import EntityTag from './EntityTag';

type Props<T extends IEntity> = {
  propertyName: keyof T;
  propertyValue: number;
  maxDots?: number;
};
export default function EntityInputGroupNumber<T extends IEntity>({
  propertyName,
  propertyValue,
  maxDots = 5,
  ...rest
}: Props<T> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className='flex flex-col gap-2'>
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
