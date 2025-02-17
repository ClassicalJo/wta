import React, { useState } from 'react';

import { Background } from '@/main/modules/background/domain/background.entity';

import EntityTitle from '../common/entity/EntityTitle';

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
    <dialog
      ref={ref}
      className='backdrop-blur-sm max-h-[50%] w-full max-w-xl bg-black/50'
    >
      <div className='rounded-md bg-dark-primary'>
        <div className='w-fullrounded-t-md sticky left-0 top-0 flex justify-center px-4 py-2'>
          <EntityTitle className={'flex-1 text-white'}>
            Add a new background
          </EntityTitle>
          <button
            className='justify-center px-2 text-xl invert'
            onClick={handleCloseModal}
          >
            ✖️
          </button>
        </div>

        <div className='flex flex-col gap-4 p-4'>
          <input
            autoFocus={true}
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Background name'
            className='h-8 flex-1 border-b-4 border-white bg-transparent font-[Solitreo] text-2xl text-white placeholder-white/50 focus:bg-transparent'
          />

          <button
            className='h-12 rounded-b-md bg-white font-[Staatliches] text-2xl text-dark-primary transition-colors duration-150 ease-in-out hover:bg-dark-text'
            onClick={onSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
