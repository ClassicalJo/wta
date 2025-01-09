import React from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';

import CharacterLink from './CharacterLink';

type Props = {
  characters: Character[];
};
export default function CharacterDashboard({ characters }: Props) {
  return (
    <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-8'>
      <CharacterLink link='/characters/create' text='New character' />
      {characters.map((character) => (
        <CharacterLink
          key={character.id}
          link={`/characters/${character.id}`}
          text={character.name}
        />
      ))}
    </div>
  );
}
