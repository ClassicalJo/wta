import React from 'react';

import { GiftSource } from '@/main/modules/gift/domain/gift-source.enum';
import { Gift } from '@/main/modules/gift/domain/gift.entity';

import EntityGrid from '../common/entity/EntityGrid';
import EntityInputGroupText from '../common/entity/EntityInputGroupText';
import EntityInputGroupTextArea from '../common/entity/EntityInputGroupTextArea';
import EntityLevel from '../common/entity/EntityLevel';
import EntityModalList from '../common/entity/EntityModalList';
import EntityTitle from '../common/entity/EntityTitle';

type Props = {
  formTitle: string;
  gift: Omit<Gift, 'id'>;
  update: <T extends Gift[keyof Gift]>(propertyName: string, value: T) => void;
};
export default function GiftForm({ formTitle, update, gift }: Props) {
  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <EntityTitle>{formTitle}</EntityTitle>
      <EntityInputGroupText
        propertyName='name'
        propertyValue={gift.name}
        update={(e: string) => update('name', e)}
      />
      <EntityLevel
        propertyName='level'
        propertyValue={gift.level}
        type='number'
        update={(e: number) => update('level', e)}
      />
      <EntityGrid columns={2}>
        <EntityInputGroupTextArea
          propertyName='description'
          propertyValue={gift.description}
          update={(e: string) => update('description', e)}
        />
        <EntityInputGroupTextArea
          propertyName='system'
          propertyValue={gift.system}
          update={(e: string) => update('system', e)}
        />
      </EntityGrid>
      <EntityInputGroupText
        propertyName='dataSource'
        propertyValue={gift.dataSource}
        update={(e: string) => update('dataSource', e)}
      />
      <p>Gift Source</p>
      <EntityGrid columns={2}>
        <EntityModalList<GiftSource>
          propertyName='giftSource'
          selectedValues={gift.giftSource ?? []}
          allValues={Object.values(GiftSource)}
          update={(value: GiftSource[]) => update('giftSource', value)}
        />
      </EntityGrid>
    </div>
  );
}
