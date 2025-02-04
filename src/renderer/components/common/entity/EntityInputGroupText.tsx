import React from 'react';

import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityInputText from './EntityInputText';
import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: string;
  update: (propertyValue: string) => void;
};
export default function EntityInputGroupText({
  propertyName,
  propertyValue,
  update,
}: Props) {
  return (
    <div className='flex flex-col my-4'>
      <EntityTag className='mb-2'>
        {capitalizeCamelCase(propertyName)}
      </EntityTag>
      <div className='border-b-4 border-white'>
        <EntityInputText propertyValue={propertyValue} update={update} />
      </div>
    </div>
  );
}
