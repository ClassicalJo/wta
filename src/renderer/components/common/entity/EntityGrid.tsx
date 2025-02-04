import React from 'react';

type Props = {
  children: React.ReactNode;
  columns?: number;
};

export default function EntityGrid({ children, columns = 3 }: Props) {
  switch (columns) {
    case 2:
      return <div className={`grid gap-8 grid-cols-2`}>{children}</div>;
    default:
      return <div className={`grid gap-6 grid-cols-3`}>{children}</div>;
  }
}
