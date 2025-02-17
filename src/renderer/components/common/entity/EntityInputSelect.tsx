import React, { useEffect, useState } from 'react';

import {
  capitalizeCamelCase,
  capitalizeEachWord,
} from '@/shared/utils/capitalize';
import { removeUnderline } from '@/shared/utils/removeUnderline';

import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: string;
  list: string[];
  update: (propertyValue: string) => void;
};

export default function EntityInputSelect({
  list,
  propertyName,
  propertyValue,
  update,
}: Props) {
  const [value, setValue] = useState<string>(String(propertyValue) ?? '');

  useEffect(() => {
    setValue(String(propertyValue) ?? '');
  }, [propertyValue]);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === propertyValue) return;
    setValue(e.target.value);
    update(e.target.value);
  }

  return (
    <div className='my-4 flex flex-col'>
      <EntityTag className='mb-2'>
        {capitalizeCamelCase(propertyName)}
      </EntityTag>
      <div className='flex h-10 items-center border-b-4 border-white font-[Solitreo] text-2xl'>
        <select
          className='flex-1 border-none bg-transparent outline-none'
          onChange={onChange}
          value={value}
        >
          {list.map((item, index) => (
            <option
              key={`entity-options-${index}`}
              className='bg-dark-primary text-white'
              value={item}
            >
              {capitalizeEachWord(removeUnderline(item))}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
