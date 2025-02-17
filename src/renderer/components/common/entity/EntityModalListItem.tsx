import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};
export default function EntityModalListItem({ text, onClick }: Props) {
  return (
    <div className='flex items-center gap-4 font-[Solitreo] text-xl'>
      <p className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>
        {text}
      </p>
      <button className='px-2 text-xs' onClick={onClick}>
        ✖️
      </button>
    </div>
  );
}
