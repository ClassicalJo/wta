import React from 'react';
import { useParams } from 'react-router';

import { Auspice } from '@/main/modules/character/domain/auspice.enum';
import { Breed } from '@/main/modules/character/domain/breed.enum';
import { Character } from '@/main/modules/character/domain/character.entity';
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
import { Gift } from '@/main/modules/gift/domain/gift.entity';
import EntityAttributeColumn from '@/renderer/components/common/entity/EntityAttributeColumn';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import EntityInputNumber from '@/renderer/components/common/entity/EntityInputNumber';
import EntityInputSelect from '@/renderer/components/common/entity/EntityInputSelect';
import EntityInputText from '@/renderer/components/common/entity/EntityInputText';
import EntityModalList from '@/renderer/components/common/entity/EntityModalList';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import { useCharacter } from '@/renderer/hooks/character/useCharacter';
import { useCharacterSections } from '@/renderer/hooks/character/useCharacterStats';
import { useReadAllGifts } from '@/renderer/hooks/gift/useReadAllGifts';

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
    advantages,
  } = useCharacterSections(entity);

  const { entities: gifts } = useReadAllGifts();

  const handleUpdate = <T extends keyof Character>(
    propertyName: string,
    propertyValue: Character[T],
  ) => {
    updateEntity({
      [propertyName]: propertyValue,
    });
  };
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <EntityTitle>Werewolf</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            {Object.keys(userDetails).map((key: keyof IDetails) => (
              <EntityInputText
                key={key}
                propertyName={key}
                propertyValue={userDetails[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntityInputSelect
              list={Object.values(Breed)}
              propertyName='breed'
              propertyValue={wolfDetails.breed}
              update={handleUpdate}
            />
            <EntityInputSelect
              list={Object.values(Auspice)}
              propertyName='auspice'
              propertyValue={wolfDetails.auspice}
              update={handleUpdate}
            />
            <EntityInputText
              propertyName='tribe'
              propertyValue={wolfDetails.tribe}
              update={handleUpdate}
            />
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            {Object.keys(restDetails).map((key: keyof IDetails) => (
              <EntityInputText
                key={key}
                propertyName={key}
                propertyValue={userDetails[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <div>
        <EntityTitle>Attributes</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            <p>Physical</p>
            {Object.keys(physicalAttributes).map(
              (key: keyof IPhysicalAttributes) => (
                <EntityInputNumber
                  key={key}
                  propertyName={key}
                  propertyValue={physicalAttributes[key]}
                  update={handleUpdate}
                />
              ),
            )}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Social</p>
            {Object.keys(socialAttributes).map(
              (key: keyof ISocialAttributes) => (
                <EntityInputNumber
                  key={key}
                  propertyName={key}
                  propertyValue={socialAttributes[key]}
                  update={handleUpdate}
                />
              ),
            )}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Mental</p>
            {Object.keys(mentalAttributes).map(
              (key: keyof IMentalAttributes) => (
                <EntityInputNumber
                  key={key}
                  propertyName={key}
                  propertyValue={mentalAttributes[key]}
                  update={handleUpdate}
                />
              ),
            )}
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <div>
        <EntityTitle>Abilities:</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            <p>Talents</p>
            {Object.keys(talents).map((key: keyof ITalents) => (
              <EntityInputNumber
                key={key}
                propertyName={key}
                propertyValue={talents[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Skills</p>
            {Object.keys(skills).map((key: keyof ISkills) => (
              <EntityInputNumber
                key={key}
                propertyName={key}
                propertyValue={skills[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Knowledges</p>
            {Object.keys(knowledges).map((key: keyof IKnowledges) => (
              <EntityInputNumber
                key={key}
                propertyName={key}
                propertyValue={knowledges[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <div>
        <EntityTitle>Advantages</EntityTitle>
        <EntityGrid columns={2}>
          <EntityAttributeColumn>
            {Object.keys(renown).map((key: keyof IRenown) => (
              <EntityInputNumber
                key={key}
                maxDots={10}
                propertyName={key}
                propertyValue={renown[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            {Object.keys(self).map((key: keyof ISelf) => (
              <EntityInputNumber
                key={key}
                maxDots={10}
                propertyName={key}
                propertyValue={self[key]}
                update={handleUpdate}
              />
            ))}
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <div>
        <EntityGrid columns={2}>
          <EntityAttributeColumn>
            <p>Backgrounds</p>
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Gifts</p>
            <EntityModalList<Gift>
              allValues={gifts}
              selectedValues={advantages.gifts || []}
              propertyName='gifts'
              update={handleUpdate}
            />
          </EntityAttributeColumn>
        </EntityGrid>
        <EntityDelete
          entityName={CHARACTER_ENTITY_NAME}
          showConfirmation={confirmDelete}
          deleteEntity={deleteEntity}
          cancelDelete={cancelDeleteEntity}
        />
      </div>
    </div>
  );
}
