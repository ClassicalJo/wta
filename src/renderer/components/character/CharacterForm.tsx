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
import { useStats } from '@/renderer/hooks/common/useStats';
import { useReadAllGifts } from '@/renderer/hooks/gift/useReadAllGifts';
import { useReadAllRituals } from '@/renderer/hooks/ritual/useReadAllRituals';

import EntityAttributeColumn from '../common/entity/EntityAttributeColumn';
import EntityGrid from '../common/entity/EntityGrid';
import EntityInputGroupText from '../common/entity/EntityInputGroupText';
import EntitySubtitle from '../common/entity/EntitySubtitle';
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

  const { updateByPropertyName } = useStats(update);

  const addBackground = (background: Background) => {
    if (!character.backgrounds) character.backgrounds = [];
    update('backgrounds', [...character.backgrounds, background]);
  };

  const removeBackground = (background: Background) => {
    update(
      'backgrounds',
      character.backgrounds.filter((k) => k.id !== background.id),
    );
  };

  const updateBackground = (index: number, partial: Background) => {
    const background = character.backgrounds.at(index);
    const backgrounds = character.backgrounds.filter((k) => k !== background);
    update('backgrounds', [...backgrounds, { ...background, ...partial }]);
  };

  const updateBackgroundData = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLElement && e.target.dataset) {
      const dataset = e.target.dataset;
      const { index, value } = dataset;
      if (!index || !value) return;
      const background = character.backgrounds.at(Number(index));
      updateBackground(Number(index), { ...background, level: Number(value) });
    }
  };

  return (
    <div className='flex w-full flex-1 select-none flex-col gap-8'>
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
              update={(value: Auspice) => update('auspice', value)}
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
      <div onClick={updateByPropertyName}>
        <EntityTitle>Attributes</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            <EntitySubtitle>Physical</EntitySubtitle>
            {Object.keys(physicalAttributes).map(
              (key: keyof IPhysicalAttributes) => (
                <EntityInputGroupNumber<Character>
                  key={key}
                  propertyName={key}
                  propertyValue={physicalAttributes[key]}
                />
              ),
            )}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntitySubtitle>Social</EntitySubtitle>
            {Object.keys(socialAttributes).map(
              (key: keyof ISocialAttributes) => (
                <EntityInputGroupNumber<Character>
                  key={key}
                  propertyName={key}
                  propertyValue={socialAttributes[key]}
                />
              ),
            )}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntitySubtitle>Mental</EntitySubtitle>
            {Object.keys(mentalAttributes).map(
              (key: keyof IMentalAttributes) => (
                <EntityInputGroupNumber<Character>
                  key={key}
                  propertyName={key}
                  propertyValue={mentalAttributes[key]}
                />
              ),
            )}
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <div onClick={updateByPropertyName}>
        <EntityTitle>Abilities</EntityTitle>
        <EntityGrid>
          <EntityAttributeColumn>
            <EntitySubtitle>Talents</EntitySubtitle>
            {Object.keys(talents).map((key: keyof ITalents) => (
              <EntityInputGroupNumber<Character>
                key={key}
                propertyName={key}
                propertyValue={talents[key]}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntitySubtitle>Skills</EntitySubtitle>
            {Object.keys(skills).map((key: keyof ISkills) => (
              <EntityInputGroupNumber<Character>
                key={key}
                propertyName={key}
                propertyValue={skills[key]}
              />
            ))}
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntitySubtitle>Knowledges</EntitySubtitle>
            {Object.keys(knowledges).map((key: keyof IKnowledges) => (
              <EntityInputGroupNumber<Character>
                key={key}
                propertyName={key}
                propertyValue={knowledges[key]}
              />
            ))}
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <div onClick={updateByPropertyName}>
        <EntityTitle>Advantages</EntityTitle>
        <EntityAttributeColumn>
          <EntityGrid columns={2}>
            <EntityAttributeColumn>
              <EntitySubtitle>Renown</EntitySubtitle>
              {Object.keys(renown).map((key: keyof IRenown) => (
                <EntityInputGroupNumber<Character>
                  key={key}
                  maxDots={10}
                  propertyName={key}
                  propertyValue={renown[key]}
                />
              ))}
            </EntityAttributeColumn>
            <EntityAttributeColumn>
              <EntitySubtitle>Self</EntitySubtitle>
              {Object.keys(self).map((key: keyof ISelf) => (
                <EntityInputGroupNumber<Character>
                  key={key}
                  maxDots={10}
                  propertyName={key}
                  propertyValue={self[key]}
                />
              ))}
            </EntityAttributeColumn>
          </EntityGrid>
        </EntityAttributeColumn>
      </div>

      <div>
        <EntityGrid columns={2}>
          <EntityAttributeColumn>
            <EntitySubtitle>Rituals</EntitySubtitle>
            <EntityModalList<Ritual>
              allValues={rituals}
              selectedValues={advantages.rites || []}
              propertyName='rites'
              update={(e: Ritual[]) => update('rites', e)}
            />
          </EntityAttributeColumn>
          <EntityAttributeColumn>
            <EntitySubtitle>Gifts</EntitySubtitle>
            <EntityModalList<Gift>
              allValues={gifts}
              selectedValues={advantages.gifts || []}
              propertyName='gifts'
              update={(e: Gift[]) => update('gifts', e)}
            />
          </EntityAttributeColumn>
        </EntityGrid>
      </div>
      <EntityAttributeColumn onClick={updateBackgroundData}>
        <EntityTitle>Backgrounds</EntityTitle>
        <CharacterBackgroundModal
          backgrounds={advantages.backgrounds ?? []}
          addBackground={addBackground}
          removeBackground={removeBackground}
          updateBackground={updateBackground}
        />
      </EntityAttributeColumn>
    </div>
  );
}
