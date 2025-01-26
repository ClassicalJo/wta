import React, { useEffect, useState } from 'react';

import less from '@/resources/icons/minus.svg';
import more from '@/resources/icons/plus.svg';

import EntityIcon from './EntityIcon';
import EntityInputNumberSwitch from './EntityInputNumberSwitch';

type Props = {
  propertyValue: number;
  maxDots?: number;
  type?: 'dots' | 'number';
  update: (propertyValue: number) => void;
};
export default function EntityInputNumber({
  propertyValue,
  maxDots = 5,
  type = 'dots',
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
      update(newValue);
    }
  };

  return (
    <div className='flex p-2 items-center'>
      <button className='px-2' onClick={() => onUpdate(-1)}>
        <EntityIcon src={less} className='invert' />
      </button>
      <EntityInputNumberSwitch maxDots={maxDots} value={value} type={type} />
      <button className='px-2' onClick={() => onUpdate(1)}>
        <EntityIcon src={more} className='invert' />
      </button>
    </div>
  );
}
