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
    <div
      className='my-4 flex flex-col'
      data-testid={`entity-input-group-text-${propertyName}`}
    >
      <EntityTag className='mb-2'>
        {capitalizeCamelCase(propertyName)}
      </EntityTag>
      <div className='border-b-4 border-white'>
        <EntityInputText
          propertyValue={propertyValue}
          propertyName={propertyName}
          update={update}
        />
      </div>
    </div>
  );
}
