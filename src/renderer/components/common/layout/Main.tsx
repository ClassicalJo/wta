import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function Main({ children }: Props) {
  return (
    <main className='flex flex-col flex-1 text-white '>
      <div className='max-w-screen-lg w-full mx-auto z-10'>{children}</div>
    </main>
  );
}
