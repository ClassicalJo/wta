import React from 'react';

import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EntityInputTextArea from './EntityInputTextArea';
import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: string;
  update: (propertyName: string, propertyValue: string) => void;
};
export default function EntityInputGroupTextArea({
  propertyName,
  propertyValue,
  update,
}: Props) {
  return (
    <div className='flex flex-col'>
      <EntityTag className='mb-2'>
        {capitalizeCamelCase(propertyName)}
      </EntityTag>

      <EntityInputTextArea
        propertyName={propertyName}
        propertyValue={propertyValue}
        update={update}
      />
    </div>
  );
}
