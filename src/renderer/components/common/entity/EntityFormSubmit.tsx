import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
export default function EntityFormSubmit({ children, onClick }: Props) {
  return (
    <div className='flex mt-4'>
      <button
        className='flex-1 rounded-md hover:bg-dark-text  font-bold transition-colors duration-150 ease-in-out bg-white text-dark-primary font-[Rock] h-12 text-lg px-5 py-1'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
