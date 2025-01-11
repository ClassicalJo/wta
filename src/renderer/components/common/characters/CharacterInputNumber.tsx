import React, { useEffect, useState } from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import less from '@/resources/icons/minus.svg';
import more from '@/resources/icons/plus.svg';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import CharacterDots from './CharacterDots';
import CharacterIcon from './CharacterIcon';

type Props = {
  propertyName: string;
  propertyValue: number;
  update: (partial: Omit<Character, 'id'>) => void;
};
export default function CharacterInputNumber({
  propertyName,
  propertyValue,
  update,
}: Props) {
  const [value, setValue] = useState<number>(0);

  const maxDots = 5;
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
          <CharacterIcon src={less} />
        </button>
        <CharacterDots maxDots={maxDots} currentValue={value} />
        <button className='px-2' onClick={() => onUpdate(1)}>
          <CharacterIcon src={more} />
        </button>
      </div>
    </div>
  );
}
