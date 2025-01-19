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

export function useCharacterSections(character: Character) {
  const {
    id,
    name,
    playerName,
    chronicle,
    breed,
    auspice,
    tribe,
    packName,
    packTotem,
    concept,
  } = character;
  const { strength, dexterity, stamina } = character;
  const { charisma, manipulation, appearance } = character;
  const { perception, intelligence, wits } = character;
  const {
    alertness,
    athletics,
    brawl,
    empathy,
    expression,
    intimidation,
    leadership,
    primalUrge,
    streetwise,
    subterfuge,
  } = character;
  const {
    animalKen,
    crafts,
    drive,
    etiquette,
    firearms,
    larceny,
    melee,
    performance,
    stealth,
    survival,
  } = character;
  const {
    academics,
    computer,
    enigmas,
    investigation,
    law,
    medicine,
    occult,
    rituals,
    science,
    technology,
  } = character;
  const { glory, honor, wisdom } = character;
  const { rage, gnosis, willpower } = character;

  const userDetails: Partial<IDetails> = {
    name,
    playerName,
    chronicle,
  };

  const wolfDetails: Partial<IDetails> = {
    breed,
    auspice,
    tribe,
  };

  const restDetails: Partial<IDetails> = {
    packName,
    packTotem,
    concept,
  };
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

  const talents: ITalents = {
    alertness,
    athletics,
    brawl,
    empathy,
    expression,
    intimidation,
    leadership,
    primalUrge,
    streetwise,
    subterfuge,
  };

  const skills: ISkills = {
    animalKen,
    crafts,
    drive,
    etiquette,
    firearms,
    larceny,
    melee,
    performance,
    stealth,
    survival,
  };
  const knowledges: IKnowledges = {
    academics,
    computer,
    enigmas,
    investigation,
    law,
    medicine,
    occult,
    rituals,
    science,
    technology,
  };

  const renown: IRenown = {
    glory,
    honor,
    wisdom,
  };

  const self: ISelf = {
    rage,
    gnosis,
    willpower,
  };

  return {
    id,
    userDetails,
    wolfDetails,
    restDetails,
    physicalAttributes,
    mentalAttributes,
    socialAttributes,
    talents,
    skills,
    knowledges,
    renown,
    self,
  };
}
