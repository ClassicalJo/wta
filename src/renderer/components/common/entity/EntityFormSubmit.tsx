import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
export default function EntityFormSubmit({ children, onClick }: Props) {
  return (
    <div className='flex mt-4'>
      <button
        className='flex-1 rounded-full bg-purple-500 text-white text-lg px-5 py-1'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
