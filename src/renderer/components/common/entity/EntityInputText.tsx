import React, { useState } from 'react';

import icon from '@/resources/icons/edit.svg';

import EditableInputText from '../ui/EditableInputText';

type Props = {
  propertyName: string;
  propertyValue: string;
  update: (propertyName: string, propertyValue: string) => void;
};
export default function EntityInputText({
  propertyName,
  propertyValue,
  update,
}: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const handleSubmit = (value: string) => {
    setEdit(false);
    update(propertyName, value);
  };
  return (
    <div className='flex h-9 rounded-sm items-center'>
      <EditableInputText
        edit={edit}
        setEdit={setEdit}
        propertyValue={propertyValue}
        submit={handleSubmit}
      >
        <p className='flex-1 px-2'>{propertyValue}</p>
        <button className='h-5 w-5 mr-2' onClick={() => setEdit(true)}>
          <img className='invert' src={icon} />
        </button>
      </EditableInputText>
    </div>
  );
}
