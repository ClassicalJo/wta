import React from 'react';

import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import RitualForm from '@/renderer/components/ritual/RitualForm';
import { useCreateRitual } from '@/renderer/hooks/ritual/useCreateRitual';

export default function CreateRitual() {
  const { handleSubmit, handleUpdate, state } = useCreateRitual();
  return (
    <div className='mt-8 flex w-full flex-1 flex-col gap-8 p-8'>
      <RitualForm
        formTitle='Create ritual'
        ritual={state.entity}
        update={handleUpdate}
      />
      <EntityFormSubmit onClick={handleSubmit}>Submit</EntityFormSubmit>
    </div>
  );
}
