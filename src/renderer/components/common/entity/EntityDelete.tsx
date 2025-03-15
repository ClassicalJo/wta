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
      <div className='flex min-h-36 items-end pt-4 font-[Rock]'>
        <button
          className='h-12 flex-1 cursor-pointer rounded-b-md border-2 border-dark-warning bg-dark-warning p-2 font-[Rock] font-bold text-white hover:border-dark-warning hover:bg-dark-warning'
          role='button'
          onClick={deleteEntity}
        >
          <p>Delete</p>
        </button>
      </div>
    );
  else
    return (
      <div className='flex min-h-36 flex-col pt-4 font-[Rock]'>
        <div className='my-4 flex flex-1 items-end'>
          <p className='text-md animate-fade-up-sm text-white [text-shadow:1px_1px_3px_rgba(255,255,255,0.8)] sm:text-lg'>
            {`Are you sure you want to delete this ${entityName}?`}
          </p>
        </div>
        <div className='flex gap-4'>
          <button
            className='h-12 flex-1 cursor-pointer rounded-b-md border-2 border-dark-warning bg-dark-warning p-2 align-middle font-bold text-white hover:border-red-400 hover:bg-red-400'
            role='button'
            onClick={deleteEntity}
          >
            <p>Delete</p>
          </button>
          <button
            className='h-12 flex-1 cursor-pointer rounded-b-md border-2 border-dark-warning p-2 font-bold text-dark-warning hover:border-red-400 hover:text-red-400'
            role='button'
            onClick={cancelDelete}
          >
            <p>Cancel</p>
          </button>
        </div>
      </div>
    );
}
