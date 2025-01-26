import { Field } from 'formik';
import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

type Props<T extends IEntity> = {
  propertyName: Extract<keyof T, string>;
  placeholder?: string;
};

export default function EntityFormField<T extends IEntity>({
  propertyName,
  placeholder,
}: Props<T>) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={propertyName} className='text-xs'>
        {propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}
      </label>

      <Field
        className='flex-1 bg-white/25 rounded-sm px-5 py-1 focus:bg-slate-50 text-black'
        id={propertyName}
        name={propertyName}
        placeholder={placeholder}
      />
    </div>
  );
}
