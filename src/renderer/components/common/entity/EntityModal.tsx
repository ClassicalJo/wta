import React from 'react';

import {
  capitalizeCamelCase,
  capitalizeEachWord,
} from '@/shared/utils/capitalize';
import { nameOrId } from '@/shared/utils/nameOrId';
import { removeUnderline } from '@/shared/utils/removeUnderline';

import EntityTitle from './EntityTitle';

type Props<T> = {
  ref: React.Ref<HTMLDialogElement>;
  propertyName: string;
  list: T[];
  onClick: (value: T) => void;
  handleCloseModal: () => void;
};
export default function EntityModal<T>({
  ref,
  propertyName,
  list,
  onClick,
  handleCloseModal,
}: Props<T>) {
  return (
    <dialog
      ref={ref}
      className='backdrop-blur-sm max-h-[50%] w-full max-w-xl bg-dark-primary'
    >
      <div className='rounded-md'>
        <div className='sticky left-0 top-0 flex w-full justify-center bg-dark-primary px-4 py-2'>
          <EntityTitle className={'flex-1 text-white'}>
            {capitalizeCamelCase(propertyName)}
          </EntityTitle>
          <button
            className='justify-center px-2 text-xl invert'
            onClick={handleCloseModal}
          >
            ✖️
          </button>
        </div>

        <div className='flex flex-col p-4'>
          {list.map((value, index) => (
            <button
              key={`entity-modal-${index}`}
              onClick={() => onClick(value)}
            >
              <div className='flex gap-4 bg-transparent px-4 py-2 font-[Solitreo] text-3xl text-white transition duration-150 ease-in-out hover:bg-dark-secondary'>
                <p className='text-4xl'>+</p>
                <p className='flex-1 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap pt-1 text-left'>
                  {typeof value === 'string'
                    ? capitalizeEachWord(removeUnderline(value))
                    : removeUnderline(nameOrId(value))}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </dialog>
  );
}
