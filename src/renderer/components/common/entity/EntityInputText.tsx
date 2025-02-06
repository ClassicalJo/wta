import React, { useState } from 'react';

import icon from '@/resources/icons/edit.svg';

import EditableInputText from '../ui/EditableInputText';

type Props = {
  propertyValue: string;
  update: (propertyValue: string) => void;
};
export default function EntityInputText({ propertyValue, update }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const handleSubmit = (value: string) => {
    setEdit(false);
    update(value);
  };
  return (
    <div className='flex h-9 rounded-sm items-center'>
      <EditableInputText
        edit={edit}
        setEdit={setEdit}
        propertyValue={propertyValue}
        submit={handleSubmit}
      >
        <p className='flex-1 text-2xl font-[Solitreo] max-w-screen-sm overflow-hidden text-ellipsis whitespace-nowrap'>
          {propertyValue}
        </p>
        <button className='h-5 w-5 mr-2' onClick={() => setEdit(true)}>
          <img className='invert' src={icon} />
        </button>
      </EditableInputText>
    </div>
  );
}
