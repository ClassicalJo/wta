import React from 'react';

import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityInputText from './EntityInputText';
import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: string;
  update: (propertyName: string, propertyValue: string) => void;
};
export default function EntityInputGroupText({
  propertyName,
  propertyValue,
  update,
}: Props) {
  return (
    <div className='flex flex-col'>
      <EntityTag className='mb-2'>
        {capitalizeCamelCase(propertyName)}
      </EntityTag>
      <div className='bg-white/25 rounded-sm'>
        <EntityInputText
          propertyName={propertyName}
          propertyValue={propertyValue}
          update={update}
        />
      </div>
    </div>
  );
}
