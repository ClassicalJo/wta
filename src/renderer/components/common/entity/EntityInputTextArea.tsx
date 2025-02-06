import React, { useState } from 'react';

import icon from '@/resources/icons/edit.svg';

import EditableInputTextArea from '../ui/EditableInputTextArea';

type Props = {
  propertyValue: string;
  update: (propertyValue: string) => void;
};
export default function EntityInputTextArea({ propertyValue, update }: Props) {
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
      <div className='flex flex-col gap-2 flex-1 min-w-80 rounded-sm font-[Solitreo] text-xl'>
        <div className='flex flex-1 focus:bg-slate-50 gap-2 min-h-32  border-4 border-white rounded-sm p-4'>
          <p className='flex-1'>{propertyValue}</p>
          <button className='h-5 w-5' onClick={() => setEdit(true)}>
            <img src={icon} className='invert' />
          </button>
        </div>
      </div>
    </EditableInputTextArea>
  );
}
