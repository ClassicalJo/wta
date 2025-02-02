import React from 'react';

import { RitualType } from '@/main/modules/ritual/domain/ritual-type.enum';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { useStats } from '@/renderer/hooks/common/useStats';

import EntityGrid from '../common/entity/EntityGrid';
import EntityInputGroupNumber from '../common/entity/EntityInputGroupNumber';
import EntityInputGroupText from '../common/entity/EntityInputGroupText';
import EntityInputGroupTextArea from '../common/entity/EntityInputGroupTextArea';
import EntityInputSelect from '../common/entity/EntityInputSelect';
import EntityTitle from '../common/entity/EntityTitle';

type Props = {
  formTitle: string;
  ritual: Omit<Ritual, 'id'>;
  update: <T extends Ritual[keyof Ritual]>(
    propertyName: string,
    value: T,
  ) => void;
};
export default function RitualForm({ formTitle, update, ritual }: Props) {
  const { updateByPropertyName } = useStats(update);
  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <EntityTitle>{formTitle}</EntityTitle>
      <EntityInputGroupText
        propertyName='name'
        propertyValue={ritual.name}
        update={(value: string) => update('name', value)}
      />
      <EntityInputGroupNumber<Ritual>
        onClick={updateByPropertyName}
        propertyName='level'
        propertyValue={ritual.level}
        maxDots={10}
      />
      <EntityInputSelect
        propertyName='type'
        propertyValue={ritual.type}
        list={Object.values(RitualType)}
        update={update}
      />

      <EntityGrid columns={2}>
        <EntityInputGroupTextArea
          propertyName='description'
          propertyValue={ritual.description}
          update={(value: string) => update('description', value)}
        />
        <EntityInputGroupTextArea
          propertyName='system'
          propertyValue={ritual.system}
          update={(value: string) => update('system', value)}
        />
      </EntityGrid>
      <EntityInputGroupText
        propertyName='dataSource'
        propertyValue={ritual.dataSource}
        update={(value: string) => update('name', value)}
      />
    </div>
  );
}
