import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function EntityTitle({ children, className }: Props) {
  const styles = className ? className : '';
  return (
    <h1 className={styles + ' mb-2 mt-4 font-[Staatliches] text-5xl font-bold'}>
      {children}
    </h1>
  );
}
