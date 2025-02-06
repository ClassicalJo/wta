import React from 'react';

type Props = {
  entityName: string;
  showConfirmation: boolean;
  deleteEntity: () => void;
  cancelDelete: () => void;
};
export default function EntityDelete({
  entityName,
  showConfirmation,
  deleteEntity,
  cancelDelete,
}: Props) {
  if (!showConfirmation)
    return (
      <div className='flex items-end pt-4 min-h-36 font-[Rock]'>
        <input
          className='flex-1 bg-dark-warning border-2 border-dark-warning hover:bg-dark-warning hover:border-dark-warning text-white rounded-b-md font-[Rock] p-2 font-bold cursor-pointer h-12'
          type='button'
          value='Delete'
          onClick={deleteEntity}
        />
      </div>
    );
  else
    return (
      <div className='flex flex-col pt-4 font-[Rock] min-h-36'>
        <div className='flex flex-1 items-end my-4'>
          <p className='text-md sm:text-lg text-white [text-shadow:1px_1px_3px_rgba(255,255,255,0.8)] animate-fade-up-sm'>
            {`Are you sure you want to delete this ${entityName}?`}
          </p>
        </div>
        <div className='flex gap-4'>
          <input
            className='flex-1 h-12 p-2 align-middle bg-dark-warning border-2  border-dark-warning hover:bg-red-400 hover:border-red-400 text-white rounded-b-md font-bold cursor-pointer'
            type='button'
            value='Delete'
            onClick={deleteEntity}
          />
          <input
            className='flex-1 h-12 p-2 border-dark-warning border-2 rounded-b-md text-dark-warning hover:text-red-400 hover:border-red-400 font-bold cursor-pointer'
            type='button'
            value='Cancel'
            onClick={cancelDelete}
          />
        </div>
      </div>
    );
}
