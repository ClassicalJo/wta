import React, { useState } from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import accept from '@/resources/icons/accept.svg';
import cancel from '@/resources/icons/cancel.svg';
import edit from '@/resources/icons/edit.svg';

import CharacterIcon from './CharacterIcon';

type Props = {
  propertyName: string;
  propertyValue: string;
  update: (partial: Omit<Character, 'id'>) => void;
};
export default function CharacterInputText({
  propertyName,
  propertyValue,
  update,
}: Props) {
  const [updating, setUpdating] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onUpdate = () => {
    update({ [propertyName]: value });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
          <span className='flex gap-1'>
            <button onClick={onUpdate}>
              <CharacterIcon src={accept} className='h-6 w-6' />
            </button>
            <button onClick={() => setUpdating(false)}>
              <CharacterIcon src={cancel} className='h-6 w-6' />
            </button>
          </span>
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
        <button className='h-5 w-5' onClick={() => setUpdating(true)}>
          <img src={edit} />
        </button>
      </div>
    </div>
  );
}
