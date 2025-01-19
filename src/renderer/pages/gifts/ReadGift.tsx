import React from 'react';
import { useParams } from 'react-router';

import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { GIFT_ENTITY_NAME } from '@/main/modules/gift/infrastructure/database/gift.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import GiftInput from '@/renderer/components/gift/GiftInput';
import { useGift } from '@/renderer/hooks/gift/useGift';

export default function ReadGift() {
  const params = useParams<'giftId'>();
  const {
    entity,
    updateEntity,
    deleteEntity,
    cancelDeleteEntity,
    confirmDelete,
  } = useGift(parseInt(params.giftId));
  const { id, ...gift } = entity;
  return (
    <div>
      <div className='flex flex-col'>
        <EntityTitle>{`Gift #${id}`}</EntityTitle>
        {Object.keys(gift).map((key: keyof Omit<Gift, 'id'>) => (
          <GiftInput
            key={key}
            partial={{ [key]: entity[key] }}
            update={updateEntity}
          />
        ))}
      </div>
      <EntityDelete
        entityName={GIFT_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
