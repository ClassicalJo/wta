import React from 'react';
import { useParams } from 'react-router';

import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { GIFT_ENTITY_NAME } from '@/main/modules/gift/infrastructure/database/gift.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import GiftForm from '@/renderer/components/gift/GiftForm';
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
  const updateGift = <T extends keyof Gift>(
    propertyName: T,
    propertyValue: Gift[T],
  ) => {
    updateEntity({ [propertyName]: propertyValue });
  };
  return (
    <div className='mt-8 flex w-full flex-1 flex-col gap-8 p-8'>
      <GiftForm
        formTitle={`Gift #${params.giftId}`}
        gift={entity}
        update={updateGift}
      />
      <EntityDelete
        entityName={GIFT_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
