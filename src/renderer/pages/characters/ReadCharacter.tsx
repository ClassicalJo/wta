import React from 'react';
import { useParams } from 'react-router';

import {
  IKnowledges,
  ISkills,
  ITalents,
} from '@/main/modules/character/domain/interfaces/abilities.interface';
import {
  IRenown,
  ISelf,
} from '@/main/modules/character/domain/interfaces/advantages.interface';
import {
  IMentalAttributes,
  IPhysicalAttributes,
  ISocialAttributes,
} from '@/main/modules/character/domain/interfaces/attributes.interface';
import { IDetails } from '@/main/modules/character/domain/interfaces/details.interface';
import ButtonLink, {
  ButtonLinkType,
} from '@/renderer/components/common/ButtonLink';
import CharacterAttributeColumn from '@/renderer/components/common/characters/CharacterAttributeColumn';
import CharacterDelete from '@/renderer/components/common/characters/CharacterDelete';
import CharacterGrid from '@/renderer/components/common/characters/CharacterGrid';
import CharacterInput from '@/renderer/components/common/characters/CharacterInput';
import CharacterTitle from '@/renderer/components/common/characters/CharacterTitle';
import useReadCharacter from '@/renderer/hooks/character/useCharacter';
import { useCharacterStats } from '@/renderer/hooks/character/useCharacterStats';

export default function ReadCharacter() {
  const params = useParams<'characterId'>();
  const {
    character,
    updateCharacter,
    deleteCharacter,
    cancelDeleteCharacter,
    confirmDelete,
  } = useReadCharacter(parseInt(params.characterId));
  const {
    userDetails,
    wolfDetails,
    restDetails,
    physicalAttributes,
    socialAttributes,
    mentalAttributes,
    talents,
    skills,
    knowledges,
    renown,
    self,
  } = useCharacterStats(character);
  return (
    <div>
      <ButtonLink to='/characters' type={ButtonLinkType.TEXT} color='darkred'>
        Back
      </ButtonLink>
      <div className='flex flex-col'>
        <CharacterTitle>Werewolf</CharacterTitle>
        <CharacterGrid>
          <CharacterAttributeColumn>
            {Object.keys(userDetails).map((key: keyof IDetails) => (
              <CharacterInput
                key={key}
                partial={{ [key]: userDetails[key] }}
                update={updateCharacter}
              />
            ))}
          </CharacterAttributeColumn>
          <CharacterAttributeColumn>
            {Object.keys(wolfDetails).map((key: keyof IDetails) => (
              <CharacterInput
                key={key}
                partial={{ [key]: wolfDetails[key] }}
                update={updateCharacter}
              />
            ))}
          </CharacterAttributeColumn>
          <CharacterAttributeColumn>
            {Object.keys(restDetails).map((key: keyof IDetails) => (
              <CharacterInput
                key={key}
                partial={{ [key]: restDetails[key] }}
                update={updateCharacter}
              />
            ))}
          </CharacterAttributeColumn>
        </CharacterGrid>
        <CharacterTitle>Attributes</CharacterTitle>
        <div className='grid grid-cols-3 gap-4'>
          <CharacterAttributeColumn>
            <p>Physical</p>
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
            <p>Social</p>
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
            <p>Mental</p>
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
      <CharacterTitle>Character abilities:</CharacterTitle>
      <CharacterGrid>
        <CharacterAttributeColumn>
          <p>Talents</p>
          {Object.keys(talents).map((key: keyof ITalents) => (
            <CharacterInput
              key={key}
              partial={{ [key]: talents[key] }}
              update={updateCharacter}
            />
          ))}
        </CharacterAttributeColumn>
        <CharacterAttributeColumn>
          <p>Skills</p>
          {Object.keys(skills).map((key: keyof ISkills) => (
            <CharacterInput
              key={key}
              partial={{ [key]: skills[key] }}
              update={updateCharacter}
            />
          ))}
        </CharacterAttributeColumn>
        <CharacterAttributeColumn>
          <p>Knowledges</p>
          {Object.keys(knowledges).map((key: keyof IKnowledges) => (
            <CharacterInput
              key={key}
              partial={{ [key]: knowledges[key] }}
              update={updateCharacter}
            />
          ))}
        </CharacterAttributeColumn>
      </CharacterGrid>
      <CharacterTitle>Advantages</CharacterTitle>
      <CharacterGrid>
        <CharacterAttributeColumn>
          {Object.keys(renown).map((key: keyof IRenown) => (
            <CharacterInput
              key={key}
              partial={{ [key]: renown[key] }}
              update={updateCharacter}
            />
          ))}
        </CharacterAttributeColumn>
        <CharacterAttributeColumn>
          {Object.keys(self).map((key: keyof ISelf) => (
            <CharacterInput
              key={key}
              partial={{ [key]: self[key] }}
              update={updateCharacter}
            />
          ))}
        </CharacterAttributeColumn>
      </CharacterGrid>
      <CharacterDelete
        showConfirmation={confirmDelete}
        deleteCharacter={deleteCharacter}
        cancelDeleteCharacter={cancelDeleteCharacter}
      />
    </div>
  );
}
