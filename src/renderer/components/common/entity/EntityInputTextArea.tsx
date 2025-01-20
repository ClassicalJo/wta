import React, { useEffect, useState } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import { useClickOutside } from '@/renderer/hooks/common/useClickOutside';
import { useKey } from '@/renderer/hooks/common/useKey';
import edit from '@/resources/icons/edit.svg';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

type Props<T extends IEntity> = {
  propertyName: string;
  propertyValue: string;
  update: (partial: Omit<T, 'id'>) => void;
};
export default function EntityInputTextArea<T extends IEntity>({
  propertyName,
  propertyValue,
  update,
}: Props<T>) {
  const [updating, setUpdating] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(propertyValue ?? '');
  }, [propertyValue]);

  const onUpdate = () => {
    setUpdating(false);
    if (value === propertyValue) return;
    else update({ [propertyName]: value } as Omit<T, 'id'>);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const { ref } = useClickOutside(onUpdate);
  useKey('Enter', ref, onUpdate);

  if (updating)
    return (
      <div className='flex flex-col gap-2'>
        <p className='text-xs'>{capitalizeCamelCase(propertyName)}</p>
        <div className='flex bg-slate-100 rounded-sm p-2'>
          <textarea
            ref={ref}
            className='flex flex-1 focus:bg-slate-50 min-h-32'
            onChange={onChange}
            value={value ?? ''}
            placeholder={propertyValue}
            autoFocus
          />
        </div>
      </div>
    );

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-xs'>{capitalizeCamelCase(propertyName)}</p>
      <div className='flex flex-1 bg-slate-100 rounded-sm p-2 focus:bg-slate-50 gap-2 min-h-32'>
        <p className='flex-1'>{propertyValue}</p>
        <button className='h-5 w-5' onClick={() => setUpdating(true)}>
          <img src={edit} />
        </button>
      </div>
    </div>
  );
}
