import React, { useEffect, useState } from 'react';

type Props = {
  isLoading: boolean;
  progress: number;
  maxProgress: number;
};

export default function FightDialog({
  isLoading,
  progress,
  maxProgress,
}: Props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isLoading);
  }, [isLoading]);
  return (
    <dialog
      open={open}
      className='backdrop-blur-sm fixed left-0 top-0 z-10 h-full w-full bg-transparent'
    >
      <div className='flex h-full w-full items-center justify-center bg-black/25'>
        <div className='relative mx-auto flex w-96 flex-col rounded-md bg-dark-primary p-4'>
          <div className='flex justify-between'>
            <p className='text-2xl font-bold text-white'>
              Simulation in progress
            </p>
            <button
              className='text-xl text-white'
              onClick={() => setOpen(false)}
            >
              ✖️
            </button>
          </div>
          <progress
            className='mt-4 w-full transition duration-500 ease-in-out'
            value={progress}
            max={maxProgress}
          />
          <div>
            <p className='mt-4 text-center text-lg font-bold text-white'>
              {progress}/{maxProgress}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
