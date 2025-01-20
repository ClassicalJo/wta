import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};
export default function EntityModalListItem({ text, onClick }: Props) {
  return (
    <div className='flex gap-4 bg-slate-100 rounded-sm p-2 items-center'>
      <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-xs'>
        {text}
      </p>
      <button className='px-2 text-xs' onClick={onClick}>
        ✖️
      </button>
    </div>
  );
}
