import React from 'react';

import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import GiftForm from '@/renderer/components/gift/GiftForm';
import { useCreateGift } from '@/renderer/hooks/gift/useCreateGift';

export default function CreateGift() {
  const { handleSubmit, handleUpdate, state } = useCreateGift();
  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <GiftForm
        formTitle='Create gift'
        gift={state.entity}
        update={handleUpdate}
      />
      <EntityFormSubmit onClick={handleSubmit}>Submit</EntityFormSubmit>
    </div>
  );
}
