import React from 'react';
import { useParams } from 'react-router';

import { Background } from '@/main/modules/background/domain/background.entity';
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
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import CharacterBackgroundModal from '@/renderer/components/character/CharacterBackgroundModal';
import EntityAttributeColumn from '@/renderer/components/common/entity/EntityAttributeColumn';
import EntityDelete from '@/renderer/components/common/entity/EntityDelete';
import EntityGrid from '@/renderer/components/common/entity/EntityGrid';
import EntityInputGroupNumber from '@/renderer/components/common/entity/EntityInputGroupNumber';
import EntityInputGroupText from '@/renderer/components/common/entity/EntityInputGroupText';
import EntityInputSelect from '@/renderer/components/common/entity/EntityInputSelect';
import EntityModalList from '@/renderer/components/common/entity/EntityModalList';
import EntityTitle from '@/renderer/components/common/entity/EntityTitle';
import Main from '@/renderer/components/common/layout/Main';
import { useCharacter } from '@/renderer/hooks/character/useCharacter';
import { useCharacterSections } from '@/renderer/hooks/character/useCharacterStats';
import { useReadAllGifts } from '@/renderer/hooks/gift/useReadAllGifts';
import { useReadAllRituals } from '@/renderer/hooks/ritual/useReadAllRituals';

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
  const { entities: rituals } = useReadAllRituals();

  const handleUpdate = <T extends keyof Character>(
    propertyName: string,
    propertyValue: Character[T],
  ) => {
    updateEntity({
      [propertyName]: propertyValue,
    });
  };
  return (
    <Main>
      <div className='flex flex-col flex-1 w-full gap-8'>
        <div>
          <EntityTitle>Werewolf</EntityTitle>
          <EntityGrid>
            <EntityAttributeColumn>
              {Object.keys(userDetails).map((key: keyof IDetails) => (
                <EntityInputGroupText
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
              <EntityInputGroupText
                propertyName='tribe'
                propertyValue={wolfDetails.tribe}
                update={handleUpdate}
              />
            </EntityAttributeColumn>
            <EntityAttributeColumn>
              {Object.keys(restDetails).map((key: keyof IDetails) => (
                <EntityInputGroupText
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
                  <EntityInputGroupNumber
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
                  <EntityInputGroupNumber
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
                  <EntityInputGroupNumber
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
                <EntityInputGroupNumber
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
                <EntityInputGroupNumber
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
                <EntityInputGroupNumber
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
          <EntityAttributeColumn>
            <p>Renown</p>
            <EntityGrid columns={2}>
              <EntityAttributeColumn>
                {Object.keys(renown).map((key: keyof IRenown) => (
                  <EntityInputGroupNumber
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
                  <EntityInputGroupNumber
                    key={key}
                    maxDots={10}
                    propertyName={key}
                    propertyValue={self[key]}
                    update={handleUpdate}
                  />
                ))}
              </EntityAttributeColumn>
            </EntityGrid>
          </EntityAttributeColumn>
        </div>
        <EntityAttributeColumn>
          <p>Backgrounds</p>
          <CharacterBackgroundModal
            backgrounds={advantages.backgrounds ?? []}
            update={(e: Background[]) => handleUpdate('backgrounds', e)}
          />
        </EntityAttributeColumn>
        <div>
          <EntityGrid columns={2}>
            <EntityAttributeColumn>
              <p>Rituals</p>
              <EntityModalList<Ritual>
                allValues={rituals}
                selectedValues={advantages.rites || []}
                propertyName='rites'
                update={handleUpdate}
              />
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
    </Main>
  );
}
