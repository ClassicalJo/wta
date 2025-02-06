import React from 'react';

import { capitalize } from '@/shared/utils/capitalize';

import DelayedLink from '../ui/DelayedLink';

type Props = {
  isLast: boolean;
  value: string;
  to: string;
};

export default function Breadcrumb({ isLast, value, to }: Props) {
  const capitalized = capitalize(value);
  const commonStyles = 'font-bold text-red-800 italic ';
  if (isLast)
    return <p className={commonStyles + 'text-orange-400'}>{capitalized}</p>;
  else
    return (
      <>
        <DelayedLink to={to} className={commonStyles + 'underline'}>
          {capitalized}
        </DelayedLink>
        {!isLast && <p>&gt;</p>}
      </>
    );
}
