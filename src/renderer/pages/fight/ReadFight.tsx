import React from 'react';
import { useParams } from 'react-router';

import { Fight } from '@/main/modules/fight/domain/fight.entity';
import { FIGHT_ENTITY_NAME } from '@/main/modules/fight/infrastructure/database/fight.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import FightForm from '@/renderer/components/fight/FightForm';
import { useFight } from '@/renderer/hooks/fight/useFight';

export default function ReadFight() {
  const params = useParams<'fightId'>();
  const {
    entity,
    updateEntity,
    deleteEntity,
    cancelDeleteEntity,
    confirmDelete,
  } = useFight(parseInt(params.fightId));
  const { id, ...fight } = entity;
  console.log(id);
  const updateFight = <T extends keyof Fight>(
    propertyName: T,
    propertyValue: Fight[T],
  ) => {
    updateEntity({ [propertyName]: propertyValue });
  };
  return (
    <div className='flex flex-col gap-8'>
      <FightForm
        formTitle={`Fight #${id}`}
        fight={fight}
        update={updateFight}
      />
      <EntityDelete
        entityName={FIGHT_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
