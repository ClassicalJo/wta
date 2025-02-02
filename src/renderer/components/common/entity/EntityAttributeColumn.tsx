import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function EntityAttributeColumn({
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className='flex flex-col gap-2'>
      {children}
    </div>
  );
}
