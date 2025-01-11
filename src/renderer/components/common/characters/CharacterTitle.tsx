import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function CharacterTitle({ children }: Props) {
  return <h1 className='text-3xl font-bold mt-8 mb-2'>{children}</h1>;
}
