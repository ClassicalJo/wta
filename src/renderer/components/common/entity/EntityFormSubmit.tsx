import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
export default function EntityFormSubmit({ children, onClick }: Props) {
  return (
    <div className='mt-4 flex'>
      <button
        className='h-12 flex-1 rounded-md bg-white px-5 py-1 font-[Rock] text-lg font-bold text-dark-primary transition-colors duration-150 ease-in-out hover:bg-dark-text'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
