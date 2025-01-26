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
  update: (propertyName: string, propertyValue: string) => void;
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
    update(propertyName, e.target.value);
  }

  return (
    <div className='flex flex-col gap-2'>
      <EntityTag>{capitalizeCamelCase(propertyName)}</EntityTag>
      <div className='flex bg-white/25 rounded-sm p-2 items-center h-9'>
        <select
          className='flex-1 bg-transparent'
          onChange={onChange}
          value={value}
        >
          {list.map((item, index) => (
            <option
              key={`entity-options-${index}`}
              className='text-black'
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
