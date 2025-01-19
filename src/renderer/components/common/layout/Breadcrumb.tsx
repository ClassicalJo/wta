import React from 'react';
import { Link } from 'react-router';

import { capitalize } from '@/shared/utils/capitalize';

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
        <Link to={to} className={commonStyles + 'underline'}>
          {capitalized}
        </Link>
        {!isLast && <p>&gt;</p>}
      </>
    );
}
