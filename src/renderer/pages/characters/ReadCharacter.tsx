import React from 'react';
import { useParams } from 'react-router';

import {
  IMentalAttributes,
  IPhysicalAttributes,
  ISocialAttributes,
} from '@/main/modules/character/application/interfaces/attributes.interface';
import ButtonLink, {
  ButtonLinkType,
} from '@/renderer/components/common/ButtonLink';
import CharacterAttributeColumn from '@/renderer/components/common/characters/CharacterAttributeColumn';
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
  const { id, name } = character;
  const { strength, dexterity, stamina } = character;
  const { charisma, manipulation, appearance } = character;
  const { perception, intelligence, wits } = character;

  const physicalAttributes: IPhysicalAttributes = {
    strength,
    dexterity,
    stamina,
  };

  const mentalAttributes: IMentalAttributes = {
    perception,
    intelligence,
    wits,
  };
  const socialAttributes: ISocialAttributes = {
    charisma,
    manipulation,
    appearance,
  };

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
        <CharacterInput partial={{ name }} update={updateCharacter} />

        <p className='pt-8'>Character attributes:</p>
        <div className='flex justify-between'>
          <CharacterAttributeColumn>
            {Object.keys(physicalAttributes).map(
              (key: keyof IPhysicalAttributes) => (
                <CharacterInput
                  key={key}
                  partial={{ [key]: physicalAttributes[key] }}
                  update={updateCharacter}
                />
              ),
            )}
          </CharacterAttributeColumn>
          <CharacterAttributeColumn>
            {Object.keys(socialAttributes).map(
              (key: keyof ISocialAttributes) => (
                <CharacterInput
                  key={key}
                  partial={{ [key]: socialAttributes[key] }}
                  update={updateCharacter}
                />
              ),
            )}
          </CharacterAttributeColumn>
          <CharacterAttributeColumn>
            {Object.keys(mentalAttributes).map(
              (key: keyof IMentalAttributes) => (
                <CharacterInput
                  key={key}
                  partial={{ [key]: mentalAttributes[key] }}
                  update={updateCharacter}
                />
              ),
            )}
          </CharacterAttributeColumn>
        </div>
      </div>

      <CharacterDelete
        showConfirmation={confirmDelete}
        deleteCharacter={deleteCharacter}
        cancelDeleteCharacter={cancelDeleteCharacter}
      />
    </div>
  );
}
