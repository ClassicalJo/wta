import { BaseEntity } from '../../common/domain/base.entity';
import { Gift } from '../../gift/domain/gift.entity';
import { Auspice } from './auspice.enum';
import { Breed } from './breed.enum';

export class Character extends BaseEntity {
  // Character details
  name?: string;
  playerName?: string;
  chronicle?: string;
  breed?: Breed;
  auspice?: Auspice;
  tribe?: string;
  packName?: string;
  packTotem?: string;
  concept?: string;

  // Attributes
  strength?: number;
  dexterity?: number;
  stamina?: number;
  charisma?: number;
  manipulation?: number;
  appearance?: number;
  perception?: number;
  intelligence?: number;
  wits?: number;

  // Abilities
  // Talents
  alertness?: number;
  athletics?: number;
  brawl?: number;
  empathy?: number;
  expression?: number;
  intimidation?: number;
  leadership?: number;
  primalUrge?: number;
  streetwise?: number;
  subterfuge?: number;

  //Skills
  animalKen?: number;
  crafts?: number;
  drive?: number;
  etiquette?: number;
  firearms?: number;
  larceny?: number;
  melee?: number;
  performance?: number;
  stealth?: number;
  survival?: number;

  //Knowledges
  academics?: number;
  computer?: number;
  enigmas?: number;
  investigation?: number;
  law?: number;
  medicine?: number;
  occult?: number;
  rituals?: number;
  science?: number;
  technology?: number;

  //Advantages
  //Renown
  glory?: number;
  honor?: number;
  wisdom?: number;

  //Self
  rage?: number;
  gnosis?: number;
  willpower?: number;

  //Advantages
  gifts?: Gift[];

  constructor(data?: {
    id?: number;
    name?: string;
    playerName?: string;
    chronicle?: string;
    breed?: Breed;
    auspice?: Auspice;
    tribe?: string;
    packName?: string;
    packTotem?: string;
    concept?: string;
    strength?: number;
    dexterity?: number;
    stamina?: number;
    charisma?: number;
    manipulation?: number;
    appearance?: number;
    perception?: number;
    intelligence?: number;
    wits?: number;
    alertness?: number;
    athletics?: number;
    brawl?: number;
    empathy?: number;
    expression?: number;
    intimidation?: number;
    leadership?: number;
    primalUrge?: number;
    streetwise?: number;
    subterfuge?: number;
    animalKen?: number;
    crafts?: number;
    drive?: number;
    etiquette?: number;
    firearms?: number;
    larceny?: number;
    melee?: number;
    performance?: number;
    stealth?: number;
    survival?: number;
    academics?: number;
    computer?: number;
    enigmas?: number;
    investigation?: number;
    law?: number;
    medicine?: number;
    occult?: number;
    rituals?: number;
    science?: number;
    technology?: number;
    glory?: number;
    honor?: number;
    wisdom?: number;
    rage?: number;
    gnosis?: number;
    willpower?: number;
  }) {
    super({ id: data?.id });
    this.name = data?.name;
    this.playerName = data?.name;
    this.chronicle = data?.chronicle;
    this.breed = data?.breed;
    this.auspice = data?.auspice;
    this.tribe = data?.tribe;
    this.packName = data?.packName;
    this.packTotem = data?.packTotem;
    this.concept = data?.concept;

    this.strength = data?.strength;
    this.dexterity = data?.dexterity;
    this.stamina = data?.stamina;
    this.charisma = data?.charisma;
    this.manipulation = data?.manipulation;
    this.appearance = data?.appearance;
    this.perception = data?.perception;
    this.intelligence = data?.intelligence;
    this.wits = data?.wits;

    this.alertness = data?.alertness;
    this.athletics = data?.athletics;
    this.brawl = data?.brawl;
    this.empathy = data?.empathy;
    this.expression = data?.expression;
    this.intimidation = data?.intimidation;
    this.leadership = data?.leadership;
    this.primalUrge = data?.primalUrge;
    this.streetwise = data?.streetwise;
    this.subterfuge = data?.subterfuge;

    this.animalKen = data?.animalKen;
    this.crafts = data?.crafts;
    this.drive = data?.drive;
    this.etiquette = data?.etiquette;
    this.firearms = data?.firearms;
    this.larceny = data?.larceny;
    this.melee = data?.melee;
    this.performance = data?.performance;
    this.stealth = data?.stealth;
    this.survival = data?.survival;

    this.academics = data?.academics;
    this.computer = data?.computer;
    this.enigmas = data?.enigmas;
    this.investigation = data?.investigation;
    this.law = data?.law;
    this.medicine = data?.medicine;
    this.occult = data?.occult;
    this.rituals = data?.rituals;
    this.science = data?.science;
    this.technology = data?.technology;

    this.glory = data?.glory;
    this.honor = data?.honor;
    this.wisdom = data?.wisdom;

    this.rage = data?.rage;
    this.gnosis = data?.gnosis;
    this.willpower = data?.willpower;
  }
}
