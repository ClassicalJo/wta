import React from 'react';
import { useParams } from 'react-router';

import { GiftSource } from '@/main/modules/gift/domain/gift-source.enum';
import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { GIFT_ENTITY_NAME } from '@/main/modules/gift/infrastructure/database/gift.schema';
import EntityAttributeColumn from '@/renderer/components/common/entity/EntityAttributeColumn';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import EntityInputGroupText from '@/renderer/components/common/entity/EntityInputGroupText';
import EntityInputTextArea from '@/renderer/components/common/entity/EntityInputTextArea';
import EntityLevel from '@/renderer/components/common/entity/EntityLevel';
import EntityModalList from '@/renderer/components/common/entity/EntityModalList';
import EntityTag from '@/renderer/components/common/entity/EntityTag';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import Main from '@/renderer/components/common/layout/Main';
import { useGift } from '@/renderer/hooks/gift/useGift';
import { capitalizeCamelCase } from '@/shared/utils/capitalize';

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
    <Main>
      <div className='flex flex-col flex-1 w-full gap-8'>
        <EntityTitle>{`Gift #${id}`}</EntityTitle>
        <EntityInputGroupText
          propertyName='name'
          propertyValue={gift.name}
          update={updateGift}
        />
        <EntityLevel
          propertyName='level'
          propertyValue={gift.level}
          update={updateGift}
        />
        <EntityGrid columns={2}>
          <EntityAttributeColumn>
            <EntityTag>{capitalizeCamelCase('description')}</EntityTag>

            <EntityInputTextArea
              propertyName='description'
              propertyValue={gift.description}
              update={updateGift}
            />
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntityTag>{capitalizeCamelCase('system')}</EntityTag>

            <EntityInputTextArea
              propertyName='system'
              propertyValue={gift.system}
              update={updateGift}
            />
          </EntityAttributeColumn>
        </EntityGrid>
        <EntityInputGroupText
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
    </Main>
  );
}
