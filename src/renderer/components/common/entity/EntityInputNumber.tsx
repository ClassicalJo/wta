import React, { useEffect, useState } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import less from '@/resources/icons/minus.svg';
import more from '@/resources/icons/plus.svg';

import EntityDots from './EntityDots';
import EntityIcon from './EntityIcon';

type Props<T extends IEntity> = {
  itemId?: number;
  itemIndex?: number;
  propertyName?: keyof T;
  propertyValue: number;
  maxDots?: number;
};
export default function EntityInputNumber<T extends IEntity>({
  itemId,
  itemIndex,
  propertyName,
  propertyValue = 0,
  maxDots = 5,
}: Props<T>) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setValue(propertyValue ?? 0);
  }, [propertyValue, setValue]);

  return (
    <div className='flex p-2 items-center min-w-[148px]'>
      <button
        className='px-2'
        data-id={itemId}
        data-index={itemIndex}
        data-value={Math.max(value - 1, 0)}
        data-name={propertyName}
      >
        <EntityIcon src={less} className='pointer-events-none invert' />
      </button>
      <EntityDots
        itemId={itemId}
        itemIndex={itemIndex}
        maxDots={maxDots}
        currentValue={value}
        propertyName={propertyName}
      />
      <button
        className='px-2'
        data-id={itemId}
        data-index={itemIndex}
        data-value={Math.min(value + 1, maxDots)}
        data-name={propertyName}
      >
        <EntityIcon src={more} className='pointer-events-none invert' />
      </button>
    </div>
  );
}
