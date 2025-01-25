import React from 'react';

import EntityDots from './EntityDots';

type Props = {
  maxDots?: number;
  value: number;
  type: 'dots' | 'number';
};
export default function EntityInputNumberSwitch({
  maxDots,
  value,
  type,
}: Props) {
  switch (type) {
    case 'dots':
      return <EntityDots maxDots={maxDots} currentValue={value} />;

    default:
      return <p>{value}</p>;
  }
}
