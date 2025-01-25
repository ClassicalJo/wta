import React from 'react';

import {
  capitalizeCamelCase,
  capitalizeEachWord,
} from '@/shared/utils/capitalize';
import { nameOrId } from '@/shared/utils/nameOrId';
import { removeUnderline } from '@/shared/utils/removeUnderline';

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
      className='w-full max-w-xl max-h-[50%] relative bg-transparent'
    >
      <div className='m-4 bg-white rounded-md'>
        <div className='flex justify-center border-b-black border-b-2 px-4 py-2 sticky top-0 left-0 w-full bg-white rounded-t-md'>
          <h1 className='flex-1 text-2xl'>
            {capitalizeCamelCase(propertyName)}
          </h1>
          <button
            className='px-2 text-xl justify-center'
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
              <div className='flex px-4 py-2 gap-4 bg-white transition duration-150 ease-in-out hover:bg-orange-50'>
                <p className='text-2xl'>+</p>
                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-xl cursor-pointer flex-1 text-left'>
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
