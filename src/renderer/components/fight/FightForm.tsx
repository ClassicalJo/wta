import React from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import { Fight } from '@/main/modules/fight/domain/fight.entity';
import { useReadAllCharacters } from '@/renderer/hooks/character/useReadAllCharacters';

import EntityAttributeColumn from '../common/entity/EntityAttributeColumn';
import EntityGrid from '../common/entity/EntityGrid';
import EntityInputGroupText from '../common/entity/EntityInputGroupText';
import EntityInputGroupTextArea from '../common/entity/EntityInputGroupTextArea';
import EntityLevel from '../common/entity/EntityLevel';
import EntityModalList from '../common/entity/EntityModalList';
import EntityTitle from '../common/entity/EntityTitle';

type Props = {
  formTitle: string;
  fight: Omit<Fight, 'id'>;
  update: <T extends Fight[keyof Fight]>(
    propertyName: string,
    value: T,
  ) => void;
};
export default function FightForm({ formTitle, update, fight }: Props) {
  const { entities: characters } = useReadAllCharacters();
  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <EntityTitle>{formTitle}</EntityTitle>

      <EntityInputGroupText
        propertyName='name'
        propertyValue={fight.name}
        update={(value: string) => update('name', value)}
      />
      <EntityInputGroupTextArea
        propertyName='description'
        propertyValue={fight.description}
        update={(value: string) => update('description', value)}
      />
      <EntityLevel
        propertyName='times'
        propertyValue={fight.times}
        update={(value: number) => update('times', value)}
        type='number'
        maxDots={10}
      />
      <div className='flex flex-col gap-2'>
        <EntityTitle>Groups</EntityTitle>
        <EntityGrid columns={2}>
          <EntityAttributeColumn>
            <p>Group A</p>
            <EntityModalList
              allValues={characters}
              selectedValues={fight.groupA ?? []}
              propertyName='groupA'
              update={(e: Character[]) => update('groupA', e)}
            />
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Group B</p>
            <EntityModalList
              allValues={characters}
              selectedValues={fight.groupB ?? []}
              propertyName='groupB'
              update={(e: Character[]) => update('groupB', e)}
            />
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
    </div>
  );
}
