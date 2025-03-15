import React, { useState } from 'react';

import icon from '@/resources/icons/edit.svg';

import EditableInputText from '../ui/EditableInputText';

type Props = {
  propertyValue: string;
  propertyName: string;
  update: (propertyValue: string) => void;
};
export default function EntityInputText({
  propertyValue,
  propertyName,
  update,
}: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const handleSubmit = (value: string) => {
    setEdit(false);
    update(value);
  };
  return (
    <div className='flex h-9 items-center rounded-sm'>
      <EditableInputText
        edit={edit}
        setEdit={setEdit}
        propertyValue={propertyValue}
        submit={handleSubmit}
      >
        <p className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-[Solitreo] text-2xl'>
          {propertyValue}
        </p>
        <button
          className='mr-2 h-5 w-5'
          aria-label={`Edit ${propertyName}`}
          onClick={() => setEdit(true)}
        >
          <img className='invert' src={icon} />
        </button>
      </EditableInputText>
    </div>
  );
}
