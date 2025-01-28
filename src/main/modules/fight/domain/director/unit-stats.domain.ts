import { Character } from '@/main/modules/character/domain/character.entity';
import {
  IKnowledges,
  ISkills,
  ITalents,
} from '@/main/modules/character/domain/interfaces/abilities.interface';
import { IAttributes } from '@/main/modules/character/domain/interfaces/attributes.interface';

export class UnitStats {
  static getAttributes(character: Character): Required<IAttributes> {
    return {
      strength: character.strength,
      dexterity: character.dexterity,
      stamina: character.stamina,
      charisma: character.charisma,
      manipulation: character.manipulation,
      appearance: character.appearance,
      perception: character.perception,
      intelligence: character.intelligence,
      wits: character.wits,
    };
  }

  static getTalents(character: Character): Required<ITalents> {
    return {
      alertness: character.alertness,
      athletics: character.athletics,
      brawl: character.brawl,
      empathy: character.empathy,
      expression: character.expression,
      intimidation: character.intimidation,
      leadership: character.leadership,
      primalUrge: character.primalUrge,
      streetwise: character.streetwise,
      subterfuge: character.subterfuge,
    };
  }

  static getSkills(character: Character): Required<ISkills> {
    return {
      animalKen: character.animalKen,
      crafts: character.crafts,
      drive: character.drive,
      etiquette: character.etiquette,
      firearms: character.firearms,
      larceny: character.larceny,
      melee: character.melee,
      performance: character.performance,
      stealth: character.stealth,
      survival: character.survival,
    };
  }

  static getKnowledges(character: Character): Required<IKnowledges> {
    return {
      academics: character.academics,
      computer: character.computer,
      enigmas: character.enigmas,
      investigation: character.investigation,
      law: character.law,
      medicine: character.medicine,
      occult: character.occult,
      rituals: character.rituals,
      science: character.science,
      technology: character.technology,
    };
  }
}
