import React from 'react';

type Props = {
  showConfirmation: boolean;
  deleteCharacter: () => void;
  cancelDeleteCharacter: () => void;
};
export default function CharacterDelete({
  showConfirmation,
  deleteCharacter,
  cancelDeleteCharacter,
}: Props) {
  if (!showConfirmation)
    return (
      <div className='flex h-20 items-end mt-4'>
        <input
          className='flex-1 bg-red-500 border-2 border-red-500 text-white rounded-full px-5 py-1 font-bold'
          type='button'
          value='Delete'
          onClick={deleteCharacter}
        />
      </div>
    );
  else
    return (
      <div className='flex flex-col h-20 mt-4'>
        <div className='flex-1 flex-col content-end'>
          <p className=' text-red-500 flex-1 my-2'>
            Are you sure you want to delete this character?
          </p>
        </div>
        <div className='flex gap-4'>
          <input
            className='flex-1 bg-red-500 border-2 border-red-500 text-white rounded-full px-5 py-1 font-bold'
            type='button'
            value='Delete'
            onClick={deleteCharacter}
          />
          <input
            className='flex-1 border-red-500 border-2 rounded-full px-5 py-1 text-red-500 font-bold'
            type='button'
            value='Cancel'
            onClick={cancelDeleteCharacter}
          />
        </div>
      </div>
    );
}
