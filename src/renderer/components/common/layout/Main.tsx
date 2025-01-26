import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function Main({ children }: Props) {
  return (
    <main className='flex flex-col flex-1 text-white overflow-y-scroll p-8 max-h-screen items-center'>
      <div className='flex flex-col flex-1 w-full max-w-screen-lg'>
        {children}
      </div>
    </main>
  );
}
