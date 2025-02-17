import React, { useCallback } from 'react';
import { useParams } from 'react-router';

import { Character } from '@/main/modules/character/domain/character.entity';
import { CHARACTER_ENTITY_NAME } from '@/main/modules/character/infrastructure/database/character.schema';
import CharacterForm from '@/renderer/components/character/CharacterForm';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import { useCharacter } from '@/renderer/hooks/character/useCharacter';

export default function ReadCharacter() {
  const params = useParams<'characterId'>();
  const {
    entity,
    updateEntity,
    deleteEntity,
    cancelDeleteEntity,
    confirmDelete,
  } = useCharacter(parseInt(params.characterId));

  const handleUpdate = useCallback(
    <T extends keyof Character>(
      propertyName: string,
      propertyValue: Character[T],
    ) => {
      updateEntity({
        [propertyName]: propertyValue,
      });
    },
    [updateEntity],
  );
  return (
    <div className='flex min-w-min flex-1 flex-col gap-8 p-8'>
      <CharacterForm
        formTitle={`Character #${params.characterId}`}
        character={entity}
        update={handleUpdate}
      />
      <EntityDelete
        entityName={CHARACTER_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
