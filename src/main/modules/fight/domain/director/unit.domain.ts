import { Character } from '@/main/modules/character/domain/character.entity';
import { D10 } from '@/shared/utils/dice';

export class Unit {
  public initiative: number;
  constructor(
    public readonly character: Character,
    public readonly group: 'A' | 'B',
  ) {
    this.initiative = this.rollInitiative();
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
}
