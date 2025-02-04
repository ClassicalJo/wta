import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function Main({ children }: Props) {
  return (
    <main className='flex flex-col flex-1 text-white items-center justify-center '>
      <div className='flex flex-col flex-1 max-w-screen-lg items-center justify-center'>
        {children}
      </div>
    </main>
  );
}
