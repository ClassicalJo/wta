import React from 'react';
import { useParams } from 'react-router';

import { RitualType } from '@/main/modules/ritual/domain/ritual-type.enum';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { RITUAL_ENTITY_NAME } from '@/main/modules/ritual/infrastructure/database/ritual.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import {
  default as EntityInputGroupText,
  default as EntityInputGroupTextGroup,
} from '@/renderer/components/common/entity/EntityInputGroupText';
import EntityInputGroupTextArea from '@/renderer/components/common/entity/EntityInputGroupTextArea';
import EntityInputSelect from '@/renderer/components/common/entity/EntityInputSelect';
import EntityLevel from '@/renderer/components/common/entity/EntityLevel';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import Main from '@/renderer/components/common/layout/Main';
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
    <Main>
      <div className='flex flex-col flex-1 w-full gap-8'>
        <EntityTitle>{`Ritual #${id}`}</EntityTitle>
        <EntityInputGroupText
          propertyName='name'
          propertyValue={ritual.name}
          update={updateRitual}
        />
        <EntityLevel
          propertyName='level'
          propertyValue={ritual.level}
          update={updateRitual}
          type='number'
          maxDots={10}
        />
        <EntityInputSelect
          propertyName='type'
          propertyValue={ritual.type}
          list={Object.values(RitualType)}
          update={updateRitual}
        />

        <EntityGrid columns={2}>
          <EntityInputGroupTextArea
            propertyName='description'
            propertyValue={ritual.description}
            update={updateRitual}
          />
          <EntityInputGroupTextArea
            propertyName='system'
            propertyValue={ritual.system}
            update={updateRitual}
          />
        </EntityGrid>
        <EntityInputGroupTextGroup
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
    </Main>
  );
}
