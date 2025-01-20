import React from 'react';

type Props = {
  onClick: () => void;
};
export default function EntityAddMore({ onClick }: Props) {
  return (
    <input
      type='button'
      className='flex-1 bg-purple-700 text-white rounded-b-lg rounded-t-sm cursor-pointer hover:bg-purple-600'
      onClick={onClick}
      value='+'
    />
  );
}
