import React, { useState } from 'react';

import icon from '@/resources/icons/edit.svg';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

import EditableInputText from '../ui/EditableInputText';
import EntityTag from './EntityTag';

type Props = {
  propertyName: string;
  propertyValue: string;
  update: (propertyName: string, propertyValue: string) => void;
  hide?: boolean;
};
export default function EntityInputText({
  propertyName,
  propertyValue,
  update,
  hide = false,
}: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const handleSubmit = (value: string) => {
    setEdit(false);
    update(propertyName, value);
  };
  return (
    <div className='flex flex-col gap-2'>
      <EntityTag className={`${hide ? 'hidden' : ''}`}>
        {capitalizeCamelCase(propertyName)}
      </EntityTag>
      <div className='flex h-9 bg-slate-100 rounded-sm items-center'>
        <EditableInputText
          edit={edit}
          setEdit={setEdit}
          propertyValue={propertyValue}
          submit={handleSubmit}
        >
          <p className='flex-1 px-2'>{propertyValue}</p>
          <button className='h-5 w-5 mr-2' onClick={() => setEdit(true)}>
            <img src={icon} />
          </button>
        </EditableInputText>
      </div>
    </div>
  );
}
