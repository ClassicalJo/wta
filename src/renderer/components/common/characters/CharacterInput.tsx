import React, { useState } from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';

type Props = {
  propertyName: keyof Character;
  propertyValue: string;
  update: (propertyName: keyof Character, propertyValue: string) => void;
};
export default function CharacterInput({
  update,
  propertyName,
  propertyValue,
}: Props) {
  const [updating, setUpdating] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onUpdate = () => {
    update(propertyName, value);
    setUpdating(false);
  };

  if (updating)
    return (
      <div className='flex flex-col gap-2'>
        <p className='text-xs'>
          {propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}
        </p>
        <div className='flex bg-slate-100 rounded-sm px-5 py-1'>
          <input
            className='flex flex-1  focus:bg-slate-50'
            type='text'
            onChange={onChange}
            value={value}
            placeholder={propertyValue}
          />
          <button className='text-2xl' onClick={onUpdate}>
            ✔️
          </button>
          <button className='text-2xl' onClick={() => setUpdating(false)}>
            ✖️
          </button>
        </div>
      </div>
    );

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-xs'>
        {propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}
      </p>
      <div className='flex flex-1 bg-slate-100 rounded-sm px-5 py-1 focus:bg-slate-50'>
        <p className='flex-1'>{propertyValue}</p>
        <button className='text-3xl' onClick={() => setUpdating(true)}>
          ✏️
        </button>
      </div>
    </div>
  );
}
