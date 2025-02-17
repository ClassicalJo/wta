import React from 'react';
import { useParams } from 'react-router';

import { Fight } from '@/main/modules/fight/domain/fight.entity';
import { FIGHT_ENTITY_NAME } from '@/main/modules/fight/infrastructure/database/fight.schema';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import FightForm from '@/renderer/components/fight/FightForm';
import { useFight } from '@/renderer/hooks/fight/useFight';
import { useSimulator } from '@/renderer/hooks/fight/useSimulator';

export default function ReadFight() {
  const params = useParams<'fightId'>();
  const {
    entity,
    updateEntity,
    deleteEntity,
    cancelDeleteEntity,
    confirmDelete,
  } = useFight(parseInt(params.fightId));
  const updateFight = <T extends keyof Fight>(
    propertyName: T,
    propertyValue: Fight[T],
  ) => {
    updateEntity({ [propertyName]: propertyValue });
  };

  const { beginFight } = useSimulator();
  return (
    <div className='flex flex-1 flex-col gap-8 p-8'>
      <FightForm
        formTitle={`Fight #${params.fightId}`}
        fight={entity}
        update={updateFight}
      />

      <EntityFormSubmit onClick={() => beginFight(entity.id)}>
        Begin simulation
      </EntityFormSubmit>

      <EntityDelete
        entityName={FIGHT_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
