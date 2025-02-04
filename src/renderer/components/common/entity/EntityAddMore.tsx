import React from 'react';

type Props = {
  onClick: () => void;
};
export default function EntityAddMore({ onClick }: Props) {
  return (
    <input
      type='button'
      className='flex-1 bg-white hover:bg-dark-text transition-color duration-150 ease-in-out text-dark-primary rounded-b-lg rounded-t-sm cursor-pointer text-2xl'
      onClick={onClick}
      value='+'
    />
  );
}
