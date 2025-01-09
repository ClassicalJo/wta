import { Field } from 'formik';
import React from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';

type Props = {
  propertyName: keyof Character;
  placeholder?: string;
};

export default function CharacterField({ propertyName, placeholder }: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={propertyName} className='text-xs'>
        {propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}
      </label>

      <Field
        className='flex-1 bg-slate-100 rounded-sm px-5 py-1 focus:bg-slate-50'
        id={propertyName}
        name={propertyName}
        placeholder={placeholder}
      />
    </div>
  );
}
