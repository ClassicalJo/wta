import React from 'react';

import { Fight } from '@/main/modules/fight/domain/fight.entity';
import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import FightForm from '@/renderer/components/fight/FightForm';
import { useEntityReducer } from '@/renderer/hooks/common/useEntityReducer';
import { useCreateFight } from '@/renderer/hooks/fight/useCreateFight';

export default function CreateFight() {
  const { onSubmit } = useCreateFight();
  const [state, dispatch] = useEntityReducer<Fight>(
    new Fight({
      name: '',
      description: '',
      times: 0,
      groupA: [],
      groupB: [],
    }),
  );

  return (
    <div className='flex flex-col gap-8'>
      <FightForm
        formTitle='Create Fight'
        fight={state.entity}
        update={(propertyName, propertyValue) =>
          dispatch({
            property: propertyName,
            value: propertyValue,
          })
        }
      />
      <EntityFormSubmit onClick={() => onSubmit(new Fight(state.entity))}>
        Submit
      </EntityFormSubmit>
    </div>
  );
}
