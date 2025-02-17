import React from 'react';

import CharacterForm from '@/renderer/components/character/CharacterForm';
import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import { useCreateCharacter } from '@/renderer/hooks/character/useCreateCharacter';

export default function CreateCharacter() {
  const { handleUpdate, handleSubmit, state } = useCreateCharacter();
  return (
    <div className='flex w-full flex-1 flex-col gap-8 p-8'>
      <CharacterForm
        formTitle='Create character'
        character={state.entity}
        update={handleUpdate}
      />
      <EntityFormSubmit onClick={handleSubmit}>Submit</EntityFormSubmit>
    </div>
  );
}
