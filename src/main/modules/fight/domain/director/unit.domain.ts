import { Character } from '@/main/modules/character/domain/character.entity';
import {
  IKnowledges,
  ISkills,
  ITalents,
} from '@/main/modules/character/domain/interfaces/abilities.interface';
import { IAttributes } from '@/main/modules/character/domain/interfaces/attributes.interface';
import { D10 } from '@/shared/utils/dice';

import { UnitStats } from './unit-stats.domain';

export class Unit {
  public id: number;
  private _initiative: number;
  private _health: number;
  private _attributes: Record<keyof IAttributes, number>;
  private _talents: Record<keyof ITalents, number>;
  private _skills: Record<keyof ISkills, number>;
  private _knowledges: Record<keyof IKnowledges, number>;

  constructor(
    public readonly character: Character,
    public readonly group: 'A' | 'B',
  ) {
    this.id = character.id;
    this._initiative = 0;
    this._health = this.character.health;
    this._attributes = UnitStats.getAttributes(this.character);
    this._talents = UnitStats.getTalents(this.character);
    this._skills = UnitStats.getSkills(this.character);
    this._knowledges = UnitStats.getKnowledges(this.character);
  }

  rollInitiative() {
    const initiative = D10() + this.character.wits + this.character.dexterity;
    console.log(
      'Group ' +
        this.group +
        "'s " +
        this.character.name +
        ' rolled ' +
        initiative +
        ' for initiative',
    );
    return initiative;
  }

  public get health() {
    return this._health;
  }

  public getAttribute(attribute: keyof IAttributes): number {
    return this._attributes[attribute] ?? 0;
  }

  public getTalent(talent: keyof ITalents): number {
    return this._talents[talent] ?? 0;
  }

  public getSkill(skill: keyof ISkills): number {
    return this._skills[skill] ?? 0;
  }

  public getKnowledge(knowledge: keyof IKnowledges): number {
    return this._knowledges[knowledge] ?? 0;
  }

  public get initiative() {
    return this._initiative;
  }

  public get isAlive() {
    return this._health > 0;
  }

  public receiveDamage(damage: number) {
    this._health -= damage;
  }

  public brawl(attackRollDifficulty: number, damageRollDifficulty: number) {
    let attacks = 0;
    let damage = 0;
    const strength = this.getAttribute('strength');
    const dexterity = this.getAttribute('dexterity');
    const brawl = this.getTalent('brawl');
    console.log(this.character.name + ' has strength ' + strength);
    console.log(this.character.name + ' has dexterity ' + dexterity);
    console.log(this.character.name + ' has brawl ' + brawl);
    for (let i = 0; i < dexterity + brawl; i++) {
      const attackRoll = D10() >= attackRollDifficulty;
      attacks += attackRoll ? 1 : 0;
    }
    console.log('Attacks: ' + attacks);
    for (let i = 0; i < strength + brawl; i++) {
      const damageRoll = D10() >= damageRollDifficulty;
      damage += damageRoll ? 1 : 0;
    }
    console.log('Damage: ' + damage);
    return damage;
  }

  public soak(damage: number) {
    let totalDamage = damage;
    for (let i = 0; i < this.getAttribute('stamina'); i++) {
      const soakRoll = D10() >= 6;
      totalDamage -= soakRoll ? 1 : 0;
    }
    const minDamage = Math.max(0, totalDamage);
    return minDamage;
  }
}
