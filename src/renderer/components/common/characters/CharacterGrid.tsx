import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function CharacterGrid({ children }: Props) {
  return <div className='grid grid-cols-3 gap-4'>{children}</div>;
}
