import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function EntityTitle({ children }: Props) {
  return (
    <h1 className='text-5xl font-bold mt-4 mb-2 font-[Staatliches]'>
      {children}
    </h1>
  );
}
