import React from 'react';

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
import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import CharacterBackgroundModal from '@/renderer/components/character/CharacterBackgroundModal';
import EntityInputGroupNumber from '@/renderer/components/common/entity/EntityInputGroupNumber';
import EntityInputSelect from '@/renderer/components/common/entity/EntityInputSelect';
import EntityModalList from '@/renderer/components/common/entity/EntityModalList';
import { useCharacterSections } from '@/renderer/hooks/character/useCharacterStats';
import { useReadAllGifts } from '@/renderer/hooks/gift/useReadAllGifts';
import { useReadAllRituals } from '@/renderer/hooks/ritual/useReadAllRituals';

import EntityAttributeColumn from '../common/entity/EntityAttributeColumn';
import EntityGrid from '../common/entity/EntityGrid';
import EntityInputGroupText from '../common/entity/EntityInputGroupText';
import EntityTitle from '../common/entity/EntityTitle';

type Props = {
  formTitle: string;
  character: Omit<Character, 'id'>;
  update: <T extends Character[keyof Character]>(
    propertyName: string,
    value: T,
  ) => void;
};
export default function CharacterForm({ formTitle, update, character }: Props) {
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
  } = useCharacterSections(character);

  const { entities: rituals } = useReadAllRituals();
  const { entities: gifts } = useReadAllGifts();
  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <div>
        <EntityTitle>{formTitle}</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            {Object.keys(userDetails).map((key: keyof IDetails) => (
              <EntityInputGroupText
                key={key}
                propertyName={key}
                propertyValue={userDetails[key]}
                update={(value: string) => update(key, value)}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntityInputSelect
              list={Object.values(Breed)}
              propertyName='breed'
              propertyValue={wolfDetails.breed}
              update={(value: Breed) => update('breed', value)}
            />
            <EntityInputSelect
              list={Object.values(Auspice)}
              propertyName='auspice'
              propertyValue={wolfDetails.auspice}
              update={(value: Auspice) => update('breed', value)}
            />
            <EntityInputGroupText
              propertyName='tribe'
              propertyValue={wolfDetails.tribe}
              update={(value: string) => update('tribe', value)}
            />
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            {Object.keys(restDetails).map((key: keyof IDetails) => (
              <EntityInputGroupText
                key={key}
                propertyName={key}
                propertyValue={userDetails[key]}
                update={(value: string) => update(key, value)}
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
                  update={(e: number) => update(key, e)}
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
                  update={(e: number) => update(key, e)}
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
                  update={(e: number) => update(key, e)}
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
                update={(e: number) => update(key, e)}
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
                update={(e: number) => update(key, e)}
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
                update={(e: number) => update(key, e)}
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
                  update={(e: number) => update(key, e)}
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
                  update={(e: number) => update(key, e)}
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
          update={(e: Background[]) => update('backgrounds', e)}
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
              update={(e: Ritual[]) => update('rites', e)}
            />
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <p>Gifts</p>
            <EntityModalList<Gift>
              allValues={gifts}
              selectedValues={advantages.gifts || []}
              propertyName='gifts'
              update={(e: Gift[]) => update('gifts', e)}
            />
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
    </div>
  );
}
