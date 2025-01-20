import React from 'react';

import { Gift } from '@/main/modules/gift/domain/gift.entity';

import EntityInputNumber from '../common/entity/EntityInputNumber';
import EntityInputText from '../common/entity/EntityInputText';

type Props = {
  partial: Omit<Gift, 'id'>;
  update: (partial: Omit<Gift, 'id'>) => void;
};
export default function GiftInput({ update, partial }: Props) {
  return Object.keys(partial).map((key: keyof Omit<Gift, 'id'>) => {
    switch (key) {
      case 'giftSource':
        return (
          <div>
            <p>GiftSource</p>
          </div>
        );
      case 'level':
        return (
          <EntityInputNumber
            key={key}
            propertyName={key}
            propertyValue={partial[key]}
            update={update}
          />
        );
      default:
        return (
          <EntityInputText
            key={key}
            propertyName={key}
            propertyValue={partial[key]}
            update={update}
          />
        );
    }
  });
}
