import React from 'react';
import { useParams } from 'react-router';

import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { RITUAL_ENTITY_NAME } from '@/main/modules/ritual/infrastructure/database/ritual.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import RitualForm from '@/renderer/components/ritual/RitualForm';
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
  const updateRitual = <T extends keyof Ritual>(
    propertyName: T,
    propertyValue: Ritual[T],
  ) => {
    updateEntity({ [propertyName]: propertyValue });
  };
  return (
    <div className='flex w-full flex-1 flex-col gap-8 p-8'>
      <RitualForm
        formTitle={`Ritual #${params.ritualId}`}
        ritual={entity}
        update={updateRitual}
      />
      <EntityDelete
        entityName={RITUAL_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
