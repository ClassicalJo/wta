import React from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
export default function EntityFormSubmit({
  children,
  onClick,
  disabled,
}: Props) {
  return (
    <div className='mt-4 flex'>
      <button
        className='h-12 flex-1 rounded-md bg-white px-5 py-1 font-[Rock] text-lg font-bold text-dark-primary transition-colors duration-150 ease-in-out hover:bg-dark-text disabled:bg-slate-400 disabled:text-white'
        role='button'
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
