import { Fight } from '../fight.entity';
import { TurnOrder } from './turn-order.domain';
import { Unit } from './unit.domain';

export class Director {
  public round: number;
  public turnOrder: TurnOrder;
  public units: Unit[];
  public groupA: Unit[];
  public groupB: Unit[];
  constructor(public readonly fight: Fight) {
    this.groupA = this.fight.groupA.map(
      (character) => new Unit(character, 'A'),
    );
    this.groupB = this.fight.groupB.map(
      (character) => new Unit(character, 'B'),
    );

    this.units = [...this.groupA, ...this.groupB];
    this.turnOrder = new TurnOrder(this.units);
    this.round = 0;
    this.startRound();
  }

  public startRound() {
    this.round++;
    let currentUnit = this.turnOrder.nextTurn();
    while (currentUnit !== undefined) {
      console.log(
        'This is round ' + this.round + ' turn ' + this.turnOrder.turn,
      );
      console.log(
        'It is now Group ' +
          currentUnit.group +
          "'s " +
          currentUnit.character.name +
          "'s turn",
      );
      const target = this.getTarget(currentUnit);
      console.log('The target is ' + target.character.name);
      const damage = currentUnit.brawl(6, 6);
      const soak = target.soak(damage);
      console.log('The damage after soaking is ' + soak);
      target.receiveDamage(soak);
      console.log('The target health is now ' + target.health);
      currentUnit = this.turnOrder.nextTurn();
    }
    return 'Round finished!';
  }

  public getTarget(unit: Unit): Unit {
    if (unit.group === 'A') {
      return this.groupB[0];
    } else return this.groupA[0];
  }
}
