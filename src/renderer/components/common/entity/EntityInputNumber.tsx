import React, { useEffect, useState } from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import less from '@/resources/icons/minus.svg';
import more from '@/resources/icons/plus.svg';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityDots from './EntityDots';
import EntityIcon from './EntityIcon';

type Props = {
  propertyName: string;
  propertyValue: number;
  maxDots?: number;
  update: (partial: Omit<Character, 'id'>) => void;
};
export default function EntityInputNumber({
  propertyName,
  propertyValue,
  maxDots = 5,
  update,
}: Props) {
  const [value, setValue] = useState<number>(0);

  const minDots = 0;

  useEffect(() => {
    setValue(propertyValue ?? 0);
  }, [propertyValue, setValue]);

  const onUpdate = (dif: number) => {
    const max = Math.min(maxDots, value + dif);
    const min = Math.max(minDots, value + dif);
    const newValue = value > 0 ? max : min;
    if (newValue !== value) {
      setValue(newValue);
      update({ [propertyName]: newValue });
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex bg-slate-100 rounded-sm p-2 items-center'>
        <span className='text-xs flex-1'>
          {capitalizeCamelCase(propertyName)}
        </span>
        <button className='px-2' onClick={() => onUpdate(-1)}>
          <EntityIcon src={less} />
        </button>
        <EntityDots maxDots={maxDots} currentValue={value} />
        <button className='px-2' onClick={() => onUpdate(1)}>
          <EntityIcon src={more} />
        </button>
      </div>
    </div>
  );
}
