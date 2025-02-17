import React from 'react';

import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import FightForm from '@/renderer/components/fight/FightForm';
import { useCreateFight } from '@/renderer/hooks/fight/useCreateFight';

export default function CreateFight() {
  const { handleUpdate, handleSubmit, state } = useCreateFight();

  return (
    <div className='mt-8 flex flex-col gap-8 p-8'>
      <FightForm
        formTitle='Create Fight'
        fight={state.entity}
        update={handleUpdate}
      />
      <EntityFormSubmit onClick={handleSubmit}>Submit</EntityFormSubmit>
    </div>
  );
}
