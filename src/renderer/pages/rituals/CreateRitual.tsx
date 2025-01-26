import React from 'react';

import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import RitualForm from '@/renderer/components/ritual/RitualForm';
import { useCreateRitual } from '@/renderer/hooks/ritual/useCreateRitual';

export default function CreateRitual() {
  const { handleSubmit, handleUpdate, state } = useCreateRitual();
  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <RitualForm
        formTitle='Create ritual'
        ritual={state.entity}
        update={handleUpdate}
      />
      <EntityFormSubmit onClick={handleSubmit}>Submit</EntityFormSubmit>
    </div>
  );
}
