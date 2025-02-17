import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function Main({ children }: Props) {
  return (
    <main className='relative flex flex-1 flex-col text-white'>
      <div className='z-10 mx-auto w-full max-w-screen-lg'>{children}</div>
    </main>
  );
}
