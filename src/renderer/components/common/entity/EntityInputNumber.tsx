import React, { useEffect, useState } from 'react';

import less from '@/resources/icons/minus.svg';
import more from '@/resources/icons/plus.svg';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityIcon from './EntityIcon';
import EntityInputNumberSwitch from './EntityInputNumberSwitch';

type Props = {
  propertyName: string;
  propertyValue: number;
  maxDots?: number;
  type?: 'dots' | 'number';
  fontSize?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
  update: (propertyName: string, propertyValue: number) => void;
};
export default function EntityInputNumber({
  propertyName,
  propertyValue,
  maxDots = 5,
  type = 'dots',
  fontSize = 'text-xs',
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
      update(propertyName, newValue);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex bg-slate-100 rounded-sm p-2 items-center'>
        <span className={fontSize + ' flex-1'}>
          {capitalizeCamelCase(propertyName)}
        </span>
        <button className='px-2' onClick={() => onUpdate(-1)}>
          <EntityIcon src={less} />
        </button>
        <EntityInputNumberSwitch maxDots={maxDots} value={value} type={type} />
        <button className='px-2' onClick={() => onUpdate(1)}>
          <EntityIcon src={more} />
        </button>
      </div>
    </div>
  );
}
