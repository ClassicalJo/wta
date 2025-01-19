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
import { CHARACTER_ENTITY_NAME } from '@/main/modules/character/infrastructure/database/character.schema';
import CharacterInput from '@/renderer/components/characters/CharacterInput';
import EntityAttributeColumn from '@/renderer/components/common/entity/EntityAttributeColumn';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import { useCharacter } from '@/renderer/hooks/character/useCharacter';
import { useCharacterSections } from '@/renderer/hooks/character/useCharacterStats';

export default function ReadCharacter() {
  const params = useParams<'characterId'>();
  const {
    entity,
    updateEntity,
    deleteEntity,
    cancelDeleteEntity,
    confirmDelete,
  } = useCharacter(parseInt(params.characterId));
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
  } = useCharacterSections(entity);
  return (
    <div>
      <div className='flex flex-col'>
        <EntityTitle>Werewolf</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            {Object.keys(userDetails).map((key: keyof IDetails) => (
              <CharacterInput
                key={key}
                partial={{ [key]: userDetails[key] }}
                update={updateEntity}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            {Object.keys(wolfDetails).map((key: keyof IDetails) => (
              <CharacterInput
                key={key}
                partial={{ [key]: wolfDetails[key] }}
                update={updateEntity}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            {Object.keys(restDetails).map((key: keyof IDetails) => (
              <CharacterInput
                key={key}
                partial={{ [key]: restDetails[key] }}
                update={updateEntity}
              />
            ))}
          </EntityAttributeColumn>
        </EntityGrid>
        <EntityTitle>Attributes</EntityTitle>
        <div className='grid grid-cols-3 gap-4'>
          <EntityAttributeColumn>
            <p>Physical</p>
            {Object.keys(physicalAttributes).map(
              (key: keyof IPhysicalAttributes) => (
                <CharacterInput
                  key={key}
                  partial={{ [key]: physicalAttributes[key] }}
                  update={updateEntity}
                />
              ),
            )}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Social</p>
            {Object.keys(socialAttributes).map(
              (key: keyof ISocialAttributes) => (
                <CharacterInput
                  key={key}
                  partial={{ [key]: socialAttributes[key] }}
                  update={updateEntity}
                />
              ),
            )}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Mental</p>
            {Object.keys(mentalAttributes).map(
              (key: keyof IMentalAttributes) => (
                <CharacterInput
                  key={key}
                  partial={{ [key]: mentalAttributes[key] }}
                  update={updateEntity}
                />
              ),
            )}
          </EntityAttributeColumn>
        </div>
      </div>
      <EntityTitle>Character abilities:</EntityTitle>
      <EntityGrid>
        <EntityAttributeColumn>
          <p>Talents</p>
          {Object.keys(talents).map((key: keyof ITalents) => (
            <CharacterInput
              key={key}
              partial={{ [key]: talents[key] }}
              update={updateEntity}
            />
          ))}
        </EntityAttributeColumn>
        <EntityAttributeColumn>
          <p>Skills</p>
          {Object.keys(skills).map((key: keyof ISkills) => (
            <CharacterInput
              key={key}
              partial={{ [key]: skills[key] }}
              update={updateEntity}
            />
          ))}
        </EntityAttributeColumn>
        <EntityAttributeColumn>
          <p>Knowledges</p>
          {Object.keys(knowledges).map((key: keyof IKnowledges) => (
            <CharacterInput
              key={key}
              partial={{ [key]: knowledges[key] }}
              update={updateEntity}
            />
          ))}
        </EntityAttributeColumn>
      </EntityGrid>
      <EntityTitle>Advantages</EntityTitle>
      <EntityGrid>
        <EntityAttributeColumn>
          {Object.keys(renown).map((key: keyof IRenown) => (
            <CharacterInput
              key={key}
              partial={{ [key]: renown[key] }}
              update={updateEntity}
            />
          ))}
        </EntityAttributeColumn>
        <EntityAttributeColumn>
          {Object.keys(self).map((key: keyof ISelf) => (
            <CharacterInput
              key={key}
              partial={{ [key]: self[key] }}
              update={updateEntity}
            />
          ))}
        </EntityAttributeColumn>
      </EntityGrid>
      <EntityDelete
        entityName={CHARACTER_ENTITY_NAME}
        showConfirmation={confirmDelete}
        deleteEntity={deleteEntity}
        cancelDelete={cancelDeleteEntity}
      />
    </div>
  );
}
