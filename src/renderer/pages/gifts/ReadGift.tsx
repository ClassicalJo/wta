import React from 'react';
import { useParams } from 'react-router';

import { GiftSource } from '@/main/modules/gift/domain/gift-source.enum';
import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { GIFT_ENTITY_NAME } from '@/main/modules/gift/infrastructure/database/gift.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import EntityInputNumber from '@/renderer/components/common/entity/EntityInputNumber';
import EntityInputText from '@/renderer/components/common/entity/EntityInputText';
import EntityInputTextArea from '@/renderer/components/common/entity/EntityInputTextArea';
import EntityModalList from '@/renderer/components/common/entity/EntityModalList';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
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
  const updateGift = <T extends keyof Gift>(
    propertyName: T,
    propertyValue: Gift[T],
  ) => {
    updateEntity({ [propertyName]: propertyValue });
  };
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <EntityTitle>{`Gift #${id}`}</EntityTitle>
        <EntityInputText
          propertyName='name'
          propertyValue={gift.name}
          update={updateGift}
        />
        <EntityInputNumber
          propertyName='level'
          type='number'
          fontSize='text-md'
          maxDots={10}
          propertyValue={gift.level}
          update={updateGift}
        />
        <EntityGrid columns={2}>
          <EntityInputTextArea
            propertyName='description'
            propertyValue={gift.description}
            update={updateGift}
          />
          <EntityInputTextArea
            propertyName='system'
            propertyValue={gift.system}
            update={updateGift}
          />
        </EntityGrid>
        <EntityInputText
          propertyName='dataSource'
          propertyValue={gift.dataSource}
          update={updateGift}
        />
        <p>Gift Source</p>
        <EntityGrid columns={2}>
          <EntityModalList<GiftSource>
            propertyName='giftSource'
            selectedValues={gift.giftSource ?? []}
            allValues={Object.values(GiftSource)}
            update={updateGift}
          />
        </EntityGrid>
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
