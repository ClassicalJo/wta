import React from 'react';

type Props = {
  onClick: () => void;
};
export default function EntityAddMore({ onClick }: Props) {
  return (
    <input
      type='button'
      className='transition-color flex-1 cursor-pointer rounded-b-lg rounded-t-sm bg-white text-2xl text-dark-primary duration-150 ease-in-out hover:bg-dark-text'
      onClick={onClick}
      value='+'
    />
  );
}
