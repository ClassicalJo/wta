import React, { useState } from 'react';

import { Background } from '@/main/modules/background/domain/background.entity';

type Props = {
  ref: React.Ref<HTMLDialogElement>;
  handleCloseModal: () => void;
  addBackground: (background: Background) => void;
};
export default function CharacterBackgroundDialog({
  ref,
  handleCloseModal,
  addBackground,
}: Props) {
  const [value, setValue] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);
  const onSubmit = () => {
    addBackground(new Background({ name: value }));
    setValue('');
    handleCloseModal();
  };
  return (
    <dialog ref={ref} className='w-full max-w-xl max-h-[50%] bg-transparent'>
      <div className='bg-white rounded-md'>
        <div className='flex justify-center border-b-black border-b-2 px-4 py-2 sticky top-0 left-0 w-full bg-white rounded-t-md'>
          <h1 className='flex-1 text-2xl'>Add a new background</h1>
          <button
            className='px-2 text-xl justify-center'
            onClick={handleCloseModal}
          >
            ✖️
          </button>
        </div>

        <div className='flex gap-4 p-4'>
          <input
            autoFocus
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Background name'
            className='flex-1 h-8 border-b-2 border-black ml-2   focus:bg-white'
          />

          <button
            className='rounded-full bg-purple-500 text-white text-lg px-4'
            onClick={onSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
