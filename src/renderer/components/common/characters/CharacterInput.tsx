import React from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';

import CharacterInputNumber from './CharacterInputNumber';
import CharacterInputText from './CharacterInputText';

type Props = {
  partial: Omit<Character, 'id'>;
  update: (partial: Omit<Character, 'id'>) => void;
};
export default function CharacterInput({ update, partial }: Props) {
  return Object.keys(partial).map((key: keyof Omit<Character, 'id'>) => {
    switch (typeof partial[key]) {
      case 'number':
        return (
          <CharacterInputNumber
            key={key}
            update={update}
            propertyName={key}
            propertyValue={partial[key]}
          />
        );
      case 'string':
      default:
        return (
          <CharacterInputText
            key={key}
            propertyName={key}
            propertyValue={partial[key]}
            update={update}
          />
        );
    }
  });
}
