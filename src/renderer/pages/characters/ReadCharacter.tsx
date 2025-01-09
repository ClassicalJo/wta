import React from 'react';
import { useParams } from 'react-router';

import { Character } from '@/main/modules/character/domain/character.entity';
import ButtonLink, {
  ButtonLinkType,
} from '@/renderer/components/common/ButtonLink';
import CharacterDelete from '@/renderer/components/common/characters/CharacterDelete';
import CharacterInput from '@/renderer/components/common/characters/CharacterInput';
import useReadCharacter from '@/renderer/hooks/character/useCharacter';

export default function ReadCharacter() {
  const params = useParams<'characterId'>();
  const {
    character,
    updateCharacter,
    deleteCharacter,
    cancelDeleteCharacter,
    confirmDelete,
  } = useReadCharacter(parseInt(params.characterId));
  const { id, ...rest } = character;
  return (
    <div>
      <ButtonLink to='/characters' type={ButtonLinkType.TEXT} color='darkred'>
        Back
      </ButtonLink>
      <h1 className='text-2xl mb-4'>Read character</h1>
      <div className='flex flex-col gap-2'>
        <div>
          <p className='text-xs'>Id</p>
          <p className='flex-1 bg-slate-100 rounded-sm px-5 py-1 focus:bg-slate-50'>
            {id}
          </p>
        </div>
        {Object.keys(rest).map((key: keyof Omit<Character, 'id'>) => (
          <CharacterInput
            key={key}
            propertyName={key}
            propertyValue={rest[key]}
            update={updateCharacter}
          />
        ))}
      </div>

      <CharacterDelete
        showConfirmation={confirmDelete}
        deleteCharacter={deleteCharacter}
        cancelDeleteCharacter={cancelDeleteCharacter}
      />
    </div>
  );
}
