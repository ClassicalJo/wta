import React, { useState } from 'react';

import icon from '@/resources/icons/edit.svg';

import EditableInputTextArea from '../ui/EditableInputTextArea';

type Props = {
  propertyValue: string;
  propertyName: string;
  update: (propertyValue: string) => void;
};
export default function EntityInputTextArea({
  propertyValue,
  propertyName,
  update,
}: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const handleUpdate = (value: string) => {
    setEdit(false);
    update(value);
  };
  return (
    <EditableInputTextArea
      edit={edit}
      setEdit={setEdit}
      propertyValue={propertyValue}
      submit={handleUpdate}
    >
      <div className='flex min-w-80 flex-1 flex-col gap-2 rounded-sm font-[Solitreo] text-xl'>
        <div className='flex min-h-32 flex-1 gap-2 rounded-sm border-4 border-white p-4 focus:bg-slate-50'>
          <p className='flex-1'>{propertyValue}</p>
          <button
            className='h-5 w-5'
            aria-label={`Edit ${propertyName}`}
            onClick={() => setEdit(true)}
          >
            <img src={icon} className='invert' />
          </button>
        </div>
      </div>
    </EditableInputTextArea>
  );
}
