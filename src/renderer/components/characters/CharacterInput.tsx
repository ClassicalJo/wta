import React from 'react';

import { Auspice } from '@/main/modules/character/domain/auspice.enum';
import { Breed } from '@/main/modules/character/domain/breed.enum';
import { Character } from '@/main/modules/character/domain/character.entity';

import EntityInputNumber from '../common/entity/EntityInputNumber';
import EntityInputText from '../common/entity/EntityInputText';
import CharacterInputSelect from './CharacterInputSelect';

type Props = {
  partial: Omit<Character, 'id'>;
  update: (partial: Omit<Character, 'id'>) => void;
};
export default function CharacterInput({ update, partial }: Props) {
  return Object.keys(partial).map((key: keyof Omit<Character, 'id'>) => {
    switch (key) {
      case 'name':
      case 'playerName':
      case 'chronicle':
      case 'tribe':
      case 'packName':
      case 'packTotem':
      case 'concept':
        return (
          <EntityInputText
            key={key}
            propertyName={key}
            propertyValue={partial[key]}
            update={update}
          />
        );
      case 'auspice':
        return (
          <CharacterInputSelect
            key={key}
            propertyName={key}
            propertyValue={partial[key]}
            update={update}
            list={Object.values(Auspice)}
          />
        );
      case 'breed':
        return (
          <CharacterInputSelect
            key={key}
            propertyName={key}
            propertyValue={partial[key]}
            update={update}
            list={Object.values(Breed)}
          />
        );
      case 'gifts':
        return <div>Gifts</div>;
      default:
        return (
          <EntityInputNumber
            key={key}
            update={update}
            propertyName={key}
            propertyValue={partial[key]}
          />
        );
    }
  });
}
