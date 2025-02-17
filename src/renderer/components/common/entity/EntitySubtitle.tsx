import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function EntitySubtitle({ children }: Props) {
  return <h2 className='font-[Staatliches] text-3xl'>{children}</h2>;
}
