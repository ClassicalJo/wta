import React, { useEffect, useState } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import {
  capitalizeCamelCase,
  capitalizeEachWord,
} from '@/shared/utils/capitalize';
import { removeUnderline } from '@/shared/utils/removeUnderline';

type Props<T extends IEntity> = {
  propertyName: string;
  propertyValue: string;
  update: (partial: Omit<T, 'id'>) => void;
  list: string[];
};

export default function EntityInputSelect<T extends IEntity>({
  list,
  propertyName,
  propertyValue,
  update,
}: Props<T>) {
  const [value, setValue] = useState<string>(propertyValue ?? '');

  useEffect(() => {
    setValue(propertyValue ?? '');
  }, [propertyValue]);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === propertyValue) return;
    setValue(e.target.value);
    update({ [propertyName]: e.target.value } as Omit<T, 'id'>);
  }

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-xs'>{capitalizeCamelCase(propertyName)}</p>
      <div className='flex bg-slate-100 rounded-sm p-2 items-center'>
        <select className='flex-1' onChange={onChange} value={value}>
          {list.map((item, index) => (
            <option key={`entity-options-${index}`} value={item}>
              {capitalizeEachWord(removeUnderline(item))}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
