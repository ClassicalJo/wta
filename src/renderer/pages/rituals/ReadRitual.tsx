import React from 'react';
import { useParams } from 'react-router';

import { RitualType } from '@/main/modules/ritual/domain/ritual-type.enum';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { RITUAL_ENTITY_NAME } from '@/main/modules/ritual/infrastructure/database/ritual.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import EntityInputNumber from '@/renderer/components/common/entity/EntityInputNumber';
import EntityInputSelect from '@/renderer/components/common/entity/EntityInputSelect';
import EntityInputText from '@/renderer/components/common/entity/EntityInputText';
import EntityInputTextArea from '@/renderer/components/common/entity/EntityInputTextArea';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import { useRitual } from '@/renderer/hooks/ritual/useRitual';

export default function ReadRitual() {
  const params = useParams<'ritualId'>();
  const {
    entity,
    updateEntity,
    deleteEntity,
    cancelDeleteEntity,
    confirmDelete,
  } = useRitual(parseInt(params.ritualId));
  const { id, ...ritual } = entity;
  const updateRitual = <T extends keyof Ritual>(
    propertyName: T,
    propertyValue: Ritual[T],
  ) => {
    updateEntity({ [propertyName]: propertyValue });
  };
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <EntityTitle>{`Ritual #${id}`}</EntityTitle>
        <EntityInputText
          propertyName='name'
          propertyValue={ritual.name}
          update={updateRitual}
        />
        <EntityInputNumber
          propertyName='level'
          type='number'
          fontSize='text-md'
          maxDots={10}
          propertyValue={ritual.level}
          update={updateRitual}
        />
        <EntityInputSelect
          propertyName='type'
          propertyValue={ritual.type}
          list={Object.values(RitualType)}
          update={updateRitual}
        />

        <EntityGrid columns={2}>
          <EntityInputTextArea
            propertyName='description'
            propertyValue={ritual.description}
            update={updateRitual}
          />
          <EntityInputTextArea
            propertyName='system'
            propertyValue={ritual.system}
            update={updateRitual}
          />
        </EntityGrid>
        <EntityInputText
          propertyName='dataSource'
          propertyValue={ritual.dataSource}
          update={updateRitual}
        />
      </div>
      <EntityDelete
        entityName={RITUAL_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
